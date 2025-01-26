import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

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
              <Link to="/pagina-ant/Nosotros">
                <p className="hover:text-yellow-500">Nosotros</p>
              </Link>
            </li>
            <li>
              <p className='text-yellow-500 cursor-text select-text'>info@yellowtapes.com</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-100">Síguenos</h2>
          <div className="mt-4 flex space-x-4">
            <FontAwesomeIcon icon= { faFacebook } className='hover:text-gray'/>
            <FontAwesomeIcon icon= { faInstagram } className="hover:text-gray"/>
            <FontAwesomeIcon icon= { faTwitter } className='hover:text-gray'/>
            <FontAwesomeIcon icon={ faYoutube } className="hover:text-gray"/>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm flex-column items-center justify-center">
        <p>© 2024 Yellow Tapes Studios. Todos los derechos reservados.</p>
        <div>
          <p>Desarrollado por</p>
          <a href="https://linktr.ee/tealbonfiredevs" target="_blank" rel="noopener noreferrer">Teal Bonfire</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;