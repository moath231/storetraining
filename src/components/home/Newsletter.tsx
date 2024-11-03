import React from 'react';
import { Mail } from 'lucide-react';

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="bg-indigo-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="py-10 px-6 sm:px-12 lg:flex lg:items-center lg:py-16">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay updated with our latest offers
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-indigo-200">
              Subscribe to our newsletter and get exclusive deals, new product alerts, and insider news.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="flex">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};