import React from "react";

// 🖼️ Importa tus imágenes locales desde src/assets
import img1 from "../assets/tecnologias1.jpg";
import img2 from "../assets/tecnologias2.jpg";
import img3 from "../assets/tecnologias3.jpg";
import img4 from "../assets/tecnologias4.jpg";

// ⚙️ Lista de tecnologías
const tecnologias = [
  {
    title: "Blockchain",
    description:
      "Permite gestionar criptomonedas de manera segura y facilita contratos inteligentes, mejorando la trazabilidad y reduciendo el riesgo en operaciones financieras complejas.",
    image: img1,
  },
  {
    title: "Inteligencia Artificial (IA)",
    description:
      "IA para analizar datos financieros, personalizar productos y ofrecer chatbots de atención al cliente 24/7.",
    image: img2,
  },
  {
    title: "Big Data",
    description:
      "Predice tendencias del mercado y ajusta ofertas en tiempo real, siendo clave en entornos competitivos.",
    image: img3,
  },
  {
    title: "Cloud Computing",
    description:
      "Infraestructura escalable basada en la nube para soportar el crecimiento rápido y global de la plataforma.",
    image: img4,
  },
];

// 💻 Componente principal
export default function Tecnologias() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Nuestras Tecnologías
      </h2>

      {/* Cuadrícula de tecnologías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tecnologias.map((tec, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/30"
          >
            {/* Imagen de fondo */}
            <img
              src={tec.image}
              alt={tec.title}
              className="w-full h-80 object-cover group-hover:opacity-80 transition-opacity duration-500"
            />

            {/* Capa de información */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">
                {tec.title}
              </h3>
              <p className="text-sm md:text-base text-gray-200">
                {tec.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
