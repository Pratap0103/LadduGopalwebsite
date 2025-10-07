"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
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
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Laddu Gopal Industries
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Premium rice processing and manufacturing with over 26 years of excellence in quality and service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-amber-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-amber-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → About Us
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  className="hover:text-amber-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → Our Businesses
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-amber-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Rice Processing</li>
              <li>Custom Milling</li>
              <li>Quality Testing</li>
              <li>Packaging Solutions</li>
              <li>Bulk Supply</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:laddugopalindustries@gmail.com"
                  className="hover:text-amber-300 transition-colors break-all"
                >
                  laddugopalindustries@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+918282828755"
                  className="hover:text-amber-300 transition-colors"
                >
                  +91 82828 28755
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>
                  Factory & Regd. Office Address - Khata No. 183/2043, Tahsil - Belpara, Salandi - 767026, Balangir, Odisha<br />
                  India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-primary-foreground/20"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-primary-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} Laddu Gopal Industries. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary-foreground/80">Powered by</span>
              <motion.a
                href="https://www.botivate.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-300 hover:text-amber-200 transition-colors"
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