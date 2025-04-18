// src/App.jsx
import React from 'react'
import HeroSection from './HeroSection'
import NavBar from './NavBar'
import FeatureSection from './FeatureSection'
import PnlSection from './PnlSection'
import HospitalsSection from './HospitalsSection'
import OverviewSection from './OverviewSection'
import ComponentsSection from './ComponentsSection'
import BenefitsSection from './BenefitsSection'
import GallerySection from './GallerySection'
import ContactSection from './ContactSection'
import Footer from './Footer'

export default function App() {
  return (
    <div className="antialiased">
      <div className="bg-test p-4 text-center font-bold">
        If this is red, Tailwind is live!
      </div>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <PnlSection />
      <HospitalsSection />
      <OverviewSection />
      <ComponentsSection />
      <BenefitsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

