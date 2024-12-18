const Navbar = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-8 flex
    justify-between items-center">
        <nav className="w-full flex justify-between">
            <h1>
                Yellow Tapes
            </h1>

            <div className="flex gap-8">
            {['Peliculas', 'Documentales', 'Contacto'].map((nav) => 
            (
                <div key={nav} className="cursor-pointer 
                text-gray hover:text-white transition-all">
                    {nav}
                </div>
            ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar