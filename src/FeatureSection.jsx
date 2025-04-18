// FeatureSection.jsx
import React from 'react'
import { motion } from 'framer-motion'

const features = [
  { title: 'Precision Engineering', description: 'State-of-the-art CAD/CAM technology.' },
  { title: 'Biocompatible Materials', description: 'Implants crafted from premium-grade titanium.' },
  { title: 'Global Support', description: '24/7 clinical assistance worldwide.' },
]

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
