import React from "react";
import { Globe2, Star, Building2 } from "lucide-react"; // íconos decorativos

const clientes = [
  {
    nombre: "Solid State",
    descripcion:
      "Empresa líder en soluciones de almacenamiento digital. Socio estratégico en infraestructura tecnológica de CRYD Bank.",
    logo: "https://images.unsplash.com/photo-1634893215363-d4c1d91d3c80?q=80&w=800&auto=format&fit=crop",
  },
  {
    nombre: "Noted",
    descripcion:
      "Plataforma de productividad que integra herramientas de gestión de tareas y finanzas para usuarios CRYD.",
    logo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
  },
  {
    nombre: "Mowi",
    descripcion:
      "Fintech especializada en pagos internacionales, aliada de CRYD Bank para conectar usuarios globalmente.",
    logo: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&auto=format&fit=crop",
  },
  {
    nombre: "Talo",
    descripcion:
      "Startup de microfinanzas que impulsa la inclusión financiera mediante el acceso rápido y transparente al crédito.",
    logo: "https://images.unsplash.com/photo-1573497019411-5077b6dc7624?q=80&w=800&auto=format&fit=crop",
  },
  {
    nombre: "Goan",
    descripcion:
      "Empresa de seguridad digital que provee a CRYD Bank con soluciones blockchain y protección avanzada.",
    logo: "https://images.unsplash.com/photo-1581093588401-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Clientes() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Clientes Destacados
      </h2>

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
