
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, Edit, Trash, Plus, Save, X, Calendar, 
  MapPin, User, Truck, FileText, AlertTriangle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { loadShipments, saveShipments, generateTrackingCode } from '@/utils/mockData';
import { ShipmentData, ShipmentsData } from '@/types/shipping';
import Navbar from '@/components/Navbar';

const ADMIN_PASSWORD = "logiSecure2025";

// Template for new shipment
const newShipmentTemplate: ShipmentData = {
  trackingCode: "",
  packageType: "",
  dateShipped: new Date().toISOString().split('T')[0],
  estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  shipmentStatus: "Pending",
  shipmentMode: "Road",
  shipper: {
    name: "",
    country: ""
  },
  receiver: {
    name: "",
    origin: "",
    destination: ""
  },
  currentLocation: "",
  shippingHistory: [
    { 
      date: new Date().toISOString().split('T')[0], 
      event: "Package registered in system" 
    }
  ]
};

const Admin = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [shipments, setShipments] = useState<ShipmentsData>({});
  const [editShipment, setEditShipment] = useState<ShipmentData | null>(null);
  const [isAddingShipment, setIsAddingShipment] = useState(false);
  const [newHistoryItem, setNewHistoryItem] = useState({ date: '', event: '' });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [shipmentToDelete, setShipmentToDelete] = useState<string | null>(null);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    const storedAuth = sessionStorage.getItem('admin_authenticated');
    if (storedAuth === 'true') {
      setAuthenticated(true);
      loadShipmentData();
    } else {
      promptPassword();
    }
  };

  const promptPassword = () => {
    const pass = prompt("Enter admin password:");
    if (pass === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_authenticated', 'true');
      setAuthenticated(true);
      loadShipmentData();
    } else {
      alert("Access Denied.");
      navigate('/');
    }
  };

  const loadShipmentData = () => {
    const data = loadShipments();
    setShipments(data);
  };

  const handleEdit = (trackingCode: string) => {
    setEditShipment({...shipments[trackingCode]});
  };

  const handleSaveEdit = () => {
    if (!editShipment) return;
    
    const updatedShipments = {...shipments};
    updatedShipments[editShipment.trackingCode] = editShipment;
    
    saveShipments(updatedShipments);
    setShipments(updatedShipments);
    setEditShipment(null);
    
    toast({
      title: "Shipment Updated",
      description: `Shipment ${editShipment.trackingCode} has been updated successfully.`
    });
  };

  const handleCancelEdit = () => {
    setEditShipment(null);
  };

  const handleAddNew = () => {
    const tracking = generateTrackingCode();
    setEditShipment({
      ...newShipmentTemplate,
      trackingCode: tracking
    });
    setIsAddingShipment(true);
  };

  const handleSaveNew = () => {
    if (!editShipment) return;
    
    // Validation
    if (!editShipment.packageType || !editShipment.shipper.name || !editShipment.receiver.name) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    const updatedShipments = {...shipments};
    updatedShipments[editShipment.trackingCode] = editShipment;
    
    saveShipments(updatedShipments);
    setShipments(updatedShipments);
    setEditShipment(null);
    setIsAddingShipment(false);
    
    toast({
      title: "Shipment Created",
      description: `New shipment ${editShipment.trackingCode} has been created successfully.`
    });
  };

  const confirmDelete = (trackingCode: string) => {
    setShipmentToDelete(trackingCode);
    setIsDialogOpen(true);
  };

  const handleDelete = () => {
    if (!shipmentToDelete) return;
    
    const updatedShipments = {...shipments};
    delete updatedShipments[shipmentToDelete];
    
    saveShipments(updatedShipments);
    setShipments(updatedShipments);
    setIsDialogOpen(false);
    setShipmentToDelete(null);
    
    toast({
      title: "Shipment Deleted",
      description: `Shipment ${shipmentToDelete} has been deleted successfully.`
    });
  };

  const handleAddHistory = () => {
    if (!editShipment || !newHistoryItem.date || !newHistoryItem.event) return;
    
    const updatedShipment = {...editShipment};
    updatedShipment.shippingHistory = [
      ...updatedShipment.shippingHistory, 
      { ...newHistoryItem }
    ];
    
    setEditShipment(updatedShipment);
    setNewHistoryItem({ date: '', event: '' });
    
    toast({
      title: "History Added",
      description: "New shipping history event has been added."
    });
  };

  const removeHistoryItem = (index: number) => {
    if (!editShipment) return;
    
    const updatedShipment = {...editShipment};
    updatedShipment.shippingHistory = updatedShipment.shippingHistory.filter((_, i) => i !== index);
    
    setEditShipment(updatedShipment);
  };

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

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p>Authenticating...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-navy">Admin Dashboard</h1>
          <Button onClick={handleAddNew} className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            Add New Shipment
          </Button>
        </div>
        
        <Alert className="mb-6 border-yellow-500 bg-yellow-50">
          <AlertTriangle className="h-4 w-4 text-yellow-500" />
          <AlertDescription>
            All changes are stored locally in your browser. Data will persist until you clear your browser's local storage.
          </AlertDescription>
        </Alert>
        
        {editShipment ? (
          <Card className="mb-8 border-2 border-blue-200 shadow-md">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center">
                <Package className="mr-2 h-5 w-5 text-navy" />
                {isAddingShipment ? "Create New Shipment" : `Edit Shipment: ${editShipment.trackingCode}`}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg mb-4 text-navy">Basic Information</h3>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-600">Tracking Code</label>
                    <Input 
                      value={editShipment.trackingCode} 
                      readOnly 
                      className="bg-gray-100"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-600">Package Type</label>
                    <Input 
                      value={editShipment.packageType}
                      onChange={(e) => setEditShipment({...editShipment, packageType: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-600">Date Shipped</label>
                    <Input 
                      type="date"
                      value={editShipment.dateShipped}
                      onChange={(e) => setEditShipment({...editShipment, dateShipped: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-600">Estimated Delivery</label>
                    <Input 
                      type="date"
                      value={editShipment.estimatedDelivery}
                      onChange={(e) => setEditShipment({...editShipment, estimatedDelivery: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-600">Status</label>
                    <Select 
                      value={editShipment.shipmentStatus}
                      onValueChange={(value) => setEditShipment({
                        ...editShipment, 
                        shipmentStatus: value as ShipmentData['shipmentStatus']
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="In Transit">In Transit</SelectItem>
                        <SelectItem value="Delivered">Delivered</SelectItem>
                        <SelectItem value="On Hold">On Hold</SelectItem>
                        <SelectItem value="Delayed">Delayed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-600">Shipment Mode</label>
                    <Select 
                      value={editShipment.shipmentMode}
                      onValueChange={(value) => setEditShipment({
                        ...editShipment, 
                        shipmentMode: value as ShipmentData['shipmentMode']
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Air">Air</SelectItem>
                        <SelectItem value="Sea">Sea</SelectItem>
                        <SelectItem value="Road">Road</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-600">Current Location</label>
                    <Input 
                      value={editShipment.currentLocation}
                      onChange={(e) => setEditShipment({...editShipment, currentLocation: e.target.value})}
                    />
                  </div>
                </div>
                
                {/* Shipper and Receiver */}
                <div>
                  <h3 className="font-bold text-lg mb-4 text-navy">Shipper & Receiver Information</h3>
                  
                  <div className="mb-6 space-y-4">
                    <h4 className="font-medium text-navy">Shipper Details</h4>
                    <div className="space-y-2">
                      <label className="block text-gray-600">Name</label>
                      <Input 
                        value={editShipment.shipper.name}
                        onChange={(e) => setEditShipment({
                          ...editShipment, 
                          shipper: {...editShipment.shipper, name: e.target.value}
                        })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-gray-600">Country</label>
                      <Input 
                        value={editShipment.shipper.country}
                        onChange={(e) => setEditShipment({
                          ...editShipment, 
                          shipper: {...editShipment.shipper, country: e.target.value}
                        })}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-navy">Receiver Details</h4>
                    <div className="space-y-2">
                      <label className="block text-gray-600">Name</label>
                      <Input 
                        value={editShipment.receiver.name}
                        onChange={(e) => setEditShipment({
                          ...editShipment, 
                          receiver: {...editShipment.receiver, name: e.target.value}
                        })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-gray-600">Origin</label>
                      <Input 
                        value={editShipment.receiver.origin}
                        onChange={(e) => setEditShipment({
                          ...editShipment, 
                          receiver: {...editShipment.receiver, origin: e.target.value}
                        })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-gray-600">Destination</label>
                      <Input 
                        value={editShipment.receiver.destination}
                        onChange={(e) => setEditShipment({
                          ...editShipment, 
                          receiver: {...editShipment.receiver, destination: e.target.value}
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shipping History */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4 text-navy">Shipping History</h3>
                
                <div className="space-y-4 mb-6">
                  {editShipment.shippingHistory.map((item, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-4 rounded-md">
                      <div className="flex-1">
                        <p className="font-medium">{item.date}</p>
                        <p className="text-gray-600">{item.event}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeHistoryItem(index)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="border p-4 rounded-md bg-gray-50">
                  <h4 className="font-medium mb-3 text-navy">Add History Event</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 mb-1 text-sm">Date</label>
                      <Input 
                        type="date"
                        value={newHistoryItem.date}
                        onChange={(e) => setNewHistoryItem({...newHistoryItem, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-1 text-sm">Event Description</label>
                      <div className="flex gap-2">
                        <Input 
                          value={newHistoryItem.event}
                          onChange={(e) => setNewHistoryItem({...newHistoryItem, event: e.target.value})}
                          placeholder="e.g. Package received at sorting facility"
                        />
                        <Button 
                          onClick={handleAddHistory}
                          disabled={!newHistoryItem.date || !newHistoryItem.event}
                          className="bg-navy"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-end space-x-2 bg-gray-50">
              <Button variant="outline" onClick={handleCancelEdit}>
                Cancel
              </Button>
              <Button 
                onClick={isAddingShipment ? handleSaveNew : handleSaveEdit}
                className="bg-green-600 hover:bg-green-700"
              >
                <Save className="mr-2 h-4 w-4" />
                {isAddingShipment ? "Create Shipment" : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-navy">All Shipments</h2>
            
            {Object.keys(shipments).length === 0 ? (
              <Card className="border-dashed border-2 border-gray-300">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Package className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Shipments Found</h3>
                  <p className="text-gray-500 mb-4">
                    There are no shipments in the system yet. Create your first shipment to get started.
                  </p>
                  <Button onClick={handleAddNew} className="bg-navy">
                    <Plus className="mr-2 h-4 w-4" />
                    Add First Shipment
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {Object.values(shipments).map((shipment) => (
                  <Card key={shipment.trackingCode} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="bg-navy p-4 text-white flex items-center md:min-w-[200px]">
                          <Package className="mr-2 h-5 w-5 text-gold" />
                          <span className="font-bold">{shipment.trackingCode}</span>
                        </div>
                        <div className="p-4 flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-gray-500 text-sm">Package</p>
                            <p className="font-medium">{shipment.packageType}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Status</p>
                            <Badge className={getStatusColor(shipment.shipmentStatus)}>
                              {shipment.shipmentStatus}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">Receiver</p>
                            <p className="font-medium">{shipment.receiver.name}</p>
                          </div>
                        </div>
                        <div className="flex p-4 bg-gray-50 border-t md:border-t-0 md:border-l">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 mr-2"
                            onClick={() => handleEdit(shipment.trackingCode)}
                          >
                            <Edit className="h-4 w-4" />
                            <span className="ml-1">Edit</span>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-red-600 hover:text-red-800 hover:bg-red-50"
                            onClick={() => confirmDelete(shipment.trackingCode)}
                          >
                            <Trash className="h-4 w-4" />
                            <span className="ml-1">Delete</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p className="py-4">
            Are you sure you want to delete shipment <span className="font-bold">{shipmentToDelete}</span>? 
            This action cannot be undone.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete Shipment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
