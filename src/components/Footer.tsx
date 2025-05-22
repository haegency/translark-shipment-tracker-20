
import React from 'react';
import { Package, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Package className="h-6 w-6 text-gold" />
              <h3 className="text-xl font-bold">Translark Logistics</h3>
            </div>
            <p className="max-w-xs text-gray-300">
              Reliable air, ocean, and road shipping solutions delivered with excellence.
            </p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gold transition duration-200">Home</a></li>
              <li><a href="/track" className="hover:text-gold transition duration-200">Track Shipment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gold" />
                <span>info@translark.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gold" />
                <span>+234-800-123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Translark Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
