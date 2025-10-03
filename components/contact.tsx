"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, FileText, Building2, Loader2, CheckCircle2, AlertCircle, Facebook, Twitter, Instagram, Linkedin, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const timestamp = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(',', '');

    const data = {
      action: 'insert',
      sheetName: 'Response',
      rowData: JSON.stringify([
        timestamp,
        '',
        formData.get('Name'),
        formData.get('Contect No'),
        formData.get('Gmail'),
        formData.get('Remarks')
      ])
    };

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzTMwGyRymCTfj9S5hEa66ciucFqp0T2wGst7B6-MievsFJ1fhiRPIbE8m4g6ymRn0Z/exec',
        {
          method: 'POST',
          body: new URLSearchParams(data)
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! We will get back to you soon.');
        setShowPopup(true);
        e.target.reset();
        
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);

        setTimeout(() => {
          setSubmitStatus(null);
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact us directly.');
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="contact"
      className="py-12 md:py-16 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Popup Message */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
            >
              <div className={`p-6 rounded-lg shadow-2xl flex items-center gap-4 ${
                submitStatus === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {submitStatus === 'success' ? (
                  <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-8 w-8 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className="font-semibold text-lg">{statusMessage}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get in touch with us for your requirements
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Contact Information */}
          <motion.div
            className="p-6 rounded-lg bg-card border hover:border-primary/20 transition-colors space-y-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="p-2 rounded bg-primary/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Building2 className="h-5 w-5 text-primary" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Factory & Registered Office</h3>
                <address className="not-italic text-sm text-muted-foreground">
                  Khata No. 183/2043, Tahsil - Belpara,<br />
                  Salandi - 767026, Balangir, Odisha
                </address>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="p-2 rounded bg-primary/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FileText className="h-5 w-5 text-primary" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Legal Information</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>GSTIN: 21AAKFL6157F1ZF</div>
                  <div>PAN: AAKFL6157F</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="p-2 rounded bg-primary/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="h-5 w-5 text-primary" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-3">Contact Details</h3>
                <div className="space-y-2 text-sm">
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a className="text-primary hover:underline" href="mailto:laddugopalindustries@gmail.com">
                      laddugopalindustries@gmail.com
                    </a>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a className="text-primary hover:underline" href="tel:+918282828755">
                      +91 82828 28755
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              className="p-6 rounded-lg bg-card border space-y-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-foreground">Send us a Message</h3>
              </div>

              {/* Status Message (inline) */}
              <AnimatePresence>
                {submitStatus && !showPopup && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{statusMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div variants={itemVariants}>
                <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                <Input
                  id="name"
                  name="Name"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                  className="mt-1"
                />
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                <motion.div variants={itemVariants}>
                  <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="Gmail"
                    type="email"
                    placeholder="you@company.com"
                    required
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                  <Input
                    id="phone"
                    name="Contect No"
                    type="tel"
                    placeholder="+91 00000 00000"
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                <Textarea
                  id="message"
                  name="Remarks"
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="mt-1"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>

        {/* Map Section */}
        {/* Map Section */}
        <motion.div
          className="mt-12 rounded-lg overflow-hidden shadow-lg"
          variants={itemVariants}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59727.89!2d82.920948!3d20.501021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMwJzAzLjciTiA4MsKwNTUnMTUuNCJF!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 text-center border-t">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Find Us Here</h3>
            <p className="text-muted-foreground mb-1">Salandi, Belpara - 767026, Balangir, Odisha</p>
            <p className="text-sm text-muted-foreground mb-4">Interactive map for easy location access</p>
            <motion.button
              className="mt-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=20.501021,82.920948', '_blank')}
            >
              View on Google Maps
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
