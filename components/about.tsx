"use client"
import { motion } from 'framer-motion'

export function About() {
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
      id="about"
      className="py-20 md:py-28 scroll-mt-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
        {/* Text Section */}
        <motion.div className="order-2 lg:order-1" variants={containerVariants}>
          <motion.h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            About us
          </motion.h2>
          <motion.p
            className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            At Laddu Gopal Industries, we take pride in being one of the leading rice processors and manufacturers in the
            region from past 25 years, delivering premium quality rice to domestic and international markets.
          </motion.p>
          <motion.p
            className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Established with a vision to combine tradition with modern technology, our fully equipped rice mill has a
            production capacity of 44 tons per hour, making us capable of handling large-scale orders with consistency
            and precision. With advanced milling, polishing, grading, and sortex technology, we ensure every grain meets
            the highest standards of purity, taste, and nutrition.
          </motion.p>
          <motion.p
            className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Guided by strong values of quality, trust, and customer satisfaction, we continue to build lasting relationships
            with farmers, traders, and buyers across the globe.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="order-1 lg:order-2 w-full"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] xl:min-h-[400px] relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/AboutUs.jpg"
              alt="Laddu Gopal Industries rice processing facility"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}



