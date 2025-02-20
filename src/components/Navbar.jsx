const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-kankun-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-bold text-kankun-primary">
              Kankun 4.0
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-kankun-primary transition-colors">
                Inicio
              </a>
              <a href="#about" className="text-gray-600 hover:text-kankun-primary transition-colors">
                Nosotros
              </a>
              <a href="#events" className="text-gray-600 hover:text-kankun-primary transition-colors">
                Eventos
              </a>
              <a href="#contact" className="text-gray-600 hover:text-kankun-primary transition-colors">
                Contacto
              </a>
            </div>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar