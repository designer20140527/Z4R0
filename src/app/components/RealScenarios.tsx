"use client";

import Image from 'next/image';
import { CardSpotlight } from '@/components/ui/card-spotlight';

export default function RealScenarios() {
  return (
    <section className="w-full bg-[#010613] py-16">
      <div className="w-[70vw] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Image
            src="/images/logo-white.png"
            alt="Z4R0 Logo"
            width={40}
            height={40}
          />
          <h2 className="text-white text-2xl font-medium font-[var(--font-aldrich)]">
            How does Z4R0 perform in real scenarios?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DeFi Arbitrage */}
          <CardSpotlight 
            className="h-[500px] rounded-3xl" 
            radius={600}
            color="rgba(65, 105, 225, 0.2)"
            style={{background: 'url(/images/color.png) bottom left / cover no-repeat'}}
          >
            <div className="flex flex-col h-full">
              <div className="flex-grow mb-2 h-[320px] flex items-center justify-center">
                <Image
                  src="/images/image-1.png"
                  alt="DeFi Arbitrage"
                  width={500}
                  height={320}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
              <div className="mt-auto relative z-10 h-[160px] flex flex-col justify-end">
                <div className="absolute inset-0 transition-opacity duration-500 group-hover/spotlight:opacity-0 opacity-100 z-20 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3 font-[var(--font-aldrich)]">DeFi Arbitrage</h3>
                  <p className="text-gray-300">
                    When token prices differ between DEXs on different chains, Z4R0 agents detect price gaps and execute a profit path before the window closes.
                  </p>
                </div>
                <div className="absolute inset-0 transition-opacity duration-500 group-hover/spotlight:opacity-100 opacity-0 z-30 flex flex-col justify-end">
                  <ul className="text-base text-gray-300 space-y-1">
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Monitor price spreads across Uniswap, Curve, SushiSwap, and others</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Auto-calculate net profit after gas, fees, and slippage</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Build the transaction route across bridges and chains</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Execute instantly with risk guards (slippage, gas cap, fallback path)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardSpotlight>

          {/* Yield Farming Rebalancer */}
          <CardSpotlight 
            className="h-[500px] rounded-3xl" 
            radius={600}
            color="rgba(65, 105, 225, 0.2)"
            style={{background: 'url(/images/color.png) bottom left / cover no-repeat'}}
          >
            <div className="flex flex-col h-full">
              <div className="flex-grow mb-2 h-[320px] flex items-center justify-center">
                <Image
                  src="/images/image-2.png"
                  alt="Yield Farming Rebalancer"
                  width={500}
                  height={320}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
              <div className="mt-auto relative z-10 h-[160px] flex flex-col justify-end">
                <div className="absolute inset-0 transition-opacity duration-500 group-hover/spotlight:opacity-0 opacity-100 z-20 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3 font-[var(--font-aldrich)]">Yield Farming Rebalancer</h3>
                  <p className="text-gray-300">
                    Liquidity mining rewards change fast. Z4R0 helps users exit underperforming pools and rotate into better ones, based on real-time APY and incentives.
                  </p>
                </div>
                <div className="absolute inset-0 transition-opacity duration-500 group-hover/spotlight:opacity-100 opacity-0 z-30 flex flex-col justify-end">
                  <ul className="text-base text-gray-300 space-y-1">
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Track pool APYs across Convex, Velodrome, Ramses, etc.</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Watch for emission changes and reward dilution</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Calculate RO,I including impermanent loss</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Reallocate capital while preserving strategy rules</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardSpotlight>

          {/* Staking Strategy Switcher */}
          <CardSpotlight 
            className="h-[500px] rounded-3xl" 
            radius={600}
            color="rgba(65, 105, 225, 0.2)"
            style={{background: 'url(/images/color.png) bottom left / cover no-repeat'}}
          >
            <div className="flex flex-col h-full">
              <div className="flex-grow mb-2 h-[320px] flex items-center justify-center">
                <Image
                  src="/images/image-3.png"
                  alt="Staking Strategy Switcher"
                  width={500}
                  height={320}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
              <div className="mt-auto relative z-10 h-[160px] flex flex-col justify-end">
                <div className="absolute inset-0 transition-opacity duration-500 group-hover/spotlight:opacity-0 opacity-100 z-20 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3 font-[var(--font-aldrich)]">Staking Strategy Switcher</h3>
                  <p className="text-gray-300">
                    The best staking yields don't last forever. Z4R0 agents migrate assets to protocols like Lido, Pendle, and EigenLayer for optimal returns.
                  </p>
                </div>
                <div className="absolute inset-0 transition-opacity duration-500 group-hover/spotlight:opacity-100 opacity-0 z-30 flex flex-col justify-end">
                  <ul className="text-base text-gray-300 space-y-1">
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Compare APR/APY across ETH, LSD, and LRT products</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Factor in lock time, queue delays, and slash risk</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Respond to EigenLayer yield spikes or LST launches</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Auto-shift staking if net yield improves</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardSpotlight>

          {/* Sentiment-Driven Exposure */}
          <CardSpotlight 
            className="h-[500px] rounded-3xl" 
            radius={600}
            color="rgba(65, 105, 225, 0.2)"
            style={{background: 'url(/images/color.png) bottom left / cover no-repeat'}}
          >
            <div className="flex flex-col h-full">
              <div className="flex-grow mb-2 h-[320px] flex items-center justify-center">
                <Image
                  src="/images/image-4.png"
                  alt="Sentiment-Driven Exposure"
                  width={500}
                  height={320}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
              <div className="mt-auto relative z-10 h-[160px] flex flex-col justify-end">
                <div className="absolute inset-0 transition-opacity duration-500 group-hover/spotlight:opacity-0 opacity-100 z-20 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3 font-[var(--font-aldrich)]">Sentiment-Driven Exposure</h3>
                  <p className="text-gray-300">
                    Z4R0 scans social signals to spot early trends — acting before on-chain metrics react.
                  </p>
                </div>
                <div className="absolute inset-0 transition-opacity duration-500 group-hover/spotlight:opacity-100 opacity-0 z-30 flex flex-col justify-end">
                  <ul className="text-base text-gray-300 space-y-1">
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Track trending token mentions on Twitter, Discord</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Combine with whale behavior and cross-chain volume</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Filter for strong signals via sentiment algorithms</li>
                    <li><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 align-middle"></span>Adjust exposure to catch narratives like AI, LSD, RWA early</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
} 