import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop" 
          alt="Club" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60 z-20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse z-0"></div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 md:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
            KARMALAND
          </span>
          <br/>
          <span className="text-3xl md:text-5xl text-gray-200">El Boliche de Arrecifes</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Vive la mejor experiencia nocturna con DJs exclusivos, ambiente vibrante y tragos premium. 
          Tu destino para noches inolvidables.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/541234567890?text=Hola%20KARMALAND%2C%20me%20gustaría%20solicitar%20VIP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
          >
            <FaWhatsapp size={24} />
            Solicitar VIP
          </a>
          
          <Link
            to="/carta"
            className="flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
          >
            Carta de Tragos
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
