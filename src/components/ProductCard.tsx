import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

export function ProductCard({ name, price, image, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">${price.toFixed(2)}</p>
        </div>
        <button
          onClick={onAddToCart}
          className="rounded-full p-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}