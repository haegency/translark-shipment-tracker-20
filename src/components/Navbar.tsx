
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-navy text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Package className="h-6 w-6 text-gold" />
          <span className="font-bold text-xl">Translark Logistics</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`hover:text-gold transition duration-200 ${isActive('/') ? 'text-gold' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-gold transition duration-200 ${isActive('/about') ? 'text-gold' : ''}`}>About</Link>
          <Link to="/services" className={`hover:text-gold transition duration-200 ${isActive('/services') ? 'text-gold' : ''}`}>Services</Link>
          <Link to="/contact" className={`hover:text-gold transition duration-200 ${isActive('/contact') ? 'text-gold' : ''}`}>Contact Us</Link>
          <Link to="/track" className={`hover:text-gold transition duration-200 ${isActive('/track') ? 'text-gold' : ''}`}>Track Shipment</Link>
        </div>
        
        <Link 
          to="/track" 
          className="md:hidden bg-gold hover:bg-amber-500 text-navy font-bold py-2 px-4 rounded-md transition duration-200"
        >
          Track
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
