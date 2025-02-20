const WhyChoose = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-purple-900 to-red-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir KANKUN 4.0?</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2">Experiencias Únicas</h3>
                            <p className="text-white/80">
                                Creamos momentos memorables que durarán toda la vida.
                            </p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2">Eventos Exclusivos</h3>
                            <p className="text-white/80">
                                Accede a los mejores eventos y experiencias VIP.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="/path-to-concert-image.jpg"
                            alt="Concierto en vivo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose