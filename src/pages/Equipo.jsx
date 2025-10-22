import React from "react";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"; // Íconos de redes sociales

// 🖼️ Importa las imágenes locales desde /src/assets/
import equipo1 from "../assets/equipo1.jpg";
import equipo2 from "../assets/equipo2.jpg";
import equipo3 from "../assets/equipo3.jpg";
import equipo4 from "../assets/equipo4.jpg";
import equipo5 from "../assets/equipo5.jpg";

const equipo = [
  {
    nombre: "Yaselli Judith Ochoa Huamani",
    cargo: "CEO",
    imagen: equipo1,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/51958410273",
  },
  {
    nombre: "Valery Giorgina Cruz Gonzalez",
    cargo: "COO",
    imagen: equipo2,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/51958410273",
  },
  {
    nombre: "Claudia Vanesa Guerrero Concha",
    cargo: "CFO",
    imagen: equipo3,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/51958410273",
  },
  {
    nombre: "Daniel Eduardo Mariñas Vega",
    cargo: "CIO",
    imagen: equipo4,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/51958410273",
  },
  {
    nombre: "Pedro Ricardo Ugarelli Galarza",
    cargo: "CTO",
    imagen: equipo5,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/51958410273",
  },
];

export default function Equipo() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Equipo Directivo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipo.map((m, i) => (
          <div
            key={i}
            className="relative group bg-gray-800/60 rounded-xl overflow-hidden shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/30"
          >
            {/* Imagen del miembro del equipo */}
            <img
              src={m.imagen}
              alt={m.nombre}
              className="w-full h-80 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Overlay con info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-center transition-all duration-500">
              <h3 className="text-xl font-bold text-white">{m.nombre}</h3>
              <p className="text-emerald-400 font-medium mb-3">{m.cargo}</p>

              {/* Íconos de redes sociales */}
              <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href={m.facebook} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                  <Facebook size={22} />
                </a>
                <a href={m.instagram} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                  <Instagram size={22} />
                </a>
                <a href={m.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                  <Linkedin size={22} />
                </a>
                <a href={m.whatsapp} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                  <MessageCircle size={22} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
