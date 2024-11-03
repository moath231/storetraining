import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [cartCount, setCartCount] = React.useState(0);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-indigo-600">StyleStore</Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2" onClick={() => setCartCount(prev => prev + 1)}>
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2">Home</Link>
            <Link href="/shop" className="block px-3 py-2">Shop</Link>
            <Link href="/about" className="block px-3 py-2">About</Link>
          </div>
        </div>
      )}
    </header>
  );
}