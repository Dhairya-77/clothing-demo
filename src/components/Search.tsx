
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const Search = ({ isOpen, onClose }: SearchProps) => {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-start justify-center z-50 pt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl mx-4 max-h-[70vh] overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <SearchIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 text-lg bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-96">
          {query === '' ? (
            <p className="text-gray-500 text-center">Start typing to search products...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-gray-500 text-center">No products found</p>
          ) : (
            <div className="space-y-3">
              {filteredProducts.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <span className="font-bold text-yellow-400">
                    ₹{product.price.toLocaleString()}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Search;
