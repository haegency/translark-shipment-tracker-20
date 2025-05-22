
export interface Shipper {
  name: string;
  country: string;
}

export interface Receiver {
  name: string;
  origin: string;
  destination: string;
}

export interface ShippingHistory {
  date: string;
  event: string;
}

export interface ShipmentData {
  trackingCode: string;
  packageType: string;
  dateShipped: string;
  estimatedDelivery: string;
  shipmentStatus: 'Pending' | 'In Transit' | 'Delivered' | 'On Hold' | 'Delayed';
  shipmentMode: 'Air' | 'Sea' | 'Road';
  shipper: Shipper;
  receiver: Receiver;
  currentLocation: string;
  shippingHistory: ShippingHistory[];
}

export type ShipmentsData = Record<string, ShipmentData>;
