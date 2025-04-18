// src/ContactSection.jsx
import React from 'react'

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          Email:{' '}
          <a href="mailto:info@simplants.com" className="text-primary">
            info@simplants.com
          </a>
        </p>
        <p>
          Phone:{' '}
          <a href="tel:+4940328902502" className="text-primary">
            +49 40 328902502
          </a>
        </p>
        <p className="mt-6 text-gray-600 text-sm">
          Simplants GmbH • Neuer Wall 80 • 20354 Hamburg, Germany
        </p>
      </div>
    </section>
  )
}
