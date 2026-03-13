import { FaMusic, FaCalendarAlt } from 'react-icons/fa';

export default function EventInfoSection() {
  const events = [
    {
      id: 1,
      title: "Viernes Negro",
      dj: "DJ Eclipse",
      genre: "Techno House",
      time: "22:00 - 06:00",
      icon: FaMusic,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Sábado Neon",
      dj: "DJ Quantum",
      genre: "Electrónica",
      time: "21:00 - 07:00",
      icon: FaCalendarAlt,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              PRÓXIMA NOCHE
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Temática y DJ invitado</p>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => {
            const IconComponent = event.icon;
            return (
              <div
                key={event.id}
                className={`relative group p-8 rounded-xl bg-gradient-to-br ${event.color} opacity-10 hover:opacity-20 transition duration-300 border border-gray-700/50 hover:border-purple-500/50 overflow-hidden`}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${event.color}`}>
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">DJ Invitado</p>
                      <p className="text-xl text-white font-bold">{event.dj}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Género</p>
                        <p className="text-white font-bold">{event.genre}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Horario</p>
                        <p className="text-white font-bold">{event.time}</p>
                      </div>
                    </div>

                    <button className={`w-full mt-6 py-3 rounded-lg bg-gradient-to-r ${event.color} text-white font-bold hover:shadow-lg transition transform hover:scale-105`}>
                      Ver Más Detalles
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
