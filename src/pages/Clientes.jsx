import React from "react";
import { Globe2, Star, Building2 } from "lucide-react"; // íconos decorativos

// 🖼️ Importa tus imágenes locales desde src/assets/
import logo1 from "../assets/cliente1.jpg";
import logo2 from "../assets/cliente2.jpg";
import logo3 from "../assets/cliente3.jpg";
import logo4 from "../assets/cliente4.jpg";
import logo5 from "../assets/cliente5.jpg";

const clientes = [
  {
    nombre: "Solid State",
    descripcion:
      "Empresa líder en soluciones de almacenamiento digital. Socio estratégico en infraestructura tecnológica de CRYD Bank.",
    logo: logo1,
  },
  {
    nombre: "Noted",
    descripcion:
      "Plataforma de productividad que integra herramientas de gestión de tareas y finanzas para usuarios CRYD.",
    logo: logo2,
  },
  {
    nombre: "Mowi",
    descripcion:
      "Fintech especializada en pagos internacionales, aliada de CRYD Bank para conectar usuarios globalmente.",
    logo: logo3,
  },
  {
    nombre: "Talo",
    descripcion:
      "Startup de microfinanzas que impulsa la inclusión financiera mediante el acceso rápido y transparente al crédito.",
    logo: logo4,
  },
  {
    nombre: "Goan",
    descripcion:
      "Empresa de seguridad digital que provee a CRYD Bank con soluciones blockchain y protección avanzada.",
    logo: logo5,
  },
];

export default function Clientes() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Clientes Destacados
      </h2>

      {/* Tarjetas de clientes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientes.map((c, i) => (
          <div
            key={i}
            className="relative group bg-gray-800/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/30 cursor-pointer"
          >
            {/* Imagen / Logo */}
            <img
              src={c.logo}
              alt={c.nombre}
              className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Overlay con datos */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-center">
              <h3 className="text-xl font-bold mb-2 flex justify-center items-center gap-2">
                <Building2 size={20} className="text-emerald-400" />
                {c.nombre}
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-3">
                {c.descripcion}
              </p>

              {/* Íconos decorativos */}
              <div className="flex justify-center gap-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Star size={20} />
                <Globe2 size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
