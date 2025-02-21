
import { motion } from "framer-motion"

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <footer className="bg-kankun-primary text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4">Kankun 4.0</h3>
                        <p className="text-white/80 text-sm">
                            Creando experiencias inolvidables
                        </p>
                    </motion.div>
                    {['Enlaces', 'Legal', 'Contacto'].map((title) => (
                        <motion.div key={title} variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-4">{title}</h4>
                            <ul className="space-y-2">
                                {[1, 2, 3].map((item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                                            {title} {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-white/10 mt-12 pt-8 text-center text-white/70 text-sm"
                >
                    <p>&copy; {new Date().getFullYear()} Kankun 4.0. Todos los derechos reservados.</p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer