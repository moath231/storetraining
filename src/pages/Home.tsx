import React from 'react';
import { ArrowRight, ShoppingBag, Truck, Shield, Clock, Star, Heart } from 'lucide-react';
import { Link } from '../components/Link';

export function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-8 max-w-3xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold">Discover Your Style</h1>
            <p className="text-xl">Curated collections for the modern individual</p>
            <Link 
              href="/shop"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: ShoppingBag, title: 'Premium Selection', desc: 'Curated products from top brands' },
            { icon: Truck, title: 'Fast Delivery', desc: 'Free shipping on orders over $50' },
            { icon: Shield, title: 'Secure Shopping', desc: '100% secure payment' },
            { icon: Clock, title: '24/7 Support', desc: 'Round the clock assistance' }
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <feature.icon className="h-8 w-8 mx-auto text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Classic White Sneakers', price: 89.99, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d' },
            { name: 'Leather Backpack', price: 129.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa' },
            { name: 'Minimalist Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314' }
          ].map((product, i) => (
            <div key={i} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', text: 'Amazing quality and fast delivery!' },
              { name: 'Mike Thompson', text: 'Best online shopping experience ever.' },
              { name: 'Emily Davis', text: 'Great customer service and beautiful products.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Stay updated with our latest collections and exclusive offers</p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}