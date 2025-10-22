import React, { useState } from "react";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?q=80&w=1600&auto=format&fit=crop",
    alt: "Banca digital 1",
  },
  {
    src: "https://images.unsplash.com/photo-1581091215360-2d5b0f1b1e26?q=80&w=1600&auto=format&fit=crop",
    alt: "Banca digital 2",
  },
  {
    src: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop",
    alt: "Banca digital 3",
  },
  {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    alt: "Banca digital 4",
  },
];

export default function Header() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const next = () => setIndex((i) => (i + 1) % carouselImages.length);
  const prev = () => setIndex((i) => (i - 1 + carouselImages.length) % carouselImages.length);
  const go = (i) => setIndex(i % carouselImages.length);

  return (
    <header className="relative bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg h-[50vh] md:h-[65vh]">
      {/* Botón menú móvil */}
      <button
        className="absolute top-4 left-4 z-30 bg-emerald-500/80 hover:bg-emerald-600 text-white p-2 rounded-md md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar dentro del carrusel */}
      <div
        className={`absolute left-0 top-0 h-full w-64 bg-black/60 backdrop-blur-sm p-6 flex flex-col text-white z-20 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">CRYD Bank</h2>
        <nav className="flex flex-col gap-3 text-base">
          <a href="/" className="hover:text-emerald-400">Inicio</a>
          <a href="/nosotros" className="hover:text-emerald-400">Nosotros</a>
          <a href="/caracteristicas" className="hover:text-emerald-400">Características</a>
          <a href="/productos" className="hover:text-emerald-400">Productos y Servicios</a>
          <a href="/tecnologias" className="hover:text-emerald-400">Tecnologías</a>
          <a href="/capital" className="hover:text-emerald-400">Capital</a>
          <a href="/equipo" className="hover:text-emerald-400">Equipo</a>
          <a href="/clientes" className="hover:text-emerald-400">Clientes</a>
        </nav>
      </div>

      {/* Carrusel principal */}
      <div className="relative h-full w-full">
        <img
          src={carouselImages[index].src}
          alt={carouselImages[index].alt}
          className="object-cover w-full h-full opacity-90"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/1600x900?text=Imagen+no+disponible")
          }
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40 flex items-center justify-center text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-3">Toma el control de tu dinero</h1>
            <p className="text-lg mb-6">
              La nueva era de la banca inteligente con CRYD Bank
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded shadow">
                Abre tu cuenta
              </button>
              <a
                href="/nosotros"
                className="border border-white px-5 py-2 rounded hover:bg-white/10"
              >
                Conoce más
              </a>
            </div>
          </div>
        </div>

        {/* Controles del carrusel */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          <button onClick={prev} className="bg-white/30 px-3 py-1 rounded">
            ◀
          </button>
          <button onClick={next} className="bg-white/30 px-3 py-1 rounded">
            ▶
          </button>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-10">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-emerald-400" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </header>
  );
}
