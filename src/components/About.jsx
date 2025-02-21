
import { motion } from "framer-motion"

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-kankun-lightest">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                        Que es Kankun 4.0
                    </h2>
                    <p className="text-lg text-gray-600">
                        Somos una plataforma dedicada a crear experiencias únicas,
                        donde la música, el entretenimiento y la diversión se unen
                        para crear momentos inolvidables.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-lg shadow-kankun-lightest/50"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="w-16 h-16 bg-gradient-to-br from-kankun-medium to-kankun-primary text-white rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                {item}
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Característica {item}</h3>
                            <p className="text-gray-600">
                                Descripción breve de la característica o beneficio que ofrece Kankun 4.0
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About