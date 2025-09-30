"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.footer
      className="bg-primary text-primary-foreground py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl font-bold mb-4">
              Laddu Gopal Industries
            </h3>
            <p className="text-primary-foreground/80">
              Premium rice processing and manufacturing for over 26 years.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  className="hover:text-white transition-colors"
                >
                  Businesses
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:laddugopalindustries@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  laddugopalindustries@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+918282828755"
                  className="hover:text-white transition-colors"
                >
                  +91 82828 28755
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-primary-foreground/20"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-primary-foreground/80">
              &copy; 2023 Laddu Gopal Industries. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>Powered by</span>
              <motion.a
                href="https://www.botivate.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-amber-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Botivate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}