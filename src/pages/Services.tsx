
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Plane, Ship } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive logistics solutions tailored to your specific needs.
          </p>
        </div>
      </div>
      
      {/* Services Intro */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-red-600 text-xl mb-3">Services</h2>
          <h3 className="text-4xl font-bold mb-8 text-navy">What we do</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            We specialize in providing comprehensive logistics solutions across various transportation modes, ensuring your cargo reaches its destination safely and on time.
          </p>
          
          {/* Main Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Air Transport Card */}
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="p-6 md:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-navy">AIR TRANSPORT</h3>
                  <p className="text-gray-600 mb-6">Efficient Air Transport Solutions</p>
                  <p className="text-gray-700 mb-4">
                    Our air freight services offer speed and reliability for time-sensitive shipments, connecting you to destinations worldwide with our extensive network of air carriers.
                  </p>
                  <div className="mt-auto">
                    <Button className="bg-navy hover:bg-opacity-90 text-white">
                      Explore More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 h-full min-h-[300px]" style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </div>
            </Card>
            
            {/* Road Transport Card */}
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="p-6 md:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-navy">ROAD TRANSPORT</h3>
                  <p className="text-gray-600 mb-6">Seamless Road Transport Solutions</p>
                  <p className="text-gray-700 mb-4">
                    Our road freight services provide flexible and cost-effective solutions for local and regional deliveries, with a focus on timeliness and safety.
                  </p>
                  <div className="mt-auto">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Explore More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 h-full min-h-[300px]" style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </div>
            </Card>
          </div>
          
          {/* Additional Services */}
          <h3 className="text-3xl font-bold mb-10 text-navy">Specialized Solutions</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Service Card 1 */}
            <Card className="overflow-hidden">
              <div className="h-56 bg-gray-200">
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
              <div className="h-56 bg-gray-200">
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
              <div className="h-56 bg-gray-200">
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
          
          <div className="text-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg rounded-md">
              More Service <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Ocean Freight Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-navy">OCEAN FREIGHT</h2>
              <p className="text-gray-600 mb-6">Cost-Effective Ocean Transport Solutions</p>
              <p className="text-gray-700 mb-6">
                Our ocean freight services provide reliable and cost-effective solutions for bulk shipments across international waters. With strategic partnerships with major shipping lines, we ensure your cargo reaches its destination safely and on schedule.
              </p>
              <p className="text-gray-700 mb-6">
                We handle FCL (Full Container Load) and LCL (Less than Container Load) shipments, offering flexibility to meet your specific requirements. Our team manages all documentation and customs requirements, providing a seamless shipping experience.
              </p>
              <Button className="bg-navy hover:bg-opacity-90 text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1200" 
                alt="Ocean Freight" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need Custom Logistics Solutions?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact our team today to discuss your specific logistics requirements and discover how we can help optimize your supply chain.
          </p>
          <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-md">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
