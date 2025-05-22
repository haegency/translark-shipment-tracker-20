
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Plane, Ship, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const slides = [
  {
    id: 1,
    title: "Navigating Global Logistics of Your",
    subtitle: "Challenges",
    description: "Explore how Translark Logistics provides innovative solutions to overcome complexities in international shipping and trade.",
    buttonText: "Explore More",
    buttonLink: "#services"
  },
  {
    id: 2,
    title: "Global Freight,",
    subtitle: "Local Precision",
    description: "Reliable air, ocean, and road shipping solutions delivered with excellence.",
    buttonText: "Track Your Shipment",
    buttonLink: "/track"
  },
  {
    id: 3,
    title: "Seamless Logistics,",
    subtitle: "Worldwide Reach",
    description: "Your trusted partner for international cargo transport and custom logistics solutions.",
    buttonText: "Our Services",
    buttonLink: "#services"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Slideshow */}
      <div className="hero-slideshow relative">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-slide absolute w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1581090700227-4c4c262f789b?q=80&w=1920')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-3xl text-white py-24 md:py-32">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  {slide.title}
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6">
                  {slide.subtitle}
                </h2>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <Link to={slide.buttonLink}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 flex items-center">
                    {slide.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ArrowLeft className="text-white h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
          aria-label="Next slide"
        >
          <ArrowRight className="text-white h-6 w-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`mx-1 h-2 w-8 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gold' : 'bg-white/50 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* About Section */}
      <div id="about" className="py-16 bg-gray-50">
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
      <div id="services" className="py-16 bg-white">
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
