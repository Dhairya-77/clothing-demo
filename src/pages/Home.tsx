
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Home = () => {
  const scrollToCategories = () => {
    const element = document.getElementById('categories-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Carefully curated fashion pieces for the modern man"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our products"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free delivery on orders above ₹999"
    }
  ];

  const categories = [
    { name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
    { name: 'Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400' },
    { name: 'Pants', image: '<a href="https://www.vecteezy.com/photo/44491558-a-simple-turtleneck-sweater-paired-with-highwaisted-trousers-and-loafers-showcasing-the-simplicity-and-versatility-of-genderfluid-fashion-background-a-peaceful-garden-representin">a-simple-turtleneck-sweater-paired-with-highwaisted-trousers-and-loafers-showcasing-the-simplicity-and-versatility-of-genderfluid-fashion-background-a-peaceful-garden-representin Stock photos by Vecteezy</a>' },
    { name: 'Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920"
            alt="Fashion Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            PLANET<span className="text-yellow-400">FASHION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-2 max-w-3xl mx-auto"
          >
            Where style speaks and fashion flourishes. Discover the allure of contemporary sophistication with our curated collections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <motion.button
              onClick={scrollToCategories}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Men's Fashion</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section id="categories-preview" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-400">
              Find exactly what you're looking for
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Link to="clothing-demo/categories">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800 aspect-square">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="clothing-demo/categories">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors duration-300 inline-flex items-center space-x-2"
              >
                <span>View All Categories</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose PLANETFASHION?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're committed to bringing you the finest men's fashion with uncompromising quality and style.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">
                PLANET<span className="text-yellow-400">FASHION</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm">
                Where style speaks and fashion flourishes. Discover the allure of contemporary sophistication with our curated collections.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
                <MessageCircle className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-white font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/categories" className="hover:text-yellow-400 transition-colors">Men's Fashion</Link></li>
                <li><Link to="/products" className="hover:text-yellow-400 transition-colors">New Arrivals</Link></li>
                <li><Link to="/products" className="hover:text-yellow-400 transition-colors">Sale</Link></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="text-white font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
                <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4">Subscribe to our Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Get the latest updates on new arrivals and exclusive offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-yellow-400"
                />
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-r-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 Planet Fashion. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">hello@planetfashion.com</span>
              <span className="text-gray-500 text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
