
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Plane, Ship, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Card, CardContent } from '@/components/ui/card';

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

        {/* Tracking Search Box */}
        <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center">
          <div className="bg-navy/80 p-6 rounded-lg max-w-md w-full mx-4">
            <form action="/track" className="flex flex-col md:flex-row gap-2">
              <Input 
                type="text" 
                placeholder="Enter Your Tracking Number" 
                className="w-full bg-white border-0 rounded-md"
                name="trackingCode"
              />
              <Button className="bg-white hover:bg-gray-100 text-navy font-medium flex items-center justify-center whitespace-nowrap">
                Track Shipment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 bg-red-600 text-white flex flex-col items-center text-center">
              <div className="rounded-full bg-white/20 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <path d="M12 2v4"/>
                  <path d="m18.364 7.05-2.828 2.828"/>
                  <path d="m2 12 4 0"/>
                  <path d="m7.05 18.364 2.828-2.828"/>
                  <path d="M12 22v-4"/>
                  <path d="m18.364 16.95-2.828-2.828"/>
                  <path d="m22 12-4 0"/>
                  <path d="m7.05 5.636 2.828 2.828"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Affordable Price,</h2>
              <p className="text-xl font-medium">Certificate Forwarders</p>
            </div>
            <div className="w-full md:w-1/2 p-8 bg-red-600 text-white flex flex-col items-center text-center">
              <div className="rounded-full bg-white/20 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Safe & Reliable</h2>
              <p className="text-xl font-medium">Industry Solution!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=1200" 
                alt="Warehouse Worker" 
                className="rounded-lg shadow-lg w-full h-auto"
              />

              <div className="mt-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-gold">
                <div className="flex items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-navy">10+ Years</h3>
                    <p className="text-gray-600">Logistics Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-red-600 font-medium mb-2">Welcome To Translark Partners</h3>
              <h2 className="text-4xl font-bold mb-6 text-navy">Providing Full Range of Transportation Worldwide</h2>
              <p className="text-gray-700 mb-6">
                With years of experience in the industry, we have established a proven track
                record of success. Our franchise model has been meticulously crafted and
                refined to ensure profitability, scalability, and sustainability for our franchisees.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Expertise:",
                    description: "Our team of seasoned professionals brings years of industry experience and expertise to every project, ensuring unparalleled service and support."
                  },
                  {
                    title: "Reliability:",
                    description: "With a relentless focus on reliability and consistency, we strive to deliver on our promises and exceed expectations every step of the way."
                  },
                  {
                    title: "Innovation:",
                    description: "We embrace innovation and leverage the latest technologies to optimize processes, enhance visibility, and drive continuous improvement."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                    <p>
                      <span className="font-semibold">{item.title}</span> {item.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <Link to="/about">
                <Button className="bg-navy hover:bg-navy/90 text-white px-6 py-3 rounded-md">
                  Explore More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-medium mb-2">We Specialise In The Transportation</h3>
            <h2 className="text-4xl font-bold mb-4 text-navy">We are optimists who Love to work Together.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Air Transport Card */}
            <Card className="overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="p-6 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-navy">AIR TRANSPORT</h3>
                  <p className="text-gray-600 mb-6">Efficient Air Transport Solutions</p>
                  <div className="mt-auto">
                    <Button className="bg-navy hover:bg-navy/90 text-white">
                      Explore More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-60 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200" 
                    alt="Air Transport" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -top-5 -right-5 h-40 w-40 rounded-full border-4 border-gray-100 overflow-hidden">
                    <div className="w-full h-full bg-red-100 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1551811855-febe2754c34c?q=80&w=400"
                        alt="Airplane Icon"
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Road Transport Card */}
            <Card className="overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="p-6 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-navy">ROAD TRANSPORT</h3>
                  <p className="text-gray-600 mb-6">Seamless Road Transport Solutions</p>
                  <div className="mt-auto">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Explore More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-60 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200" 
                    alt="Road Transport" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -top-5 -right-5 h-40 w-40 rounded-full border-4 border-gray-100 overflow-hidden">
                    <div className="w-full h-full bg-red-100 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1600500528030-bf45a6f8050d?q=80&w=400"
                        alt="Truck Icon"
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
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

      {/* What We Do Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-medium mb-2">Services</h3>
            <h2 className="text-4xl font-bold mb-8 text-navy">What we do</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="overflow-hidden">
              <div className="h-56 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600" 
                  alt="Service & Aftermarket Logistics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-navy text-white rounded-tr-md">
                  <Truck className="h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-navy">Service & Aftermarket Logistics</h3>
                <p className="text-gray-700 mb-4">
                  Specialized logistics solutions for service parts and aftermarket supply chains, ensuring rapid delivery and minimal downtime.
                </p>
              </CardContent>
            </Card>
            
            {/* Service Card 2 */}
            <Card className="overflow-hidden bg-red-600 text-white">
              <div className="h-56 relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600" 
                  alt="Industry-Specific Competence" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-white text-navy rounded-tr-md">
                  <Truck className="h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Industry-Specific Competence</h3>
                <p className="mb-4">
                  Tailored logistics solutions for specialized industries including pharmaceuticals, automotive, retail, and manufacturing.
                </p>
              </CardContent>
            </Card>
            
            {/* Service Card 3 */}
            <Card className="overflow-hidden">
              <div className="h-56 relative">
                <img 
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600" 
                  alt="E-commerce Logistics Solutions" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-navy text-white rounded-tr-md">
                  <Truck className="h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-navy">E-commerce Logistics Solutions</h3>
                <p className="text-gray-700 mb-4">
                  End-to-end logistics solutions for e-commerce businesses, from warehousing to last-mile delivery, optimized for speed and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-navy hover:bg-navy/90 text-white px-6 py-2">
                Explore More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-medium mb-2">Customer Feedback</h3>
            <h2 className="text-3xl font-bold text-navy">What People Say About Us</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Read what our satisfied customers have to say about their experience with Translark Logistics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 h-full">
              <div className="flex justify-center mb-4">
                <div className="text-4xl text-red-600">"</div>
              </div>
              <p className="text-gray-700 mb-4 text-center">
                "Exceptional service! Translark Partners has consistently exceeded our expectations with their reliability, 
                efficiency, and attention to detail. Their dedication to punctuality ensures our shipments always arrive on time."
              </p>
              <div className="flex items-center justify-center mt-auto pt-4 border-t">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="John Smith" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-navy">John Smith</h4>
                  <p className="text-sm text-gray-600">Business Owner</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-red-600 text-white h-full">
              <div className="flex justify-center mb-4">
                <div className="text-4xl text-white">"</div>
              </div>
              <p className="mb-4 text-center">
                "Outstanding experience! Translark Partners's road transport solutions have significantly improved our supply chain efficiency. 
                Their commitment to reliability and punctuality has helped us meet tight deadlines."
              </p>
              <div className="flex items-center justify-center mt-auto pt-4 border-t border-red-400">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Emily Johnson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Emily Johnson</h4>
                  <p className="text-sm text-red-200">Operations Manager</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="flex justify-center mb-4">
                <div className="text-4xl text-red-600">"</div>
              </div>
              <p className="text-gray-700 mb-4 text-center">
                "Absolutely impressed! Translark Partners provided us with exceptional air transport services that helped us meet tight deadlines 
                and deliver goods to our customers on time."
              </p>
              <div className="flex items-center justify-center mt-auto pt-4 border-t">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="Michael Brown" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Michael Brown</h4>
                  <p className="text-sm text-gray-600">Supply Chain Manager</p>
                </div>
              </div>
            </Card>
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
