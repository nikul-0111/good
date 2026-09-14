import React, { useState } from 'react';
import { FloatingBackground } from './components/FloatingBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LetterCard } from './components/LetterCard';
import { AboutHer } from './components/AboutHer';
import { QuoteCard } from './components/QuoteCard';
import { FinalMessage } from './components/FinalMessage';
import { PeaceSection } from './components/PeaceSection';
import { Footer } from './components/Footer';

export function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isFinalRevealed, setIsFinalRevealed] = useState(false);

  const handleOpenLetter = () => {
    setIsLetterOpen(true);
    setTimeout(() => {
      const letterElem = document.getElementById('letter');
      if (letterElem) {
        letterElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="app-root">
      {/* Background Animated Floating Hearts & Sparkles */}
      <FloatingBackground />

      {/* Header Navigation Bar */}
      <Navbar onOpenLetter={handleOpenLetter} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Section */}
        <HeroSection onOpenLetter={handleOpenLetter} />

        {/* Section 2: Personal Letter Card */}
        <LetterCard isOpen={isLetterOpen} setIsOpen={setIsLetterOpen} />

        {/* Section 3: "How Are You?" — About Her */}
        <AboutHer />

        {/* Section 4: A Beautiful Quote */}
        <QuoteCard />

        {/* Section 5: "One Last Thing..." Interactive Reveal */}
        <FinalMessage isRevealed={isFinalRevealed} setIsRevealed={setIsFinalRevealed} />

        {/* Section 6: No Pressure, Just Care */}
        <PeaceSection />
      </main>

      {/* Section 7: Heartfelt Footer */}
      <Footer />
    </div>
  );
}

export default App;
