// src/FeatureSection.jsx
import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Precision Engineering',
    description: 'State‐of‐the‐art CAD/CAM technology.',
  },
  {
    title: 'Biocompatible Materials',
    description: 'Implants crafted from premium‐grade titanium.',
  },
  {
    title: 'Global Support',
    description: '24/7 clinical assistance worldwide.',
  },
]

export default function FeatureSection() {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Key Features
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
              <p className="text-gray-600 text-base">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
