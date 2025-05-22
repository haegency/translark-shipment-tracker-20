
import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-navy text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Package className="h-6 w-6 text-gold" />
          <span className="font-bold text-xl">Translark Logistics</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gold transition duration-200">Home</Link>
          <Link to="/track" className="hover:text-gold transition duration-200">Track Shipment</Link>
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
