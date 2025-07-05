
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ShoppingBag, Home } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderTotal, orderItems } = location.state || { orderTotal: 0, orderItems: 0 };

  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  useEffect(() => {
    // Confetti effect could be added here
    console.log('Order confirmed!');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="mb-8"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Order Confirmed! 🎉
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Thank you for your purchase. Your order has been successfully placed!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Order Details
          </h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Order Number:</span>
              <span className="font-semibold text-gray-900 dark:text-white">#{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Items:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{orderItems}</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-4">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Total Amount:</span>
              <span className="text-2xl font-bold text-orange-600">₹{orderTotal.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              <strong>What's next?</strong><br />
              You'll receive an email confirmation shortly with tracking details. 
              Your order will be delivered within 3-5 business days.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="clothing-demo/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors duration-300 flex items-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Continue Shopping</span>
            </motion.button>
          </Link>

          <Link to="clothing-demo/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
