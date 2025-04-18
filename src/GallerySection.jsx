// GallerySection.jsx
import React from 'react'
import { motion } from 'framer-motion'

const images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg']

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Product Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt="Gallery image"
                className="w-full h-64 object-cover transform hover:scale-105 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}