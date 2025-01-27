import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import iconImg from "../assets/image.svg"
import { useEffect, useState } from "react"

const Navbar = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("info@yellowtapes.com")
        alert("Email copiado")
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);



  return (
    <header className="w-full px-4 sm:px-8 flex justify-between items-center">
        <nav className={`fixed top-0 left-0 w-full z-20 ${isScrolled ? 'bg-zinc' : 'bg-transparent'} transition duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/pagina-ant/">
                            <img src={iconImg} alt="Y T logo" className="h-10 w-auto fill-current"/>
                        </Link>
                    </div>
                    <p className={`font-helvetica text-sm text-white weight-bold ${isScrolled ? 'visible': 'hidden'} transition`}>Yellow Tapes</p>
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/pagina-ant/Nosotros">
                            <p className="text-white hover:text-gray font-helvetica text-sm hover:underline">
                                Nosotros
                            </p>
                        </Link>
                        <FontAwesomeIcon icon={ faEnvelope } onClick={() => copyToClipboard()} className="hover:text-gray"/>
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