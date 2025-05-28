"use client";

import Image from 'next/image';
import { CardSpotlight } from '@/components/ui/card-spotlight';

export default function Tokenomics() {
  return (
    <section className="w-full bg-[#010613] py-20">
      <div className="w-[70vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Token Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Z4R0 Logo"
                width={40}
                height={40}
              />
              <h2 className="text-white text-3xl font-medium font-[var(--font-aldrich)]">
                Tokenomics
              </h2>
            </div>
            
            <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#4169E1] to-[#010613] text-7xl font-bold mb-6 font-[var(--font-aldrich)]">
              $ZRX
            </h3>
            
            <div className="h-px bg-gradient-to-r from-blue-500 to-transparent w-full mb-8"></div>
            
            <h4 className="text-white text-2xl font-bold mb-5 font-[var(--font-aldrich)]">
              Utility
            </h4>
            
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Stake to deploy or operate agents
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Vote on DAO proposals
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Unlock premium modules
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Earn for contributions (Submitting strategies, datasets, plug-ins, or participating, etc)
              </li>
            </ul>
          </div>
          
          {/* Right Side - Allocation Card */}
          <div className="flex items-center justify-center">
            <CardSpotlight 
              className="bg-[#080C20] border border-[#1A2550] rounded-3xl p-8 w-full" 
              radius={400}
              color="rgba(65, 105, 225, 0.1)"
              style={{border: '1px solid #1A2550'}}
            >
              <h3 className="text-white text-2xl font-bold mb-8 font-[var(--font-aldrich)]">
                Allocation
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300">Liquidity</span>
                  <span className="text-white font-bold">60%</span>
                </div>
                <div className="w-full h-1.5 bg-[#172554] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '60%' }}></div>
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300">Community Incentives</span>
                  <span className="text-white font-bold">15%</span>
                </div>
                <div className="w-full h-1.5 bg-[#172554] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" style={{ width: '15%' }}></div>
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300">DAO Treasury</span>
                  <span className="text-white font-bold">10%</span>
                </div>
                <div className="w-full h-1.5 bg-[#172554] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full" style={{ width: '10%' }}></div>
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300">Staking</span>
                  <span className="text-white font-bold">5%</span>
                </div>
                <div className="w-full h-1.5 bg-[#172554] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-700 to-blue-900 rounded-full" style={{ width: '5%' }}></div>
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300">Team & Advisors</span>
                  <span className="text-white font-bold">5%</span>
                </div>
                <div className="w-full h-1.5 bg-[#172554] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-800 to-blue-950 rounded-full" style={{ width: '5%' }}></div>
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300">Exploring & Marketing</span>
                  <span className="text-white font-bold">5%</span>
                </div>
                <div className="w-full h-1.5 bg-[#172554] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-900 to-indigo-950 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
} 