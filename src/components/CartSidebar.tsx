import React from 'react';
import { X } from 'lucide-react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div
        className={`absolute right-0 top-0 h-full w-96 bg-gray-800 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Cart items will go here */}
            <p className="text-gray-400 text-center py-8">Your cart is empty</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-800 border-t border-gray-700">
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Total:</span>
              <span className="text-white font-semibold">$0.00</span>
            </div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;