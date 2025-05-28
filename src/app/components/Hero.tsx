"use client";

import Link from 'next/link';
import { FlipText } from './magicui/flip-text';
import StartEarningButton from './magicui/StartEarningButton';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#010613' }}>
      <style jsx>{`
        @media (max-width: 1100px) {
          .hero-video-container {
            max-width: 95vw !important;
          }
          .hero-title {
            font-size: 3.5rem !important;
          }
          .hero-description {
            font-size: 1rem !important;
            max-width: 90% !important;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
      {/* Background Video */}
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <div className="hero-video-container relative w-full max-w-[70vw] h-full overflow-hidden">
          <video 
            className="absolute top-1/2 left-1/2 min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            style={{ width: '100%', height: '100%', objectPosition: 'center center' }}
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/video/bg.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold mb-6">
            <FlipText 
              className="text-7xl sm:text-9xl md:text-10xl hero-title" 
              duration={0.7}
              delayMultiple={0.1}
            >
              Z4R0
            </FlipText>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 hero-description">
            Z4R0 is a smart agent protocol built on Ethereum. It lets you deploy autonomous agents to handle yield farming, arbitrage, staking, and liquidity shifts — all without manual input.
          </p>
          <div className="flex justify-center">
            <StartEarningButton />
          </div>
        </div>
      </div>
    </section>
  );
} 