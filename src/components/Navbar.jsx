import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
  return (
    <header className="w-full px-4 sm:px-8 flex justify-between items-center">
        <nav className="fixed top-0 left-0 w-full z-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <p className="text-2xl font-helvetica text-yellow text-lg underline italic">
                                YTS
                            </p>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#about" className="text-white hover:text-gray font-helvetica text-sm hover:underline">
                        Nosotros
                        </a>
                        <a href="#contact" className="text-white hover:text-gray font-helvetica text-sm hover:underline">
                        Contacto
                        </a>
                        <FontAwesomeIcon icon={ faInstagram } className="hover:text-gray"/>
                        <FontAwesomeIcon icon={ faYoutube } className="hover:text-gray"/>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar