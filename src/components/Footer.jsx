import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-yellow text-2xl font-bold">Yellow Tapes Studios</h1>
          <p className="mt-4 text-sm">
            Especialistas en la producción de películas, cortos y documentales que cuentan historias únicas.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-100">Enlaces rápidos</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">Inicio</a>
            </li>
            <li>
              <a href="#aboutUs" className="hover:text-yellow-500">Nostros</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500">Contacto</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-100">Síguenos</h2>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="hover:text-yellow-500"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-yellow-500"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:text-yellow-500"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-yellow-500"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© 2024 Yellow Tapes Studios. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;