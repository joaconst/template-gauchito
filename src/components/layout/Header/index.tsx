'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h2 className="text-xl ml-4">Gauchito Argentino</h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="relative hover:text-primary group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
            <Link href="/productos" className="relative hover:text-primary group">
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
            <Link href="/nosotros" className="relative hover:text-primary group">
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
            <Link href="/contacto" className="relative hover:text-primary group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
          </nav>


          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 hover:text-primary">
              <Search size={20} />
            </button>

            {/* Cart Icon */}
            <Link href="#" className="p-2 hover:text-primary relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-10 h-8 flex flex-col justify-center items-center rounded-xl bg-primary">
                <div className={`w-6 h-1 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-1 bg-white rounded-full my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-1 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 