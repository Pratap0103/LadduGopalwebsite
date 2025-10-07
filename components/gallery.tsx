"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BusinessesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="businesses"
      className="py-16 md:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Gallary/1.jpg"
                  alt="Rice Processing"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Gallary/2.jpg"
                  alt="Quality Rice"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Gallary/3.jpg"
                  alt="Export Operations"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Gallary/4.jpg"
                  alt="Packaging Solutions"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Gallary/5.jpg"
                  alt="Laddu Gopal Industries"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Gallary/6.jpg"
                  alt="Business Operations"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Gallary/1.jpg"
                  alt="Export Operations"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Gallary/2.jpg"
                  alt="Packaging Process"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

