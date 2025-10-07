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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section
      id="quality"
      className="py-16 sm:py-20 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <motion.div 
          className="text-center mb-10 sm:mb-12" 
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
            <div className="h-1 w-16 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-4"></div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 bg-clip-text text-transparent mb-3">
            Our Business
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            A successful business conglomerate reimagining, advancing industrialization and improving people's lives.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Business Description - Full Content */}
        <motion.div
          className="max-w-5xl mx-auto mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg">
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-5 font-serif font-medium"
              variants={fadeInUp}
            >
              At Laddu Gopal Industries, we take pride in nurturing a business that's deeply rooted in the soil of India.
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 font-serif"
              variants={fadeInUp}
            >
              We operate modern manufacturing facilities for <span className="font-bold">Parboiled Rice, Raw Rice, and Puffed Rice</span>, with a combined production capacity of over <span className="font-bold">20,000 MT per month</span>. Our plants are equipped with state-of-the-art automated processing lines, advanced sortex systems, and stringent quality control mechanisms — ensuring that every grain we produce meets global standards of purity, texture, and taste.
            </motion.p>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 font-serif"
              variants={fadeInUp}
            >
              Expanding our commitment to a greener planet, we have also built a dedicated vertical for producing <span className="font-bold">biomass pellets and briquettes</span>, converting agricultural residue into clean energy. Today, we proudly supply biomass fuel to <span className="font-bold">major Thermal Power Plants across the country</span>, contributing to India's renewable energy goals.
            </motion.p>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 font-serif"
              variants={fadeInUp}
            >
              Our strength lies in our people — especially the <span className="font-bold">1,000+ farmers</span> who are part of our extended family. Through <span className="font-bold">backward integration programs</span>, we work closely with them, ensuring fair prices and consistent demand. We also procure <span className="font-bold">agro-waste</span> directly from farms — material often left behind after harvest — transforming it into a valuable resource. This not only creates <span className="font-bold">additional income for farmers</span> but also reduces field burning, preserving the health of our land and air.
            </motion.p>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-serif font-medium"
              variants={fadeInUp}
            >
              Over the decades, this journey has earned us not just growth, but <span className="font-bold">trust, respect, and long-lasting relationships</span> across the value chain. At Laddu Gopal Industries, every grain tells a story — of <span className="font-bold">sustainability, partnership, and purpose</span>.
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div 
          className="mt-12 sm:mt-16 flex justify-center gap-2"
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