import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Discover Premium Tech Essentials
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Curated collection of high-quality gadgets and accessories for the modern lifestyle
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/shop"
              className="group flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};