import React from 'react';
import { Shield, Truck, RefreshCw, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: 'Your transactions are protected with industry-leading security measures'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free shipping on orders over $50 with guaranteed delivery within 3-5 days'
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Not satisfied? Return any item within 30 days for a full refund'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer service team is available around the clock to help you'
  }
];

export const Benefits = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <benefit.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};