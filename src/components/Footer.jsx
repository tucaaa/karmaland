import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-4">
              KARMALAND
            </h3>
            <p className="text-gray-400 mb-4">
              El mejor boliche de Arrecifes con DJs exclusivos, ambiente premium y la mejor música en vivo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Carta de Tragos
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-gray-400 hover:text-purple-400 transition">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Horarios</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Jueves a Viernes:</span>
                <span>22:00 - 06:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>21:00 - 07:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8 pb-8 border-b border-purple-500/30">
          <h4 className="text-white font-bold text-lg mb-6">Síguenos</h4>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 hover:text-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 transition border border-purple-500/30 hover:border-cyan-500/30"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/541234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 hover:text-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 transition border border-green-500/30 hover:border-cyan-500/30"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-black/40 to-gray-500/20 text-gray-400 hover:text-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 transition border border-gray-500/30 hover:border-cyan-500/30"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 hover:text-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 transition border border-blue-500/30 hover:border-cyan-500/30"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-2 mb-2">
            Hecho con <FaHeart className="text-red-500" /> por KARMALAND © {currentYear}
          </p>
          <p>Todos los derechos reservados | Arrecifes, Buenos Aires</p>
        </div>
      </div>
    </footer>
  );
}
