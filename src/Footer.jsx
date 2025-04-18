import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
        © {new Date().getFullYear()} Simplants. All rights reserved.
      </div>
    </footer>
  )
}
