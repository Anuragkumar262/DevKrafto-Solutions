import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AnimatedBackground from "./Components/AnimatedBackground";

import Specialized from './Specialized';
import Marquee from './Marquee';
import Roadmap from './Roadmap';
import CaseStudies from './CaseStudies';
import Contact from './Contact';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import GrainOverlay from './GrainOverlay';
import ThemeToggle from './Components/ThemeToggle';
import SocialSection from './SocialSection';


const App = () => {
  return (
    <main className="relative min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] overflow-hidden">
      {/* --- MASTER UNIFIED TINT --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* This glow starts ABOVE the screen (top-[-20%]) to cover the Navbar area */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[100%] h-[100%] blur-[320px] rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(closest-side, color-mix(in oklab, var(--accent) 40%, transparent), transparent 70%)',
          }}
        />
        {/* Sharp focal point behind the Navbar & Hero Title */}
        
      </div>
      <GrainOverlay />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedBackground />
      </div>

      <div className="fixed right-4 bottom-4 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10">
        <Navbar />
        {/* Added a container to ensure Hero text aligns with your design */}
        <section className="pt-32 font-['Space_Grotesk']">
          <HeroSection />
          
          <Specialized />
          <Marquee />
          <Roadmap />
          <CaseStudies />
          <Contact />
          <SocialSection />
          <FinalCTA />
          <Footer />
        </section>
      </div>
      
      
      
    </main>
  )
}

export default App
