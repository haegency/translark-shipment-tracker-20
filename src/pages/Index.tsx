
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
    buttonLink: "#services",
    image: "https://images.unsplash.com/photo-1581090700227-4c4c262f789b?q=80&w=1920"
  },
  {
    id: 2,
    title: "Global Freight,",
    subtitle: "Local Precision",
    description: "Reliable air, ocean, and road shipping solutions delivered with excellence.",
    buttonText: "Track Your Shipment",
    buttonLink: "/track",
    image: "https://images.unsplash.com/photo-1577417006860-4bd96f4a3be0?q=80&w=1920"
  },
  {
    id: 3,
    title: "Seamless Logistics,",
    subtitle: "Worldwide Reach",
    description: "Your trusted partner for international cargo transport and custom logistics solutions.",
    buttonText: "Our Services",
    buttonLink: "#services",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideExchangeIndex, setSlideExchangeIndex] = useState(0);
  const [servicesExchangeIndex, setServicesExchangeIndex] = useState(0);
  const [testimonialsExchangeIndex, setTestimonialsExchangeIndex] = useState(0);

  useEffect(() => {
    // Hero slideshow timer
    const heroTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    
    // Service cards exchange timer
    const servicesTimer = setInterval(() => {
      setSlideExchangeIndex(prev => (prev + 1) % 2);
    }, 10000);
    
    // What we do exchange timer
    const whatWeDoTimer = setInterval(() => {
      setServicesExchangeIndex(prev => (prev + 1) % 3);
    }, 6000);
    
    // Testimonials exchange timer
    const testimonialsTimer = setInterval(() => {
      setTestimonialsExchangeIndex(prev => (prev + 1) % 3);
    }, 8000);
    
    return () => {
      clearInterval(heroTimer);
      clearInterval(servicesTimer);
      clearInterval(whatWeDoTimer);
      clearInterval(testimonialsTimer);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Define services cards
  const serviceCards = [
    {
      title: "AIR TRANSPORT",
      description: "Efficient Air Transport Solutions",
      buttonColor: "bg-navy hover:bg-navy/90",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200",
      iconImage: "https://images.unsplash.com/photo-1551811855-febe2754c34c?q=80&w=400"
    },
    {
      title: "ROAD TRANSPORT",
      description: "Seamless Road Transport Solutions",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200",
      iconImage: "https://images.unsplash.com/photo-1600500528030-bf45a6f8050d?q=80&w=400"
    }
  ];

  // Define what we do cards
  const whatWeDoCards = [
    {
      title: "Service & Aftermarket Logistics",
      description: "Specialized logistics solutions for service parts and aftermarket supply chains, ensuring rapid delivery and minimal downtime.",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600",
      highlighted: false
    },
    {
      title: "Industry-Specific Competence",
      description: "Tailored logistics solutions for specialized industries including pharmaceuticals, automotive, retail, and manufacturing.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600",
      highlighted: true
    },
    {
      title: "E-commerce Logistics Solutions",
      description: "End-to-end logistics solutions for e-commerce businesses, from warehousing to last-mile delivery, optimized for speed and customer satisfaction.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600",
      highlighted: false
    }
  ];

  // Define testimonial cards
  const testimonialCards = [
    {
      quote: "Exceptional service! Translark Partners has consistently exceeded our expectations with their reliability, efficiency, and attention to detail. Their dedication to punctuality ensures our shipments always arrive on time.",
      author: "John Smith",
      position: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      highlighted: false
    },
    {
      quote: "Outstanding experience! Translark Partners's road transport solutions have significantly improved our supply chain efficiency. Their commitment to reliability and punctuality has helped us meet tight deadlines.",
      author: "Emily Johnson",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      highlighted: true
    },
    {
      quote: "Absolutely impressed! Translark Partners provided us with exceptional air transport services that helped us meet tight deadlines and deliver goods to our customers on time.",
      author: "Michael Brown",
      position: "Supply Chain Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Slideshow */}
      <div className="hero-slideshow relative slanted-bottom">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-slide absolute w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${slide.image}')`,
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
        
        {/* Fade gradient */}
        <div className="fade-gradient"></div>
      </div>

      {/* Highlights Section with Animated Icons */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 bg-red-600 text-white flex flex-col items-center text-center">
              <div className="rounded-full bg-white/20 p-4 mb-4 floating-icon">
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
              <div className="rounded-full bg-white/20 p-4 mb-4 floating-icon" style={{ animationDelay: "1.5s" }}>
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
            <div className="md:w-1/2 fade-in stagger-1">
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
            
            <div className="md:w-1/2 fade-in stagger-2">
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
                  <div key={index} className="flex items-start fade-in" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
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
      
      {/* Services Section with Animating Cards */}
      <div id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-medium mb-2">We Specialise In The Transportation</h3>
            <h2 className="text-4xl font-bold mb-4 text-navy">We are optimists who Love to work Together.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Dynamic Service Cards */}
            {serviceCards.map((card, index) => (
              <Card 
                key={card.title} 
                className={`overflow-hidden transition-all duration-500 ${
                  index === 0 ? 
                    (slideExchangeIndex === 0 ? 'slide-exchange-left' : 'slide-exchange-right') : 
                    (slideExchangeIndex === 0 ? 'slide-exchange-right' : 'slide-exchange-left')
                }`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 text-navy">{card.title}</h3>
                    <p className="text-gray-600 mb-6">{card.description}</p>
                    <div className="mt-auto">
                      <Button className={card.buttonColor + " text-white"}>
                        Explore More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="h-60 relative">
                    <img 
                      src={card.image}
                      alt={card.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-5 -right-5 h-40 w-40 rounded-full border-4 border-gray-100 overflow-hidden floating-icon" style={{ animationDelay: `${1 + index}s` }}>
                      <div className="w-full h-full bg-red-100 flex items-center justify-center">
                        <img
                          src={card.iconImage}
                          alt={`${card.title} Icon`}
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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

      {/* What We Do Section with Animating Cards */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-medium mb-2">Services</h3>
            <h2 className="text-4xl font-bold mb-8 text-navy">What we do</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dynamic What We Do Cards */}
            {whatWeDoCards.map((card, index) => (
              <Card 
                key={card.title}
                className={`overflow-hidden transition-all duration-500 ${
                  index === servicesExchangeIndex ? 'scale-105 shadow-xl z-10' : 'scale-100'
                } ${
                  card.highlighted ? 'bg-red-600 text-white' : ''
                }`}
              >
                <div className="h-56 relative">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute bottom-0 left-0 p-2 ${card.highlighted ? 'bg-white text-navy' : 'bg-navy text-white'} rounded-tr-md`}>
                    <Truck className="h-5 w-5" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${card.highlighted ? 'text-white' : 'text-navy'}`}>
                    {card.title}
                  </h3>
                  <p className={card.highlighted ? 'mb-4' : 'text-gray-700 mb-4'}>
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
      
      {/* Testimonials Section with Animating Cards */}
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
            {testimonialCards.map((card, index) => (
              <Card 
                key={index} 
                className={`p-6 h-full transition-all duration-500 ${
                  index === testimonialsExchangeIndex ? 'scale-105 shadow-xl z-10' : 'scale-100'
                } ${
                  card.highlighted ? 'bg-red-600 text-white' : ''
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`text-4xl ${card.highlighted ? 'text-white' : 'text-red-600'}`}>"</div>
                </div>
                <p className={`${card.highlighted ? '' : 'text-gray-700'} mb-4 text-center`}>
                  {card.quote}
                </p>
                <div className={`flex items-center justify-center mt-auto pt-4 border-t ${card.highlighted ? 'border-red-400' : ''}`}>
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img 
                      src={card.image} 
                      alt={card.author} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className={`font-bold ${card.highlighted ? '' : 'text-navy'}`}>{card.author}</h4>
                    <p className={`text-sm ${card.highlighted ? 'text-red-200' : 'text-gray-600'}`}>{card.position}</p>
                  </div>
                </div>
              </Card>
            ))}
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
