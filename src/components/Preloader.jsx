import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Espera 1s y luego se desvanece
    const timer = setTimeout(() => setFadeOut(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-950 text-white z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* LOGO SVG animado */}
      <svg
        width="200"
        height="80"
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6"
      >
        {/* Texto "CRYD" */}
        <text
          x="20"
          y="65"
          fill="none"
          stroke="#34D399"
          strokeWidth="2"
          fontSize="64"
          fontFamily="Poppins, sans-serif"
          letterSpacing="4"
        >
          CRYD
        </text>

        {/* Subtexto "Bank" */}
        <text
          x="260"
          y="65"
          fill="#FFFFFF"
          fontSize="48"
          fontFamily="Poppins, sans-serif"
          letterSpacing="3"
        >
          Bank
        </text>

        {/* Línea animada debajo */}
        <line
          x1="20"
          y1="75"
          x2="380"
          y2="75"
          stroke="#34D399"
          strokeWidth="2"
          strokeDasharray="360"
          strokeDashoffset="360"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="360"
            to="0"
            dur="1s"
            fill="freeze"
          />
        </line>
      </svg>

      <p className="text-gray-400 text-sm tracking-widest uppercase animate-fadeIn">
        Cargando banca inteligente...
      </p>
    </div>
  );
}
