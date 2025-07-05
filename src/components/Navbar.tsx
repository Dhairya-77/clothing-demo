
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Sun, Moon, Search, User, LogOut, Package } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';
import SearchComponent from './Search';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  // Add inventory to nav items if user is logged in
  if (isAuthenticated) {
    navItems.push({ name: 'Inventory', path: '/inventory' });
  }

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl md:text-2xl font-bold text-white"
              >
                PLANET<span className="text-yellow-400">FASHION</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                    isActive(item.path)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-300" />
                )}
              </button>

              {/* Search */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Search className="h-5 w-5 text-gray-300" />
              </button>

              {/* User Authentication */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-yellow-400 font-medium">
                    Welcome, {user?.username}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="h-5 w-5 text-gray-300" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <User className="h-5 w-5 text-gray-300" />
                </button>
              )}

              {/* Cart */}
              <Link to="/cart" className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="h-6 w-6 text-gray-300" />
                  {state.items.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                    >
                      {state.items.reduce((total, item) => total + item.quantity, 0)}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Cart */}
              <Link to="/cart" className="relative">
                <div className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-gray-300" />
                  {state.items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {state.items.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </div>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-base font-medium transition-colors hover:text-yellow-400 ${
                      isActive(item.path)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5 text-gray-300" />
                    ) : (
                      <Moon className="h-5 w-5 text-gray-300" />
                    )}
                  </button>
                  <button 
                    onClick={() => {
                      setIsSearchOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Search className="h-5 w-5 text-gray-300" />
                  </button>
                  {isAuthenticated ? (
                    <>
                      <span className="text-sm text-yellow-400">Hi, {user?.username}</span>
                      <button
                        onClick={handleLogout}
                        className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <LogOut className="h-5 w-5 text-gray-300" />
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => {
                        setIsLoginOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <User className="h-5 w-5 text-gray-300" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      
      {/* Search Modal */}  
      <SearchComponent isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
