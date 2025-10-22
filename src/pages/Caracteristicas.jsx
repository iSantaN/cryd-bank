import React from "react";
import { Cpu, ShieldCheck, Bot, Globe2, Leaf, CreditCard } from "lucide-react";

// 🖼️ Importa tus imágenes locales desde src/assets
import img1 from "../assets/caracteristica1.jpg";
import img2 from "../assets/caracteristica2.jpg";
import img3 from "../assets/caracteristica3.jpg";
import img4 from "../assets/caracteristica4.jpg";
import img5 from "../assets/caracteristica5.jpg";
import img6 from "../assets/caracteristica6.jpg";

// 🔹 Lista de características
const caracteristicas = [
  {
    icon: <CreditCard size={40} className="text-emerald-400 mb-3" />,
    title: "Operación 100% Digital",
    description:
      "Apertura de cuentas, créditos y pagos desde nuestra app o web. Sin trámites presenciales, rápido y seguro.",
    image: img1,
  },
  {
    icon: <ShieldCheck size={40} className="text-emerald-400 mb-3" />,
    title: "Sin Comisiones Ocultas",
    description:
      "Transparencia total en cada movimiento. Conoce tus costos en tiempo real sin sorpresas.",
    image: img2,
  },
  {
    icon: <Bot size={40} className="text-emerald-400 mb-3" />,
    title: "Evaluación Inteligente",
    description:
      "IA analiza tu perfil para ofrecerte soluciones financieras personalizadas y accesibles.",
    image: img3,
  },
  {
    icon: <Cpu size={40} className="text-emerald-400 mb-3" />,
    title: "Atención 24/7",
    description:
      "Chatbots y asistentes virtuales disponibles en todo momento para resolver tus dudas.",
    image: img4,
  },
  {
    icon: <Globe2 size={40} className="text-emerald-400 mb-3" />,
    title: "Integración Global",
    description:
      "Conecta con billeteras electrónicas y sistemas de pago internacionales sin fronteras.",
    image: img5,
  },
  {
    icon: <Leaf size={40} className="text-emerald-400 mb-3" />,
    title: "Compromiso Sostenible",
    description:
      "Promovemos la educación financiera y el uso responsable de la tecnología para un futuro verde.",
    image: img6,
  },
];

// 🔸 Componente principal
export default function Caracteristicas() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Características Principales
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caracteristicas.map((c, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-800/60 backdrop-blur-md hover:bg-gray-800/80 transition-all duration-500 p-6 flex flex-col items-center text-center cursor-pointer hover:scale-105"
          >
            {/* Imagen de fondo con overlay */}
            <img
              src={c.image}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            />

            {/* Contenido */}
            <div className="relative z-10">
              {c.icon}
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{c.description}</p>
            </div>

            {/* Brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
