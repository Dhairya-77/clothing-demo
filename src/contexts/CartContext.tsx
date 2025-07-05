
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  stock: number;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; selectedSize: string } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number; selectedSize: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; selectedSize: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'UPDATE_STOCK'; payload: { id: number; newStock: number } };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product, quantity: number, selectedSize: string) => void;
  removeFromCart: (id: number, selectedSize: string) => void;
  updateQuantity: (id: number, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  updateStock: (id: number, newStock: number) => void;
  items: CartItem[];
  getTotalPrice: () => number;
  getTotalItems: () => number;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, selectedSize } = action.payload;
      const existingItem = state.items.find(
        item => item.id === product.id && item.selectedSize === selectedSize
      );

      let newItems;
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: Math.min(item.quantity + quantity, item.stock) }
            : item
        );
      } else {
        newItems = [...state.items, { ...product, quantity, selectedSize }];
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'REMOVE_FROM_CART': {
      const { id, selectedSize } = action.payload;
      const newItems = state.items.filter(item => !(item.id === id && item.selectedSize === selectedSize));
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const { id, selectedSize, quantity } = action.payload;
      const newItems = state.items.map(item =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity: Math.min(Math.max(1, quantity), item.stock) }
          : item
      );
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'UPDATE_STOCK': {
      const { id, newStock } = action.payload;
      const newItems = state.items.map(item =>
        item.id === id 
          ? { ...item, stock: newStock, quantity: Math.min(item.quantity, newStock) }
          : item
      );
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addToCart = (product: Product, quantity: number, selectedSize: string) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, selectedSize } });
  };

  const removeFromCart = (id: number, selectedSize: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, selectedSize } });
  };

  const updateQuantity = (id: number, selectedSize: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, selectedSize, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const updateStock = (id: number, newStock: number) => {
    dispatch({ type: 'UPDATE_STOCK', payload: { id, newStock } });
  };

  const getTotalPrice = () => {
    return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return state.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        updateStock,
        items: state.items,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
