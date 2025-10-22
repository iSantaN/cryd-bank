import React from "react";
import {
  Rocket,
  ShieldCheck,
  Smartphone,
  Banknote,
  Users,
  HeartHandshake,
} from "lucide-react";

export default function Inicio() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-screen">
      {/* Fondo animado con gradiente */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.1),_transparent)] animate-pulse" />

      {/* HERO principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 pt-32 pb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-400 drop-shadow-lg mb-6 animate-fadeIn">
          Toma el control de tu dinero 💳
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed animate-fadeIn delay-100">
          En{" "}
          <span className="text-emerald-400 font-semibold">CRYD Bank</span>{" "}
          transformamos la banca tradicional con tecnología inteligente,
          transparente y accesible para todos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fadeIn delay-200">
          <a
            href="#"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-emerald-400/40 transition-all duration-300 hover:scale-105"
          >
            Abre tu cuenta
          </a>
          <a
            href="/nosotros"
            className="border border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-semibold hover:bg-emerald-500/10 transition-all duration-300"
          >
            Conoce más
          </a>
        </div>
      </div>

      {/* HISTORIA */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="bg-gray-800/70 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-500">
          <h2 className="text-3xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
            <Rocket size={28} /> Nuestra Historia
          </h2>
          <p className="text-gray-300 leading-relaxed">
            En 2025, un grupo de visionarios financieros y tecnológicos creó{" "}
            <span className="text-emerald-400 font-medium">CRYD Bank</span> para
            romper las barreras de la banca tradicional. Nuestro objetivo: ofrecer
            una experiencia 100% digital, transparente y accesible, impulsada por
            innovación y sostenibilidad.
          </p>
        </div>
      </div>

      {/* Misión, Visión y Valores */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-10 py-16">
        {[
          {
            icon: <ShieldCheck size={36} className="text-emerald-400 mb-3" />,
            title: "Misión",
            desc: "Redefinir la banca digital para que sea más ágil, segura y sin fronteras.",
          },
          {
            icon: <Rocket size={36} className="text-emerald-400 mb-3" />,
            title: "Visión",
            desc: "Empoderar a las personas con control total sobre sus finanzas, sin límites ni intermediarios.",
          },
          {
            icon: <HeartHandshake size={36} className="text-emerald-400 mb-3" />,
            title: "Valores",
            desc: "Innovación – Transparencia – Inclusión – Sostenibilidad. Son la base de todo lo que hacemos.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg p-8 text-center transition-all duration-500 hover:shadow-emerald-500/30 hover:scale-105"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Final */}
      <div className="relative z-10 text-center py-20 bg-gray-900/50 border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-4 text-emerald-400 animate-fadeIn">
          Únete a la revolución financiera 🌍
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Abre tu cuenta en minutos, sin trámites ni complicaciones.
          <br />
          La banca inteligente está a solo un clic.
        </p>
        <a
          href="#"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-emerald-400/40 transition-all duration-300 hover:scale-105"
        >
          Empieza ahora
        </a>
      </div>
    </section>
  );
}
