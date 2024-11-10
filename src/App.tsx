import React from 'react';
import { ShoppingCart, Instagram, Twitter } from 'lucide-react';
import AccountCard from './components/AccountCard';
import CartSidebar from './components/CartSidebar';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [accounts] = React.useState([
    {
      id: 1,
      type: 'instagram',
      age: '2 years',
      followers: '10.5K',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      type: 'twitter',
      age: '3 years',
      followers: '25K',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">SocialAccounts</span>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white"
            >
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center space-x-2 bg-purple-600 px-4 py-2 rounded-lg">
            <Instagram className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Instagram</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg">
            <Twitter className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Twitter</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      </main>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;