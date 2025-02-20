import "./App.css"

const App = () => {
  return (
    <div className="font-sans">
      {/* Previous header content remains unchanged */}

      {/* Sección "¿Por qué elegir Kankun 4.0?" */}
      <section className="py-20 bg-red-900 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué elegir <span className="text-red-300">KANKUN 4.0</span>?
            </h2>
            <p className="text-gray-200 text-lg">
              Descubre un mundo de sensaciones con Kankun 4.0, tu compañero perfecto para planificar y disfrutar eventos
              periodísticos hasta ciudades vibrantes.
            </p>
          </div>
          <div className="relative h-[200px] md:h-[400px] order-1 md:order-2">
            <img
              src="/party2.png?height=300&width=500"
              alt="Concert crowd"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-[#FDF6F6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Eventos que encontrarás</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Descubre un mundo de sensaciones con Kankun 4.0, tu compañero perfecto para planificar y disfrutar eventos
            desde playas paradisíacos hasta ciudades vibrantes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Festivales", "Conciertos", "Eventos"].map((event) => (
              <div key={event} className="relative h-[250px] group">
                <img
                  src="/placeholder.svg?height=250&width=400"
                  alt={event}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{event}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">Copyright © 2025</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-red-200 transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                Accesibilidad
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
