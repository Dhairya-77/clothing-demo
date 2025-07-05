
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, AlertTriangle, TrendingUp, TrendingDown, Download } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products as initialProducts } from '../data/products';
import { toast } from 'sonner';

const Inventory = () => {
  const { state } = useCart();

  // Calculate stock levels
  const stockLevels = initialProducts.map(product => {
    const soldQuantity = state.items
      .filter(item => item.id === product.id)
      .reduce((total, item) => total + item.quantity, 0);
    
    const currentStock = Math.max(0, product.stock - soldQuantity);
    
    return {
      ...product,
      currentStock,
      soldQuantity,
      status: currentStock === 0 ? 'out' : currentStock <= 5 ? 'low' : currentStock >= 50 ? 'high' : 'normal'
    };
  });

  // Separate clothing and dental items
  const clothingItems = stockLevels.filter(item => item.category !== 'Dental');
  const dentalItems = stockLevels.filter(item => item.category === 'Dental');

  const lowStockItems = stockLevels.filter(item => item.status === 'low');
  const outOfStockItems = stockLevels.filter(item => item.status === 'out');
  const highStockItems = stockLevels.filter(item => item.status === 'high');

  useEffect(() => {
    if (lowStockItems.length > 0) {
      toast.warning(`${lowStockItems.length} items are running low on stock!`);
    }
    if (outOfStockItems.length > 0) {
      toast.error(`${outOfStockItems.length} items are out of stock!`);
    }
    if (highStockItems.length > 0) {
      toast.info(`${highStockItems.length} items have high stock levels`);
    }
  }, [lowStockItems.length, outOfStockItems.length, highStockItems.length]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'out': return 'text-red-500 bg-red-100 dark:bg-red-900/20';
      case 'low': return 'text-orange-500 bg-orange-100 dark:bg-orange-900/20';
      case 'high': return 'text-blue-500 bg-blue-100 dark:bg-blue-900/20';
      default: return 'text-green-500 bg-green-100 dark:bg-green-900/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'out': return <AlertTriangle className="w-4 h-4" />;
      case 'low': return <TrendingDown className="w-4 h-4" />;
      case 'high': return <TrendingUp className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const downloadStockData = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Product Name,Category,Current Stock,Initial Stock,Sold Quantity,Status,Price\n"
      + stockLevels.map(item => 
          `"${item.name}","${item.category}",${item.currentStock},${item.stock},${item.soldQuantity},"${item.status}",${item.price}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "stock_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Stock data downloaded successfully!");
  };

  const downloadSalesData = () => {
    const salesData = stockLevels.filter(item => item.soldQuantity > 0);
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Product Name,Category,Sold Quantity,Revenue,Price Per Unit\n"
      + salesData.map(item => 
          `"${item.name}","${item.category}",${item.soldQuantity},${item.soldQuantity * item.price},${item.price}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sales_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Sales data downloaded successfully!");
  };

  const InventoryTable = ({ items, title }: { items: typeof stockLevels, title: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8"
    >
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Current Stock
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Sold
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">
                  {item.currentStock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.soldQuantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {getStatusIcon(item.status)}
                    <span className="ml-1 capitalize">{item.status === 'out' ? 'Out of Stock' : item.status === 'low' ? 'Low Stock' : item.status === 'high' ? 'High Stock' : 'Normal'}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">
                  ₹{item.price.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Inventory Management
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor and manage your product stock levels
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={downloadStockData}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Stock Data
              </button>
              <button
                onClick={downloadSalesData}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Sales Data
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stock Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Products</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stockLevels.length}
                </p>
              </div>
              <Package className="w-8 h-8 text-blue-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Out of Stock</p>
                <p className="text-2xl font-bold text-red-500">
                  {outOfStockItems.length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Low Stock</p>
                <p className="text-2xl font-bold text-orange-500">
                  {lowStockItems.length}
                </p>
              </div>
              <TrendingDown className="w-8 h-8 text-orange-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">High Stock</p>
                <p className="text-2xl font-bold text-blue-500">
                  {highStockItems.length}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </motion.div>
        </div>

        {/* Clothing Inventory Table */}
        <InventoryTable items={clothingItems} title="Clothing Inventory" />

        {/* Dental Inventory Table */}
        <InventoryTable items={dentalItems} title="Dental Products Inventory" />
      </div>
    </div>
  );
};

export default Inventory;
