
import { ShipmentsData } from "../types/shipping";

export const defaultShipments: ShipmentsData = {
  "TRK123456": {
    trackingCode: "TRK123456",
    packageType: "Electronics",
    dateShipped: "2025-05-18",
    estimatedDelivery: "2025-05-25",
    shipmentStatus: "In Transit",
    shipmentMode: "Air",
    shipper: {
      name: "John Doe",
      country: "Nigeria"
    },
    receiver: {
      name: "Sarah Connor",
      origin: "Lagos, Nigeria",
      destination: "New York, USA"
    },
    currentLocation: "Ikeja Dispatch Hub",
    shippingHistory: [
      { date: "2025-05-18", event: "Package received in Lagos facility" },
      { date: "2025-05-19", event: "Cleared by customs" },
      { date: "2025-05-20", event: "Loaded on aircraft to USA" }
    ]
  },
  "TRK654321": {
    trackingCode: "TRK654321",
    packageType: "Documents",
    dateShipped: "2025-05-15",
    estimatedDelivery: "2025-05-22",
    shipmentStatus: "Delivered",
    shipmentMode: "Road",
    shipper: {
      name: "Jane Smith",
      country: "Ghana"
    },
    receiver: {
      name: "Robert Johnson",
      origin: "Accra, Ghana",
      destination: "Lagos, Nigeria"
    },
    currentLocation: "Lagos Customer Center",
    shippingHistory: [
      { date: "2025-05-15", event: "Package received in Accra facility" },
      { date: "2025-05-16", event: "In transit to Lagos" },
      { date: "2025-05-18", event: "Arrived at Lagos sorting facility" },
      { date: "2025-05-20", event: "Out for delivery" },
      { date: "2025-05-20", event: "Delivered to recipient" }
    ]
  },
  "TRK987654": {
    trackingCode: "TRK987654",
    packageType: "Furniture",
    dateShipped: "2025-05-10",
    estimatedDelivery: "2025-05-30",
    shipmentStatus: "In Transit",
    shipmentMode: "Sea",
    shipper: {
      name: "Alex Brown",
      country: "South Africa"
    },
    receiver: {
      name: "Michael Williams",
      origin: "Cape Town, South Africa",
      destination: "Port Harcourt, Nigeria"
    },
    currentLocation: "Atlantic Ocean",
    shippingHistory: [
      { date: "2025-05-10", event: "Package received in Cape Town port" },
      { date: "2025-05-12", event: "Loaded onto vessel" },
      { date: "2025-05-14", event: "Vessel departed Cape Town" }
    ]
  }
};

// Function to load shipments from localStorage or use defaults
export const loadShipments = (): ShipmentsData => {
  const storedShipments = localStorage.getItem('translark_shipments');
  if (storedShipments) {
    return JSON.parse(storedShipments);
  }
  // Initialize with default data if nothing in localStorage
  saveShipments(defaultShipments);
  return defaultShipments;
};

// Function to save shipments to localStorage
export const saveShipments = (shipments: ShipmentsData): void => {
  localStorage.setItem('translark_shipments', JSON.stringify(shipments));
};

// Generate tracking code
export const generateTrackingCode = (): string => {
  const prefix = 'TRK';
  const randomDigits = Math.floor(100000 + Math.random() * 900000).toString();
  return `${prefix}${randomDigits}`;
};
