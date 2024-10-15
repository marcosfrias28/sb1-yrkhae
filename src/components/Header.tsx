import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">TutePro</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/personalizza" className="text-gray-600 hover:text-primary transition">Personalizza</Link>
          <Link to="/collezione" className="text-gray-600 hover:text-primary transition">Collezione</Link>
          <Link to="/chi-siamo" className="text-gray-600 hover:text-primary transition">Chi Siamo</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-primary transition">
            <Search size={24} />
          </button>
          <Link to="/carrello" className="text-gray-600 hover:text-primary transition">
            <ShoppingCart size={24} />
          </Link>
          {user ? (
            <div className="relative group">
              <button className="text-gray-600 hover:text-primary transition">
                <User size={24} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                {user.role === 'admin' && (
                  <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin Dashboard</Link>
                )}
                <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="text-gray-600 hover:text-primary transition">Login</Link>
          )}
          <button className="md:hidden text-gray-600 hover:text-primary transition">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;