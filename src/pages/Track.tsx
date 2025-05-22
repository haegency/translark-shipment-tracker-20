
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Track = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate tracking code format (TRK followed by 6 digits)
    if (!trackingCode.match(/^TRK\d{6}$/)) {
      toast({
        title: "Invalid Tracking Code",
        description: "Please enter a valid tracking code (e.g., TRK123456)",
        variant: "destructive"
      });
      return;
    }
    
    // Navigate to result page with the tracking code
    navigate(`/result/${trackingCode}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Track Section */}
      <div className="track-section py-24 md:py-32 text-white flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-navy text-center">Track Your Shipment</h1>
            <p className="mb-6 text-center text-gray-600">
              Enter your tracking number to view your shipment status.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <Input 
                  type="text" 
                  placeholder="e.g. TRK123456"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                  className="border-gray-300 focus:border-navy focus:ring-navy"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-navy hover:bg-blue-900 text-white"
              >
                Track Now
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Sample tracking codes: TRK123456, TRK654321, TRK987654</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Track;
