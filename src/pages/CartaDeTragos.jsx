import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaArrowLeft, FaGlassWhiskey } from 'react-icons/fa';

export default function CartaDeTragos() {
  const tragos = [
    {
      id: 1,
      nombre: "Purple Galaxy",
      descripcion: "Vodka, Blue Curaçao, Jarabe de Lavanda, Limón fresco",
      precio: "$450",
      category: "Signature"
    },
    {
      id: 2,
      nombre: "Neon Dream",
      descripcion: "Ron blanco, Energizante, Jugo de Piña, Hielo seco",
      precio: "$500",
      category: "Signature"
    },
    {
      id: 3,
      nombre: "Cyber Kiss",
      descripcion: "Tequila, Cointreau, Jugo de Frambuesa, Limón",
      precio: "$480",
      category: "Signature"
    },
    {
      id: 4,
      nombre: "Dark Matter",
      descripcion: "Whisky, Amargo Angostura, Miel, Hielo",
      precio: "$520",
      category: "Premium"
    },
    {
      id: 5,
      nombre: "Electric Lemonade",
      descripcion: "Vodka, Licor de Manzana, Limón, Mix de Energizante",
      precio: "$470",
      category: "Clásicos"
    },
    {
      id: 6,
      nombre: "Cosmic Blast",
      descripcion: "Rum, Coco, Piña, Curaçao Azul, Brillo Comestible",
      precio: "$510",
      category: "Signature"
    },
    {
      id: 7,
      nombre: "Midnight Mojito",
      descripción: "Ron, Menta Negra, Lima, Gaseosa, Hierbas Aromáticas",
      precio: "$390",
      category: "Clásicos"
    },
    {
      id: 8,
      nombre: "Phoenix Fire",
      descripcion: "Whisky Picante, Jalapeño, Miel, Limón, Especia",
      precio: "$530",
      category: "Premium"
    }
  ];

  const categories = ["Signature", "Premium", "Clásicos"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-20 px-4 md:px-8 border-b border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition mb-8">
            <FaArrowLeft size={20} />
            Volver a Inicio
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <FaGlassWhiskey className="text-4xl text-purple-400" />
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
                CARTA DE TRAGOS
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl">
            Descubre nuestros cócteles exclusivos, creados por nuestros bartenders profesionales con ingredientes premium.
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                {category}
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tragos
                .filter(trago => trago.category === category)
                .map((trago) => (
                  <div
                    key={trago.id}
                    className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/10 to-transparent hover:border-purple-500/50 hover:from-purple-900/20 transition group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition flex-1">
                        {trago.nombre}
                      </h3>
                      <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text ml-4 whitespace-nowrap">
                        {trago.precio}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {trago.descripcion}
                    </p>

                    {/* Specs */}
                    <div className="mt-4 pt-4 border-t border-purple-500/20">
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
                          ✓ Premium
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full">
                          ✓ Casa
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Info Note */}
        <div className="mt-20 pt-12 border-t border-purple-500/30">
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Información Importante</h3>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Todos nuestros tragos están elaborados por bartenders certificados</li>
              <li>✓ Utilizamos ingredientes importados de la más alta calidad</li>
              <li>✓ Los precios pueden variar según promociones vigentes</li>
              <li>✓ Disponemos de opciones sin alcohol y cero azúcar</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
