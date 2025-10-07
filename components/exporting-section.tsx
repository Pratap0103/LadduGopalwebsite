"use client";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function ExportingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="exporting"
      className="py-8 md:py-16 lg:py-24 bg-[#FFFCF4]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <motion.div className="space-y-6 lg:pr-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-xs sm:text-xs tracking-wider opacity-80 uppercase mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                DELIVERING WORLDWIDE
              </motion.p>
              <motion.h2
                className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-pretty mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Export Excellence
              </motion.h2>
            </motion.div>
            <motion.p
              className="text-sm sm:text-base leading-relaxed opacity-90"
              variants={itemVariants}
            >
              We are equipped with state-of-the-art milling technologies and a highly efficient production process. This enables us to seamlessly handle bulk orders. With a monthly capacity of
              <motion.span
                className="font-bold"
                initial={{ color: '#000' }}
                animate={{ color: '#ff6b35' }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              >
                  30,000 metric tons,
              </motion.span>
              we are prepared to meet all your rice requirements with reliability and consistency.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative group overflow-hidden order-first lg:order-last"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
               <Image
                src="/images/Exporters/Exporters.jpg"
                alt="Export and shipping operations"
                width={600}
                height={400}
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300"
                priority={true}
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
