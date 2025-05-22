
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 border-t-4 border-gold">
      <div className="rounded-full bg-navy w-14 h-14 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-7 w-7 text-gold" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-navy text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
