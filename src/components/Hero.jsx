import { motion } from "framer-motion"
import Image from "../assets/img1.jpg"

const Hero = () => {
    return (
        <section className="pt-20 lg:pt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 mb-12 lg:mb-0"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            Kankun 4.0
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                            Descubre un mundo lleno de eventos inolvidables, la mejor música y experiencias únicas
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-kankun-primary text-white rounded-full hover:bg-kankun-medium transition-colors"
                            >
                                Ver eventos
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border border-kankun-light text-kankun-primary rounded-full hover:bg-kankun-lightest transition-colors"
                            >
                                Saber más
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
                        className="relative h-[400px] lg:h-[400px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-kankun-light to-kankun-primary rounded-2xl opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            
                            <img src="/evento.jpg?height=250&width=400"alt="" />
                        </div>
=======
                        className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-kankun-light to-kankun-primary opacity-20 z-10"></div>
                        <img
                            src={Image || "/placeholder.svg"}
                            alt="Ciudad al atardecer con niebla"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
>>>>>>> fa5df220cf5d50858d32c4249ce6e423f6e40be8
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
