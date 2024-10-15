import React from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">TutePro</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/personalizza" className="text-gray-600 hover:text-primary transition">Personalizza</Link>
          <Link href="/collezione" className="text-gray-600 hover:text-primary transition">Collezione</Link>
          <Link href="/chi-siamo" className="text-gray-600 hover:text-primary transition">Chi Siamo</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-primary transition">
            <Search size={24} />
          </button>
          <Link href="/carrello" className="text-gray-600 hover:text-primary transition">
            <ShoppingCart size={24} />
          </Link>
          <button className="md:hidden text-gray-600 hover:text-primary transition">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;