import React from 'react';
import { ProductCard } from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Classic White Sneakers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d'
  },
  {
    id: 2,
    name: 'Leather Backpack',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa'
  },
  {
    id: 3,
    name: 'Minimalist Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314'
  },
  {
    id: 4,
    name: 'Denim Jacket',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0'
  },
  {
    id: 5,
    name: 'Sunglasses',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083'
  },
  {
    id: 6,
    name: 'Canvas Tote Bag',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363'
  }
];

export function Shop() {
  const [filters, setFilters] = React.useState({
    priceRange: 'all',
    sortBy: 'featured'
  });

  const filteredProducts = React.useMemo(() => {
    let result = [...products];

    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    if (filters.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        
        <div className="flex gap-4">
          <select
            value={filters.priceRange}
            onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
            className="border rounded-md px-3 py-1"
          >
            <option value="all">All Prices</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
          </select>

          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
            className="border rounded-md px-3 py-1"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={() => {
              // Handle add to cart
            }}
          />
        ))}
      </div>
    </div>
  );
}