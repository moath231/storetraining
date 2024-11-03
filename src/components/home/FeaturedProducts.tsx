import React from 'react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { PlusCircle } from 'lucide-react';

export const FeaturedProducts = () => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">${product.price}</p>
              </div>
              <button
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
              >
                <PlusCircle className="h-4 w-4" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};