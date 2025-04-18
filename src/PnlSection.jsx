
// PnlSection.jsx
import React from 'react'

export default function PnlSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">For P&L, teams, customers and patients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="/images/2.jpg" alt="Manufacturer icon" className="mx-auto mb-4 h-20" />
            <h3 className="text-2xl font-semibold mb-2">MANUFACTURERS</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-left">
              <li>Slash sales costs by up to 50% with structured data and AI insights</li>
              <li>Optimize field inventory and track consignment ROI in real time</li>
              <li>Free sales teams from admin with smart SaaS-Tools</li>
              <li>Master supply chain complexity with clear, actionable control</li>
            </ul>
            <p className="text-gray-600 font-semibold">Simplants turns operational chaos into your competitive edge.</p>
          </div>
          <div>
            <img src="/images/3.jpg" alt="Hospital icon" className="mx-auto mb-4 h-20" />
            <h3 className="text-2xl font-semibold mb-2">HOSPITALS</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-left">
              <li>Plan procedures and manage stock transparently across manufacturers</li>
              <li>Intuitive one-click orders with product substitution recommendations</li>
              <li>Cut on-site inventory by 30% with just-in-time supply</li>
              <li>Auto-track implant usage before, during and after procedures</li>
            </ul>
            <p className="text-gray-600 font-semibold">Forget consignment debates and stock-outs — just have what you need, when you need it.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

