import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 rounded-t-2xl shadow-inner">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
        {/* Columna izquierda - Contacto */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <h3 className="text-emerald-400 text-2xl font-semibold mb-6 flex items-center gap-2">
            <Phone size={22} /> Contacto
          </h3>
          <ul className="space-y-3 text-gray-300 text-base">
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Phone size={18} className="text-emerald-400" />
              <a
                href="tel:+51958410273"
                className="hover:text-emerald-400 transition"
              >
                +51 958 410 273
              </a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Mail size={18} className="text-emerald-400" />
              <a
                href="mailto:contacto@crydbank.com"
                className="hover:text-emerald-400 transition"
              >
                contacto@crydbank.com
              </a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <MessageCircle size={18} className="text-emerald-400" />
              <a
                href="https://wa.me/51958410273"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition"
              >
                WhatsApp: +51 958 410 273
              </a>
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-full transition"
            >
              <Facebook className="text-emerald-400" size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-full transition"
            >
              <Instagram className="text-emerald-400" size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-full transition"
            >
              <Linkedin className="text-emerald-400" size={22} />
            </a>
          </div>
        </div>

        {/* Columna derecha - Dirección + mapa */}
        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right">
          <h3 className="text-emerald-400 text-2xl font-semibold mb-6 flex items-center gap-2 justify-center md:justify-end">
            <MapPin size={22} /> Dirección
          </h3>
          <p className="text-gray-300 mb-5 leading-relaxed max-w-sm">
            Centro Empresarial FinTech Tower <br />
            Av. Javier Prado Este 2450, San Isidro, Lima, Perú <br />
            Piso 11 – Oficina 1108
          </p>

          {/* Mapa */}
          <div className="w-full md:w-4/5 h-52 rounded-lg overflow-hidden shadow-md border border-emerald-500/20">
            <iframe
              title="Ubicación CRYD Bank"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9027889302386!2d-77.02509318561854!3d-12.094052191448217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82b345beea3%3A0x7a2f1c2bca1a8e71!2sAv.%20Javier%20Prado%20Este%202450%2C%20San%20Isidro%2C%20Lima!5e0!3m2!1ses!2spe!4v1671234567890!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
        © 2025{" "}
        <span className="text-emerald-400 font-semibold">CRYD Bank</span>. Todos
        los derechos reservados.
      </div>
    </footer>
  );
}
