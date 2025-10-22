import React from "react";
import { TrendingUp, Rocket, Coins, Building, Briefcase } from "lucide-react";

export default function Capital() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Fondo animado sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.1),_transparent)] animate-pulse" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 text-emerald-400 drop-shadow-lg tracking-tight">
          CRYD Bank Capital
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Invirtiendo en el futuro de las finanzas digitales y promoviendo la
          inclusión financiera en toda América Latina.
        </p>
      </div>

      {/* Sección de Propósito y Estrategia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-500">
          <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
            <Rocket size={26} />
            Propósito
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Impulsar el crecimiento sostenible de la nueva generación de
            fintechs y startups tecnológicas que redefinen el sistema
            financiero global.
          </p>
        </div>

        <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-500">
          <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2 mb-3">
            <TrendingUp size={26} />
            Estrategia
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Combinamos Growth Equity y Venture Capital para respaldar empresas
            con alto potencial en inteligencia artificial, blockchain y pagos
            inteligentes.
          </p>
        </div>
      </div>

      {/* Sectores de Inversión */}
      <h3 className="text-3xl font-semibold text-center mb-8 text-emerald-400">
        Áreas de Inversión Estratégica
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            icon: <Coins size={30} className="text-emerald-400" />,
            title: "Fintechs",
            desc: "Apoyamos startups financieras que democratizan el acceso a servicios bancarios.",
          },
          {
            icon: <Building size={30} className="text-emerald-400" />,
            title: "Blockchain",
            desc: "Invertimos en tecnología blockchain para operaciones más seguras y trazables.",
          },
          {
            icon: <Briefcase size={30} className="text-emerald-400" />,
            title: "IA y Big Data",
            desc: "Potenciamos plataformas que utilizan IA para decisiones financieras inteligentes.",
          },
          {
            icon: <Rocket size={30} className="text-emerald-400" />,
            title: "Pagos Digitales",
            desc: "Apoyamos soluciones de pago globales que eliminan fronteras financieras.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-500 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA final */}
      <div className="relative z-10 text-center mt-16">
        <p className="text-gray-400 mb-4">
          Buscamos aliados que compartan nuestra visión del futuro financiero.
        </p>
        <a
          href="mailto:contacto@crydbank.com"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Contáctanos para invertir juntos
        </a>
      </div>
    </section>
  );
}

