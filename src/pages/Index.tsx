
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Plane, Ship } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Global Freight, Local Precision</h1>
            <p className="text-xl md:text-2xl mb-8">Reliable air, ocean, and road shipping solutions delivered with excellence.</p>
            <Link to="/track">
              <Button className="bg-gold hover:bg-amber-500 text-navy font-bold py-3 px-8 rounded-md text-lg transition duration-300">
                Track Your Shipment
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-navy">Who We Are</h2>
            <p className="text-lg text-gray-700">
              Translark Logistics specializes in seamless freight operations across borders. 
              From air to ocean and ground, we deliver with trust, speed, and visibility.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Truck}
              title="Road Freight"
              description="Reliable land transport across local and regional destinations."
            />
            <ServiceCard 
              icon={Plane}
              title="Air Freight"
              description="Speedy delivery with global air cargo networks."
            />
            <ServiceCard 
              icon={Ship}
              title="Ocean Freight"
              description="Affordable bulk shipping across international waters."
            />
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
