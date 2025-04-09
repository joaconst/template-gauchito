'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { cart, totalItems, removeFromCart, totalPrice } = useCart();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header className="sticky top-0 bg-background z-50 border-b">
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
              <Link href="/#nosotros" className="relative hover:text-primary group">
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
              <button
                onClick={toggleCartModal}
                className="p-2 hover:text-primary relative"
              >
                <ShoppingCart size={20} />
                {isClient && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-10 h-8 flex flex-col justify-center items-center rounded-xl bg-primary">
                  <div
                    className={`w-6 h-1 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                      }`}
                  />
                  <div
                    className={`w-6 h-1 bg-white rounded-full my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                      }`}
                  />
                  <div
                    className={`w-6 h-1 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                      }`}
                  />
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

      {/* Modal del Carrito */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleCartModal}
          ></div>

          <div className="flex items-start justify-end min-h-screen pt-20 px-4 pb-8">
            <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Tu carrito ({totalItems})</h2>
                <button
                  onClick={toggleCartModal}
                  className="p-2 text-gray-500 hover:text-gray-900"
                >
                  <X size={20} />
                </button>
              </div>

              {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-96 overflow-y-auto space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <img
                            src={item.imagen || '/default-product.webp'}
                            alt={item.nombre}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.nombre}</h3>
                          <p className="text-sm text-gray-600">
                            {item.cantidad} × ${item.precio.toLocaleString('es-AR')}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>${totalPrice.toLocaleString('es-AR')}</span>
                    </div>
                    <Link
                      href="/#"
                      onClick={toggleCartModal}
                      className="block mt-4 bg-primary text-white text-center py-3 rounded hover:bg-primary/90 transition-colors"
                    >
                      Finalizar compra
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;