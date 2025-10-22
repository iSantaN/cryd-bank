import React from "react";

// 🖼️ Importa tus imágenes locales desde src/assets
import img1 from "../assets/producto1.jpg";
import img2 from "../assets/producto2.jpg";
import img3 from "../assets/producto3.jpg";
import img4 from "../assets/producto4.jpg";
import img5 from "../assets/producto5.jpg";

// 📦 Lista de productos
const productos = [
  {
    title: "Cuentas Digitales",
    description:
      "Abre tu cuenta en minutos con verificación biométrica y gestiona todo desde tu celular o web.",
    image: img1,
  },
  {
    title: "Tarjetas Digitales y Físicas",
    description:
      "Disfruta de cashback, control de gastos, bloqueo instantáneo y uso global sin comisiones ocultas.",
    image: img2,
  },
  {
    title: "Créditos y Microfinanzas Inteligentes",
    description:
      "Aprobación automática con IA. Soluciones rápidas, seguras y adaptadas a tu perfil financiero.",
    image: img3,
  },
  {
    title: "Pagos y Transferencias",
    description:
      "Envía y recibe dinero al instante. Paga con QR y conecta con billeteras digitales internacionales.",
    image: img4,
  },
  {
    title: "Criptomonedas y Activos Digitales",
    description:
      "Compra, guarda y gestiona criptomonedas con tecnología blockchain y cumplimiento KYC/AML.",
    image: img5,
  },
];

// 🎨 Componente principal
export default function Productos() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Productos y Servicios
      </h2>

      {/* Grid interactivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((prod, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/40"
          >
            {/* Imagen de fondo */}
            <img
              src={prod.image}
              alt={prod.title}
              className="w-full h-72 object-cover group-hover:opacity-80 transition-opacity duration-500"
            />

            {/* Overlay de información */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {prod.title}
              </h3>
              <p className="text-sm md:text-base text-gray-200">
                {prod.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


