import React from "react";
import { HeartHandshake, Globe2, ShieldCheck, Rocket, Users, Leaf } from "lucide-react";

export default function Nosotros() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Fondo animado sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.15),_transparent)] animate-pulse" />

      {/* Encabezado */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 text-emerald-400 drop-shadow-lg tracking-tight">
          Sobre Nosotros
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          En <span className="text-emerald-400 font-semibold">CRYD Bank</span>, redefinimos la banca
          digital con innovación, transparencia e inclusión.  
          Nuestro objetivo es empoderar a cada persona con el control total de sus finanzas.
        </p>
      </div>

      {/* Historia */}
      <div className="relative z-10 max-w-5xl mx-auto mb-16">
        <div className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg p-8 transition-all duration-500 hover:shadow-emerald-500/30">
          <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2 text-emerald-400">
            <Rocket size={28} /> Nuestra Historia
          </h3>
          <p className="text-gray-300 leading-relaxed">
            En 2025, un grupo de visionarios financieros y tecnológicos creó CRYD Bank
            para romper las barreras de la banca tradicional y ofrecer una plataforma
            100% digital, accesible y segura.  
            Desde entonces, hemos revolucionado el panorama financiero de América Latina,
            integrando inteligencia artificial, blockchain y soluciones sostenibles.
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-800/70 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 text-emerald-400">
            <ShieldCheck size={26} /> Misión
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Redefinir la banca digital para hacerla más ágil, segura y sin fronteras,
            promoviendo la inclusión financiera a través de la tecnología.
          </p>
        </div>
        <div className="bg-gray-800/70 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 text-emerald-400">
            <Globe2 size={26} /> Visión
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Ser el banco digital líder de América Latina, reconocido por su innovación,
            sostenibilidad y compromiso con el bienestar económico global.
          </p>
        </div>
      </div>

      {/* Valores */}
      <h3 className="text-3xl font-semibold text-center mb-10 text-emerald-400">
        Nuestros Valores
      </h3>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Rocket size={32} className="text-emerald-400 mb-2" />,
            title: "Innovación",
            desc: "Impulsamos la creatividad para ofrecer soluciones financieras revolucionarias.",
          },
          {
            icon: <ShieldCheck size={32} className="text-emerald-400 mb-2" />,
            title: "Transparencia",
            desc: "Actuamos con claridad y honestidad en cada operación y comunicación.",
          },
          {
            icon: <Users size={32} className="text-emerald-400 mb-2" />,
            title: "Inclusión",
            desc: "Creamos oportunidades equitativas para todos, sin importar el lugar o condición.",
          },
          {
            icon: <Leaf size={32} className="text-emerald-400 mb-2" />,
            title: "Sostenibilidad",
            desc: "Fomentamos la educación financiera y el uso responsable de los recursos.",
          },
        ].map((valor, i) => (
          <div
            key={i}
            className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-500 text-center"
          >
            <div className="flex justify-center">{valor.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{valor.title}</h4>
            <p className="text-gray-300 text-sm">{valor.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA final */}
      <div className="relative z-10 text-center mt-20">
        <p className="text-gray-400 mb-4">
          Conoce más sobre nuestra misión y forma parte de la revolución financiera digital.
        </p>
        <a
          href="mailto:contacto@crydbank.com"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}
