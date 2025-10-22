import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100">
      {/* Carrusel principal */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col p-6 md:p-10 bg-white/90 rounded-t-3xl md:rounded-none shadow-md relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
