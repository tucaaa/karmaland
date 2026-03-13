import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-purple-500/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
            KARMALAND
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition">
              Inicio
            </Link>
            <Link to="/carta" className="text-gray-300 hover:text-purple-400 transition">
              Carta de Tragos
            </Link>
            <a href="#ubicacion" className="text-gray-300 hover:text-purple-400 transition">
              Ubicación
            </a>
            <div className="flex gap-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-cyan-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/541234567890" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-cyan-400 transition">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-cyan-400 transition">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-400 hover:text-cyan-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-purple-500/30 pt-4">
            <Link to="/" className="block text-gray-300 hover:text-purple-400 transition py-2">
              Inicio
            </Link>
            <Link to="/carta" className="block text-gray-300 hover:text-purple-400 transition py-2">
              Carta de Tragos
            </Link>
            <a href="#ubicacion" className="block text-gray-300 hover:text-purple-400 transition py-2">
              Ubicación
            </a>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-cyan-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/541234567890" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-cyan-400 transition">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-cyan-400 transition">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
