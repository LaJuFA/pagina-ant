const Navbar = () => {
  return (
    <header className="w-full px-4 sm:px-8 flex justify-between items-center">
        <nav className="fixed top-0 left-0 w-full z-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-helvetica text-yellow text-lg underline italic">
                            YTS
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#home" className="text-white hover:text-gray font-helvetica text-sm hover:underline">
                            Inicio
                        </a>
                        <a href="#about" className="text-white hover:text-gray font-helvetica text-sm hover:underline">
                        Nosotros
                        </a>
                        <a href="#contact" className="text-white hover:text-gray font-helvetica text-sm hover:underline">
                        Contacto
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar