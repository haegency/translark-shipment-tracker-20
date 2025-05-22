
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0 md:w-1/4">
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-6 w-6 text-gold" />
                <h3 className="text-xl font-bold">Translark Logistics</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We are your trusted partner in navigating the complexities of global trade and ensuring seamless delivery of goods to their destination.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gold transition duration-200">Home</Link></li>
                <li><Link to="/about" className="hover:text-gold transition duration-200">About Us</Link></li>
                <li><Link to="/services" className="hover:text-gold transition duration-200">Services</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition duration-200">Contact Us</Link></li>
                <li><Link to="/track" className="hover:text-gold transition duration-200">Track Shipment</Link></li>
              </ul>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="hover:text-gold transition duration-200">Road Freight</Link></li>
                <li><Link to="/services" className="hover:text-gold transition duration-200">Air Freight</Link></li>
                <li><Link to="/services" className="hover:text-gold transition duration-200">Ocean Freight</Link></li>
                <li><Link to="/services" className="hover:text-gold transition duration-200">E-commerce Logistics</Link></li>
                <li><Link to="/services" className="hover:text-gold transition duration-200">Industry Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Monday-Friday:</span>
                  <span>8:00-19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00-18:00</span>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 mt-6">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gold mr-2" />
                  <span>info@translark.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gold mr-2" />
                  <span>+234-800-123-4567</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gold mr-2 mt-0.5" />
                  <span>3499 Sigley Road, Belleville, KS 66935, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="py-6 bg-navy border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-gray-300">Subscribe to get the latest updates</p>
          </div>
          <div className="w-full md:w-2/5 flex">
            <Input placeholder="Your mail address" className="bg-white/10 border-gray-700 rounded-r-none text-white" />
            <Button className="bg-gold hover:bg-amber-500 text-navy rounded-l-none">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-4 bg-navy border-t border-gray-800 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Translark Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
