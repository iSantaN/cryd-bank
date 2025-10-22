import React from "react";

const tecnologias = [
  {
    title: "Blockchain",
    description:
      "Permite gestionar criptomonedas de manera segura y facilita contratos inteligentes, mejorando la trazabilidad y reduciendo el riesgo en operaciones financieras complejas.",
    image:
      "https://images.unsplash.com/photo-1621504450181-5b7ba7726f03?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Inteligencia Artificial (IA)",
    description:
      "IA para analizar datos financieros, personalizar productos y ofrecer chatbots de atención al cliente 24/7.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Big Data",
    description:
      "Predice tendencias del mercado y ajusta ofertas en tiempo real, siendo clave en entornos competitivos.",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Cloud Computing",
    description:
      "Infraestructura escalable basada en la nube para soportar el crecimiento rápido y global de la plataforma.",
    image:
      "https://images.unsplash.com/photo-1581090468181-2f3b5a2b9e20?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Tecnologias() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Nuestras Tecnologías
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tecnologias.map((tec, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            <img
              src={tec.image}
              alt={tec.title}
              className="w-full h-80 object-cover group-hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-2xl font-bold mb-3 text-white">
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
