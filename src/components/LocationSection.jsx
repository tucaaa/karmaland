import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-black/50 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              DÓNDE ENCONTRARNOS
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Ubicación e información de contacto</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="space-y-8">
            <div className="p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/10 to-transparent hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ubicación</h3>
                  <p className="text-gray-400">Nos ubicamos en el centro de Arrecifes</p>
                </div>
              </div>
              <p className="text-lg text-white font-semibold mb-2">
                Mitre 450, Arrecifes
              </p>
              <p className="text-gray-400 mb-4">
                Buenos Aires, Argentina CP 2700
              </p>
              <a 
                href="https://maps.google.com/?q=Mitre+450+Arrecifes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition"
              >
                Abrir en Google Maps
              </a>
            </div>

            <div className="p-8 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/10 to-transparent hover:border-cyan-500/50 transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Contacto</h3>
                  <p className="text-gray-400">Reservas y consultas</p>
                </div>
              </div>
              <p className="text-lg text-white font-semibold mb-4">
                +54 9 2045 123-456
              </p>
              <a 
                href="https://wa.me/541234567890?text=Hola%20KARMALAND%2C%20me%20gustaría%20hacer%20una%20consulta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-purple-500/30 h-96 lg:h-auto min-h-[500px] hover:border-purple-500/50 transition">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8721088701237!2d-60.72516932346747!3d-33.765389100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b8d3c8d3c8d3c9%3A0x1234567890abcdef!2sMitre%20450%2C%20Arrecifes!5e0!3m2!1ses!2sar!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-75 hover:grayscale-0 transition duration-300"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
