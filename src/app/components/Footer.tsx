"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Dock, DockIcon } from '@/components/ui/dock';

export default function Footer() {
  return (
    <footer className="w-full bg-[#010613] py-16">
      <div className="w-[70vw] mx-auto flex flex-col items-center">
        {/* Logo and Website Name */}
        <div className="flex items-center gap-4 mb-10">
          <Image
            src="/images/logo-white.png"
            alt="Z4R0 Logo"
            width={60}
            height={60}
          />
          <span className="text-4xl font-medium text-white font-[var(--font-aldrich)]">
            Z4R0
          </span>
        </div>
        
        {/* Social Icons */}
        <div className="mb-12 h-[60px] flex items-center overflow-visible">
          <Dock iconSize={40} iconMagnification={60} iconDistance={100} className="h-[60px]">
            {/* Twitter X Icon */}
            <DockIcon className="bg-[#101935] rounded-xl hover:bg-[#172043] transition-colors">
              <Link href="https://x.com/Z4R0_TOKEN" target="_blank" className="flex items-center justify-center w-full h-full">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" fill="white" />
                </svg>
              </Link>
            </DockIcon>
            
            {/* Telegram Icon */}
            <DockIcon className="bg-[#101935] rounded-xl hover:bg-[#172043] transition-colors">
              <Link href="https://t.me/Z4R0_Official" target="_blank" className="flex items-center justify-center w-full h-full">
                <div className="w-1/2 h-1/2 relative">
                  <Image
                    src="/images/telegram.svg"
                    alt="Telegram"
                    fill
                    className="invert object-contain"
                  />
                </div>
              </Link>
            </DockIcon>
            
            {/* Dextools Icon */}
            <DockIcon className="bg-[#101935] rounded-xl hover:bg-[#172043] transition-colors">
              <Link href="https://www.dextools.io/" target="_blank" className="flex items-center justify-center w-full h-full">
                <div className="w-1/2 h-1/2 relative">
                  <Image
                    src="/images/dextools.svg"
                    alt="Dextools"
                    fill
                    className="invert object-contain"
                  />
                </div>
              </Link>
            </DockIcon>
            
            {/* Dexscreener Icon */}
            <DockIcon className="bg-[#101935] rounded-xl hover:bg-[#172043] transition-colors">
              <Link href="https://dexscreener.com/" target="_blank" className="flex items-center justify-center w-full h-full">
                <div className="w-1/2 h-1/2 relative">
                  <Image
                    src="/images/dexscreener.svg"
                    alt="Dexscreener"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </DockIcon>
          </Dock>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-8 mb-12">
          <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#token" className="text-gray-400 hover:text-white transition-colors">
            Tokenomics
          </Link>
          <Link href="#roadmap" className="text-gray-400 hover:text-white transition-colors">
            Roadmap
          </Link>
        </div>
        
        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Z4R0. All rights reserved
        </div>
      </div>
    </footer>
  );
} 