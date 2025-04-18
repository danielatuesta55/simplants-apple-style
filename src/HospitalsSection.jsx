// src/HospitalsSection.jsx
import React from 'react'

export default function HospitalsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">HOSPITALS</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4 md:mx-auto md:max-w-xl">
          <li>Plan procedures and manage stock transparently across manufacturers</li>
          <li>Intuitive one-click orders with product substitution recommendations</li>
          <li>Cut on-site inventory by 30% with just-in-time supply</li>
          <li>Auto-track implant usage before, during and after procedures</li>
        </ul>
        <p className="text-gray-600 font-semibold">
          Forget consignment debates and stock‑outs — just have what you need, when you need it.
        </p>
      </div>
    </section>
  )
}
