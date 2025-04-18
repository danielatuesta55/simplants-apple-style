// ComponentsSection.jsx
import React from 'react'

const components = [
  { title: 'METHODOLOGY', img: '/images/2.jpg', desc: 'Medical Device data is often unstructured, fragmented and inconsistent across manufacturers and hospitals. Our open, industry-wide taxonomy standardizes products, enabling precise identification, compatibility, substitution, reporting and procedural alignment.' },
  { title: 'TECHNOLOGY', img: '/images/3.jpg', desc: 'AI-based interfaces and standalone SaaS solutions, integrated into ERP, HIS and CRM - no replacement needed. Our ontology links products, procedures and inventory data for real-time and predictive insights.' },
  { title: 'TRANSACTIONS', img: '/images/1.jpg', desc: 'The agnostic marketplace cuts order time with one-click buying, assisted procedure preparation, substitutions and predictive restocking. Track consignment and loaner stock in real time – and make ROI visible.' },
  { title: 'OPERATIONS', img: '/images/hero.jpg', desc: 'Logistics, Financial, Regulatory and other value-added services from expert partners ensure reliable delivery at scale. From data structuring to compliance – our expert ecosystem delivers.' },
]

export default function ComponentsSection() {
  return (
    <section id="components" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Components in Detail</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {components.map((c, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <img src={c.img} alt={c.title} className="mx-auto mb-4 h-16" />
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
