
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Translark</h1>
          <p className="text-xl max-w-3xl">
            We are your trusted partner in navigating the complexities of global logistics.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy">Providing Full Range of Transportation Worldwide</h2>
              <p className="text-gray-700 mb-6">
                With years of experience in the industry, we have established a proven track
                record of success. Our franchise model has been meticulously crafted and
                refined to ensure profitability, scalability, and sustainability for our franchisees.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <p>
                    <span className="font-semibold">Expertise:</span> Our team of seasoned professionals brings years of
                    industry experience and expertise to every project, ensuring unparalleled service and support.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <p>
                    <span className="font-semibold">Reliability:</span> With a relentless focus on reliability and
                    consistency, we strive to deliver on our promises and exceed expectations every step of the way.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <p>
                    <span className="font-semibold">Innovation:</span> We embrace innovation and leverage the latest
                    technologies to optimize processes, enhance visibility, and drive continuous improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1200" 
                alt="Logistics Operations" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="flex items-center">
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-4xl font-bold text-navy">10+ Years</h3>
                    <p className="text-gray-600">Logistics Experience</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700">
                  With over a decade of experience in the logistics industry, we've built a reputation for excellence, reliability, and customer satisfaction. 
                  Our team has handled thousands of shipments across the globe, overcoming challenges and delivering exceptional service every step of the way.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <h2 className="text-3xl font-bold mb-10 text-center text-navy">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
              },
              {
                name: "Emily Johnson",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
              },
              {
                name: "Michael Brown",
                role: "Supply Chain Manager",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
              }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <CardContent className="pt-4">
                  <h3 className="font-bold text-xl text-navy">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-navy">We are optimists who Love to work Together</h2>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-gray-700">
                We believe in the power of collaboration and positive thinking. Our team works together to overcome challenges and deliver exceptional results for our clients, no matter the complexity of their logistics needs.
              </p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
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
      
      <Footer />
    </div>
  );
};

export default About;
