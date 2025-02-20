"use client"
import { motion } from "framer-motion"

const Events = () => {
    const events = [
        { title: "Festivales", description: "Los mejores festivales de música" },
        { title: "Conciertos", description: "Artistas nacionales e internacionales" },
        { title: "Experiencias", description: "Momentos únicos e inolvidables" }
    ]

    return (
        <section id="events" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                        Eventos que encontrarás
                    </h2>
                    <p className="text-lg text-gray-600">
                        Descubre todos los eventos que tenemos preparados para ti
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-kankun-lightest"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-kankun-primary/90 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                            >
                                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                <p className="text-white/90 text-sm">{event.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Events