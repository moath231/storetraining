import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-6 w-6 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">EcoStore</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/shop" className="text-gray-700 hover:text-indigo-600 transition">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">
              <Info className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-indigo-600 transition">
              <ShoppingCart className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {state.items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};