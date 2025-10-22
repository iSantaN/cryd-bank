import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";

// Páginas
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Caracteristicas from "./pages/Caracteristicas";
import Productos from "./pages/Productos";
import Tecnologias from "./pages/Tecnologias";
import Capital from "./pages/Capital";
import Equipo from "./pages/Equipo";
import Clientes from "./pages/Clientes";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga (2 segundos)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Mostrar preloader durante la carga
  if (loading) {
    return <Preloader />;
  }

  // Mostrar la aplicación cuando termina la carga
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/capital" element={<Capital />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
