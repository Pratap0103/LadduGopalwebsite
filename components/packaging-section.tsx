"use client";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function PackagingSection() {
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
      id="services"
      className="py-16 md:py-24 scroll-mt-24 bg-[#FFFCF4]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <motion.div
            className="relative group overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src="/images/Packaging/Packaging.jpg"
                alt="Rice packaging bags"
                width={600}
                height={320}
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300"
                priority={false}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6 lg:pl-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-xs tracking-wider opacity-80 uppercase mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                CUSTOMISED PACKAGING MADE FOR YOU
              </motion.p>
              <motion.h2
                className="font-serif text-3xl md:text-4xl font-bold text-pretty mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Set your brand apart
              </motion.h2>
            </motion.div>
            <motion.p
              className="text-sm leading-relaxed opacity-90"
              variants={itemVariants}
            >
              Your brand deserves more than ordinary packaging. We create customised solutions that not only protect your product but also showcase your identity. From concept to delivery, our team ensures designs that resonate with the market and delight your customers—making your brand truly unforgettable.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
