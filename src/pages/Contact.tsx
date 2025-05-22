
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-navy py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            We're here to help with all your logistics needs. Reach out to us today.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Phone</h3>
              <p className="text-gray-700">+234-800-123-4567</p>
              <p className="text-gray-700">+234-800-987-6543</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Email</h3>
              <p className="text-gray-700">info@translark.com</p>
              <p className="text-gray-700">support@translark-partners.com</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Location</h3>
              <p className="text-gray-700">3499 Sigley Road</p>
              <p className="text-gray-700">Belleville, KS 66935, UK</p>
            </Card>
          </div>
          
          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy">Get In Touch</h2>
              <p className="text-gray-700 mb-6">
                Have questions about our services or need a custom logistics solution? Fill out the form and our team will get back to you promptly.
              </p>
              
              {/* Contact Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input id="phone" placeholder="+1 234 567 890" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input id="subject" placeholder="Inquiry about logistics services" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="Please describe your inquiry or request..." className="h-32" />
                </div>
                
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Map Section */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.8751791381606!2d-97.2200934!3d39.82997230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87be3fa21ea3c5dd%3A0x8c543d351b88ad7d!2sBelleville%2C%20KS%2066935%2C%20USA!5e0!3m2!1sen!2sng!4v1716376626405!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Location</h2>
          <p className="text-xl mb-4">3499 Sigley Road, Belleville, KS 66935, UK</p>
          <p className="mb-6">support@translark-partners.com</p>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-navy">Newsletter</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get our latest updates & news
          </p>
          <div className="max-w-md mx-auto flex">
            <Input placeholder="Your mail address" className="rounded-r-none" />
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-l-none">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
