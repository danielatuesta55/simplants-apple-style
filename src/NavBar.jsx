import React from 'react'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/30">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <span className="font-semibold text-xl text-gray-900">Simplants</span>
        <div className="flex space-x-8 text-gray-700">
            <a href="#features" className="hover:text-primary transition">Features</a>
            <a href="#components" className="hover:text-primary transition">Components</a>
            <a href="#benefits" className="hover:text-primary transition">Benefits</a>
            <a href="#contact" className="font-medium text-primary hover:underline">Contact</a>

            </div>
        </div>
        </nav>
  )
}
