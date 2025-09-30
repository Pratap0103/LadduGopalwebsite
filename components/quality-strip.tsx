"use client";
import { motion } from 'framer-motion';

export function QualityStrip() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <section
      id="quality"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Our Businesses
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            A successful business conglomerate reimagining, advancing industrialization and improving people's lives.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
              className="max-h-60 sm:max-h-65 md:max-h-62 lg:max-h-70 w-auto object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
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
              className="max-h-38 sm:max-h-46 md:max-h-54 lg:max-h-62 w-auto object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
              onError={(e) => {
                console.error('Failed to load LadduGopal.png');
                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><text x="50%" y="50%" text-anchor="middle" fill="gray">Laddu Gopal</text></svg>';
              }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div 
          className="mt-16 sm:mt-20 flex justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <div className="w-2 h-2 rounded-full bg-amber-600"></div>
        </motion.div>
      </div>
    </section>
  );
}