
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Newsletter - Moved to top */}
      <div className="py-8 bg-navy border-b border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold mb-2">Newsletter</h3>
            <p className="text-gray-300">Stay updated with our latest news and offers</p>
          </div>
          <div className="w-full md:w-2/5">
            <div className="flex">
              <Input placeholder="Your email address" className="bg-white/10 border-gray-700 rounded-r-none text-white" />
              <Button className="bg-gold hover:bg-amber-500 text-navy rounded-l-none">
                Subscribe <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Rearranged */}
      <div className="pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Package className="h-8 w-8 text-gold" />
                <h3 className="text-2xl font-bold">Translark Logistics</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We are your trusted partner in navigating the complexities of global trade and ensuring seamless delivery of goods to their destination.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-gold hover:bg-amber-500 p-2 rounded-full transition-colors">
                  <Facebook className="h-5 w-5 text-navy" />
                </a>
                <a href="#" className="bg-gold hover:bg-amber-500 p-2 rounded-full transition-colors">
                  <Twitter className="h-5 w-5 text-navy" />
                </a>
                <a href="#" className="bg-gold hover:bg-amber-500 p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5 text-navy" />
                </a>
                <a href="#" className="bg-gold hover:bg-amber-500 p-2 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5 text-navy" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="flex items-center hover:text-gold transition duration-200">
                    <ArrowRight className="h-4 w-4 mr-2 text-gold" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="flex items-center hover:text-gold transition duration-200">
                    <ArrowRight className="h-4 w-4 mr-2 text-gold" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center hover:text-gold transition duration-200">
                    <ArrowRight className="h-4 w-4 mr-2 text-gold" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center hover:text-gold transition duration-200">
                    <ArrowRight className="h-4 w-4 mr-2 text-gold" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/track" className="flex items-center hover:text-gold transition duration-200">
                    <ArrowRight className="h-4 w-4 mr-2 text-gold" />
                    Track Shipment
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="flex items-center hover:text-gold transition duration-200">
                    <Truck className="h-4 w-4 mr-2 text-gold" />
                    Road Freight
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center hover:text-gold transition duration-200">
                    <Plane className="h-4 w-4 mr-2 text-gold" />
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center hover:text-gold transition duration-200">
                    <Ship className="h-4 w-4 mr-2 text-gold" />
                    Ocean Freight
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center hover:text-gold transition duration-200">
                    <Package className="h-4 w-4 mr-2 text-gold" />
                    E-commerce Logistics
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center hover:text-gold transition duration-200">
                    <Package className="h-4 w-4 mr-2 text-gold" />
                    Industry Solutions
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <a href="mailto:info@translark.com" className="hover:text-gold transition duration-200">
                    info@translark.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <a href="tel:+2348001234567" className="hover:text-gold transition duration-200">
                    +234-800-123-4567
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>3499 Sigley Road, Belleville, KS 66935, UK</span>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-700">
                  <h5 className="font-semibold mb-2">Working Hours</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday-Friday:</span>
                      <span className="text-gold">8:00-19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-gold">9:00-18:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
