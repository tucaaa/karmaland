export default function GallerySection() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
      title: "Pista Principal"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop",
      title: "DJ Booth"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=500&fit=crop",
      title: "VIP Lounge"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
      title: "Ambiente Nocturno"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop",
      title: "Bar"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop",
      title: "Zona de Descanso"
    }
  ];

  return (
    <section className="py-20 bg-black/50 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              EL LOCAL
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Descubre el ambiente y la energía de KARMALAND</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-start p-6">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-lg transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
