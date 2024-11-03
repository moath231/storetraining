import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Watch, Droplet } from 'lucide-react';

const categories = [
  {
    name: 'Audio',
    icon: Headphones,
    description: 'Premium sound experience',
    color: 'bg-purple-500'
  },
  {
    name: 'Wearables',
    icon: Watch,
    description: 'Smart devices for daily life',
    color: 'bg-blue-500'
  },
  {
    name: 'Eco-Friendly',
    icon: Droplet,
    description: 'Sustainable choices',
    color: 'bg-green-500'
  }
];

export const Categories = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/shop"
              className="group relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${category.color} p-8`}>
                <category.icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="mt-2 text-white/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};