import Header from './components/Header';
import Hero from './components/Hero';
import WhatMakesDifferent from './components/WhatMakesDifferent';
import RealScenarios from './components/RealScenarios';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010613] text-white">
      <Header />
      <Hero />
      <WhatMakesDifferent />
      <RealScenarios />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Footer />
    </main>
  );
}
