// BenefitsSection.jsx
import React from 'react'

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Benefits in Detail</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2">Manufacturer</th>
              <th className="border px-4 py-2">Hospital</th>
            </tr>
          </thead>
          <tbody>
            {[
              'ERP/HIS integration',
              'Structured data',
              'Insight and forecasting',
              'One-click orders',
              'Less sales costs',
              'Optimized inventory',
              'No stockouts',
              'AI-/robotics-integration'
            ].map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="border px-4 py-2">{item}</td>
                <td className="border px-4 py-2 text-center">✓</td>
                <td className="border px-4 py-2 text-center">✓</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
