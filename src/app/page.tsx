import Header from './components/Header';
import Hero from './components/Hero';
import WhatMakesDifferent from './components/WhatMakesDifferent';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010613] text-white">
      <Header />
      <Hero />
      <WhatMakesDifferent />
    </main>
  );
}
