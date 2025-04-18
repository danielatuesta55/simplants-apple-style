import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
      <section
        className="relative w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* Centered content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center space-y-6 pt-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
            Creating efficiency in the Medical Devices industry
          </h1>
          <p className="text-base md:text-lg max-w-xl">
            Outdated sales and procurement processes between manufacturers and hospitals cause $29 billion waste every year.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 rounded-full text-lg font-semibold transition-shadow shadow-md hover:shadow-lg"
          >
            Book a Demo
          </a>
        </motion.div>
      </section>
    )
  }
