import React from 'react';
import { Users, Globe, Leaf } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Founded in 2024, StyleStore has been at the forefront of fashion retail, 
          bringing curated collections to fashion-conscious individuals worldwide.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {[
          {
            icon: Users,
            title: 'Customer First',
            description: 'We believe in putting our customers first, always listening to their needs and feedback.'
          },
          {
            icon: Globe,
            title: 'Global Reach',
            description: 'Our products reach fashion enthusiasts across the globe, bringing style to every corner.'
          },
          {
            icon: Leaf,
            title: 'Sustainability',
            description: 'We're committed to sustainable practices and reducing our environmental impact.'
          }
        ].map((value, i) => (
          <div key={i} className="text-center">
            <value.icon className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'John Smith',
              role: 'CEO & Founder',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
            },
            {
              name: 'Sarah Williams',
              role: 'Creative Director',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
            },
            {
              name: 'Michael Chen',
              role: 'Head of Design',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
            }
          ].map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-8 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}