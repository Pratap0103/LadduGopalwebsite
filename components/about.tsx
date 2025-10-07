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
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center mb-16">
          {/* Text Section */}
          <motion.div className="order-2 lg:order-1" variants={containerVariants}>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6"
              variants={itemVariants}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-gray-600 leading-relaxed mb-4"
              variants={itemVariants}
            >
              The story of Laddu Gopal Industries (A unit of Shyamji Group) began in <span className="font-semibold text-gray-900">1999</span>, with a humble dream — to bring the finest grains of rice from our land to every home. What started as a small plant with a capacity of just <span className="font-semibold text-gray-900">4 MT per hour</span> has today grown into a symbol of progress, trust, and perseverance, producing over <span className="font-semibold text-gray-900">20,000 MT of rice every month</span>.
            </motion.p>
            <motion.p
              className="text-sm md:text-base text-gray-600 leading-relaxed mb-4"
              variants={itemVariants}
            >
              Now in its third generation of leadership, our journey is guided by the same values that shaped our foundation — <span className="font-semibold text-gray-900">honesty, hard work, and commitment to quality</span>. Each generation has added its own vision and strength, turning what began as a family business into a modern enterprise built on technology and tradition alike.
            </motion.p>
            <motion.p
              className="text-sm md:text-base text-gray-600 leading-relaxed mb-4"
              variants={itemVariants}
            >
              Our <span className="font-semibold text-gray-900">state-of-the-art manufacturing campus</span> is powered by a dedicated <span className="font-semibold text-gray-900">team of more than 100 skilled professionals</span>, working together to ensure that every grain leaving our mill reflects our promise of purity and excellence.
            </motion.p>
            <motion.p
              className="text-sm md:text-base text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              From one small unit to a thriving integrated agri-industry, Laddu Gopal Industries stands as <span className="font-semibold text-gray-900">a story of creation with purpose</span> — where every milestone achieved is rooted in faith, family, and the farmers who make it all possible.
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

        {/* Our Products Section */}
        <motion.div
          className="pt-12 md:pt-16 border-t border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="text-center mb-10 md:mb-14"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3 tracking-tight">
              Our Brands
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></div>
              <div className="h-1.5 w-20 bg-amber-500 rounded-full"></div>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
            </div>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {/* Syamji Logo */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group flex items-center justify-center"
            >
              <img
                src="/images/Logo/Syamji.png"
                alt="Sanjay Grain Products Pvt. Ltd."
                className="max-h-48 sm:max-h-56 md:max-h-60 w-auto object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                onError={(e) => {
                  console.error('Failed to load Syamji.png');
                  e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><text x="50%" y="50%" text-anchor="middle" fill="gray">Syamji</text></svg>';
                }}
              />
            </motion.div>

            {/* Laddu Gopal Logo */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group flex items-center justify-center"
            >
              <img
                src="/images/Logo/LadduGopal.png"
                alt="Sunfire Metal Industries LLP"
                className="max-h-36 sm:max-h-44 md:max-h-52 w-auto object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                onError={(e) => {
                  console.error('Failed to load LadduGopal.png');
                  e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><text x="50%" y="50%" text-anchor="middle" fill="gray">Laddu Gopal</text></svg>';
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}