import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "The quality of products here is exceptional. I'm particularly impressed with their eco-friendly options.",
    author: "Sarah Johnson",
    role: "Tech Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    content: "Fast shipping and great customer service. The smart watch I bought exceeded my expectations.",
    author: "Michael Chen",
    role: "Fitness Trainer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    content: "Their commitment to sustainability while maintaining product quality is remarkable.",
    author: "Emma Davis",
    role: "Environmental Consultant",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};