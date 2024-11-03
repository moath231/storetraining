import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate('/shop')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 border-b border-gray-200 py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-gray-500 hover:text-indigo-600"
                  >
                    <MinusCircle className="h-5 w-5" />
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-indigo-600"
                  >
                    <PlusCircle className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold text-indigo-600">
                    ${state.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};