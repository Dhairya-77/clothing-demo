
import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Contact from './pages/Contact';
import Inventory from './pages/Inventory';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <BrowserRouter>
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <Routes>
                      <Route path="/clothing-demo/" element={<Home />} />
                      <Route path="/clothing-demo/categories" element={<Categories />} />
                      <Route path="/clothing-demo/products" element={<Products />} />
                      <Route path="/clothing-demo/product/:id" element={<ProductDetail />} />
                      <Route path="/clothing-demo/cart" element={<Cart />} />
                      <Route path="/clothing-demo/checkout" element={<Checkout />} />
                      <Route path="/clothing-demo/order-confirmation" element={<OrderConfirmation />} />
                      <Route path="/clothing-demo/contact" element={<Contact />} />
                      <Route path="/clothing-demo/inventory" element={<Inventory />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </AnimatePresence>
                  <Toaster />
                  <Sonner />
                </div>
              </BrowserRouter>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
