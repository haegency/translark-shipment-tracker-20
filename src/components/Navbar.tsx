
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Package className="h-6 w-6 text-gold" />
          <span className="font-bold text-xl text-white drop-shadow-md">Translark Logistics</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`drop-shadow-lg transition duration-200 ${isActive('/') ? 'text-gold font-bold' : 'text-white hover:text-gold'}`}>Home</Link>
          <Link to="/about" className={`drop-shadow-lg transition duration-200 ${isActive('/about') ? 'text-gold font-bold' : 'text-white hover:text-gold'}`}>About</Link>
          <Link to="/services" className={`drop-shadow-lg transition duration-200 ${isActive('/services') ? 'text-gold font-bold' : 'text-white hover:text-gold'}`}>Services</Link>
          <Link to="/contact" className={`drop-shadow-lg transition duration-200 ${isActive('/contact') ? 'text-gold font-bold' : 'text-white hover:text-gold'}`}>Contact Us</Link>
          <Link to="/track" className={`drop-shadow-lg transition duration-200 ${isActive('/track') ? 'text-gold font-bold' : 'text-white hover:text-gold'}`}>Track Shipment</Link>
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
