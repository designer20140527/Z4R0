"use client";

import Image from 'next/image';

export default function Roadmap() {
  return (
    <section id="roadmap" className="w-full bg-[#010613] py-20">
      <div className="w-[70vw] mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Image
            src="/images/logo-white.png"
            alt="Z4R0 Logo"
            width={40}
            height={40}
          />
          <h2 className="text-white text-3xl font-medium font-[var(--font-aldrich)]">
            Roadmap
          </h2>
        </div>

        <div className="flex flex-nowrap gap-6 overflow-x-auto md:overflow-visible pb-4">
          <style jsx>{`
            @media (max-width: 1100px) {
              .roadmap-grid {
                display: grid !important;
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 30px !important;
              }
              .roadmap-item {
                min-width: 0 !important;
                margin-top: 0 !important;
              }
            }
            
            @media (max-width: 767px) {
              .roadmap-grid {
                display: flex !important;
                flex-direction: column !important;
                gap: 40px !important;
              }
              .roadmap-item {
                width: 100% !important;
                min-width: 0 !important;
                margin-top: 0 !important;
              }
            }
          `}</style>
          <div className="roadmap-grid flex flex-nowrap gap-6 w-full">
            {/* Launch & Bootstrapping */}
            <div className="roadmap-item flex-1 min-w-[240px] flex flex-col">
              <div className="flex items-start justify-start rounded-2xl mb-6 h-[160px]">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="40" stroke="#4169E1" strokeWidth="2" fill="none"/>
                  <path d="M60 20V100" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M60 20L80 40" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M60 20L40 40" stroke="#4169E1" strokeWidth="2"/>
                  <circle cx="60" cy="60" r="10" fill="#4169E1" fillOpacity="0.2"/>
                </svg>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4 font-[var(--font-aldrich)]">Launch & Bootstrapping</h3>
              <div className="flex">
                <div className="w-0.5 bg-gradient-to-b from-[#4169E1] to-transparent mr-4 flex-shrink-0 h-full"></div>
                <ul className="space-y-3 text-gray-300">
                  <li>Deploy core agent contracts on Ethereum mainnet</li>
                  <li>Launch early test modules for DeFi strategy execution</li>
                  <li>Enable manual and automated agent mode</li>
                  <li>Begin $ZRX staking and initial DAO setup</li>
                </ul>
              </div>
            </div>

            {/* Cross-Chain Expansion */}
            <div className="roadmap-item flex-1 min-w-[240px] flex flex-col mt-0">
              <div className="flex items-start justify-start rounded-2xl mb-6 h-[160px]">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="25" height="25" stroke="#4169E1" strokeWidth="2" fill="none"/>
                  <rect x="65" y="30" width="25" height="25" stroke="#4169E1" strokeWidth="2" fill="none"/>
                  <rect x="30" y="65" width="25" height="25" stroke="#4169E1" strokeWidth="2" fill="none"/>
                  <rect x="65" y="65" width="25" height="25" stroke="#4169E1" strokeWidth="2" fill="none"/>
                  <path d="M42 30L42 15L78 15L78 30" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M30 42L15 42L15 78L30 78" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M78 90L78 105L42 105L42 90" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M90 78L105 78L105 42L90 42" stroke="#4169E1" strokeWidth="2"/>
                </svg>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4 font-[var(--font-aldrich)]">Cross-Chain Expansion</h3>
              <div className="flex">
                <div className="w-0.5 bg-gradient-to-b from-[#4169E1] to-transparent mr-4 flex-shrink-0 h-full"></div>
                <ul className="space-y-3 text-gray-300">
                  <li>Integrate LayerZero & IBC for multi-chain communication</li>
                  <li>Extend support to Arbitrum, zkSync, Optimism, BNB Chain</li>
                  <li>Launch cross-chain strategy plug-ins (e.g., arbitrage/staking)</li>
                  <li>Release the bridge-aware capital reallocation engine</li>
                </ul>
              </div>
            </div>

            {/* Agent Ecosystem Growth */}
            <div className="roadmap-item flex-1 min-w-[240px] flex flex-col mt-0">
              <div className="flex items-start justify-start rounded-2xl mb-6 h-[160px]">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="25" stroke="#4169E1" strokeWidth="2" fill="none"/>
                  <circle cx="60" cy="60" r="40" stroke="#4169E1" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                  <path d="M60 20V35" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M60 85V100" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M20 60H35" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M85 60H100" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M33 33L43 43" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M87 33L77 43" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M33 87L43 77" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M87 87L77 77" stroke="#4169E1" strokeWidth="2"/>
                  <circle cx="60" cy="60" r="10" fill="#4169E1" fillOpacity="0.2"/>
                </svg>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4 font-[var(--font-aldrich)]">Agent Ecosystem Growth</h3>
              <div className="flex">
                <div className="w-0.5 bg-gradient-to-b from-[#4169E1] to-transparent mr-4 flex-shrink-0 h-full"></div>
                <ul className="space-y-3 text-gray-300">
                  <li>Launch plug-in marketplace for agent strategies</li>
                  <li>Introduce AI-enhanced strategy scoring & simulation</li>
                  <li>Incentivize open module developers with $ZRX rewards</li>
                  <li>Support private/monetizable strategy module publishing</li>
                </ul>
              </div>
            </div>

            {/* Full DAO Governance */}
            <div className="roadmap-item flex-1 min-w-[240px] flex flex-col mt-0">
              <div className="flex items-start justify-start rounded-2xl mb-6 h-[160px]">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 30C43.43 30 30 43.43 30 60C30 76.57 43.43 90 60 90C76.57 90 90 76.57 90 60C90 43.43 76.57 30 60 30Z" stroke="#4169E1" strokeWidth="2" fill="none"/>
                  <path d="M55 45L65 45L65 75L55 75L55 45Z" stroke="#4169E1" strokeWidth="2"/>
                  <path d="M45 55L75 55L75 65L45 65L45 55Z" stroke="#4169E1" strokeWidth="2"/>
                  <circle cx="60" cy="60" r="40" stroke="#4169E1" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                  <circle cx="60" cy="60" r="10" fill="#4169E1" fillOpacity="0.2"/>
                </svg>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4 font-[var(--font-aldrich)]">Full DAO Governance</h3>
              <div className="flex">
                <div className="w-0.5 bg-gradient-to-b from-[#4169E1] to-transparent mr-4 flex-shrink-0 h-full"></div>
                <ul className="space-y-3 text-gray-300">
                  <li>Open DAO proposal system with binding vote execution</li>
                  <li>Activate treasury management via governance</li>
                  <li>Launch grants and community funding programs</li>
                  <li>DAO votes on long-term emissions and value capture models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 