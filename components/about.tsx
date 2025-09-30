"use client"
import Image from "next/image"
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
            className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            For over 26 years, Laddu Gopal Industries has stood as a trusted name in rice processing and manufacturing,
            delivering premium-quality rice to domestic and international markets.
          </motion.p>
          <motion.p
            className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Our state-of-the-art rice mill boasts a production capacity of 44 tons per hour. Using advanced milling,
            polishing, grading, and sortex technology, we ensure every grain meets the highest benchmarks in purity,
            taste, and nutrition.
          </motion.p>
          <motion.p
            className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Driven by a commitment to quality, trust, and customer satisfaction, we foster long-term relationships with
            farmers, traders, and global buyers alike.
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
            <Image
              src="/images/AboutUs.jpg"
              alt="Laddu Gopal Industries rice processing facility"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              priority={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

