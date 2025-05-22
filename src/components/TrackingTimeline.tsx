
import React from 'react';
import { ShippingHistory } from '../types/shipping';

interface TrackingTimelineProps {
  history: ShippingHistory[];
}

const TrackingTimeline = ({ history }: TrackingTimelineProps) => {
  const sortedHistory = [...history].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4 text-navy">Shipping History</h3>
      <div className="space-y-6">
        {sortedHistory.map((item, index) => (
          <div key={index} className="timeline-container">
            <div className="timeline-dot"></div>
            {index === sortedHistory.length - 1 && <div className="timeline-end"></div>}
            <div className="ml-2">
              <p className="font-semibold">{new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <p className="text-gray-600">{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingTimeline;
