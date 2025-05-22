
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Clock, User, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { loadShipments } from '@/utils/mockData';
import { ShipmentData } from '@/types/shipping';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrackingTimeline from '@/components/TrackingTimeline';

const Result = () => {
  const { trackingCode } = useParams<{ trackingCode: string }>();
  const [shipment, setShipment] = useState<ShipmentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!trackingCode) return;
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      const shipments = loadShipments();
      if (shipments[trackingCode]) {
        setShipment(shipments[trackingCode]);
      } else {
        toast({
          title: "Tracking Failed",
          description: `No shipment found with tracking code ${trackingCode}`,
          variant: "destructive"
        });
      }
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [trackingCode]);

  // Status badge color
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Delivered': return 'bg-green-500';
      case 'In Transit': return 'bg-blue-500';
      case 'On Hold': return 'bg-yellow-500';
      case 'Delayed': return 'bg-red-500';
      case 'Pending': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-navy border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading shipment data...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!shipment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="text-red-500 text-5xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold mb-4 text-navy">Shipment Not Found</h1>
            <p className="mb-6 text-gray-600">
              We couldn't find any shipment with the tracking code: <strong>{trackingCode}</strong>
            </p>
            <Link to="/track">
              <Button className="bg-navy hover:bg-blue-900">Try Another Code</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/track" className="inline-flex items-center text-navy hover:text-gold transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to tracking
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-8 text-navy">
            Tracking Details for {shipment.trackingCode}
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Package Info */}
            <Card>
              <CardHeader className="bg-navy text-white rounded-t-lg">
                <div className="flex items-center">
                  <Package className="mr-2 h-5 w-5 text-gold" />
                  <CardTitle>Package Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Status:</p>
                    <Badge className={getStatusColor(shipment.shipmentStatus)}>
                      {shipment.shipmentStatus}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Package Type:</p>
                    <p className="font-medium">{shipment.packageType}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipment Mode:</p>
                    <p className="font-medium">{shipment.shipmentMode}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Date Shipped:</p>
                    <p className="font-medium">{new Date(shipment.dateShipped).toLocaleDateString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Estimated Delivery:</p>
                    <p className="font-medium">{new Date(shipment.estimatedDelivery).toLocaleDateString()}</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <p className="text-gray-600">Current Location:</p>
                    <p className="font-medium text-right">{shipment.currentLocation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Shipper & Receiver */}
            <Card>
              <CardHeader className="bg-navy text-white rounded-t-lg">
                <div className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-gold" />
                  <CardTitle>Shipper & Receiver</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h3 className="font-medium mb-2 text-navy">Shipper:</h3>
                  <p className="font-bold">{shipment.shipper.name}</p>
                  <p className="text-gray-600">{shipment.shipper.country}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-navy">Receiver:</h3>
                  <p className="font-bold">{shipment.receiver.name}</p>
                  <div className="flex gap-2">
                    <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-600">Origin: {shipment.receiver.origin}</p>
                      <p className="text-gray-600">Destination: {shipment.receiver.destination}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Tracking Timeline */}
          <Card className="mt-6">
            <CardHeader className="bg-navy text-white rounded-t-lg">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-gold" />
                <CardTitle>Tracking Timeline</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <TrackingTimeline history={shipment.shippingHistory} />
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Result;
