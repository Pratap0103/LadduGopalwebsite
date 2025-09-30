"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section 
      id="home" 
      className="min-h-[70vh] flex items-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/10"
        animate={{
          background: [
            "linear-gradient(45deg, #f2efe8, #e5e1d8)",
            "linear-gradient(45deg, #e5e1d8, #d8d4c9)",
            "linear-gradient(45deg, #f2efe8, #e5e1d8)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
      {/* Loading skeleton while image loads */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 animate-pulse" />
      )}
      
      {/* Background image optimized with next/image */}
      <Image
        src="/images/Home.png"
        alt="Premium Rice Processing - Laddu Gopal Industries"
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        className={`object-cover transition-all duration-700 ease-out ${
          imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        onLoad={() => {
          setImageLoaded(true);
        }}
        onError={() => {
          console.error('Failed to load hero background image');
          setImageLoaded(true);
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 py-10 md:py-16 text-center relative z-10">
        <motion.h1
          className="font-serif text-4xl md:text-6xl leading-tight text-balance text-white"
          variants={itemVariants}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Premium Rice. Classic Quality.
        </motion.h1>
        <motion.p
          className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-white/90"
          variants={itemVariants}
        >
          For over 26 years, Laddu Gopal Industries has delivered trusted rice to families and businesses across the nation, ensuring unmatched quality and taste in every grain.
        </motion.p>
        <motion.div
          className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(14, 51, 84, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-semibold cursor-pointer"
            >
              View Products
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/60 bg-white/10 text-white hover:bg-white/20 hover:border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-semibold backdrop-blur-sm cursor-pointer"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}