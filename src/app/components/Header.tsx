"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* 桌面版和iPad版Header */}
      <header
        className={
          [
            'fixed z-50 left-1/2 -translate-x-1/2',
            'transition-all duration-500 ease-in-out',
            'hidden md:block',
            scrolled
              ? 'top-6 w-[36vw] h-auto bg-white rounded-full shadow-lg py-4 px-4 flex items-center scrolled-header'
              : 'top-0 w-[70vw] bg-transparent rounded-none shadow-none py-6 h-auto',
          ].join(' ')
        }
      >
        <style jsx>{`
          @media (max-width: 1100px) {
            .scrolled-header {
              width: 85vw !important;
            }
          }
          
          @media (max-width: 767px) {
            .scrolled-header, header {
              width: 100vw !important;
              left: 0 !important;
              transform: none !important;
              padding: 0 !important;
            }
            .header-content {
              width: 100% !important;
              padding: 15px 20px !important;
              margin: 0 auto !important;
            }
            .header-socials {
              gap: 10px !important;
            }
          }
        `}</style>
        <div className="w-full flex justify-between items-center px-10 header-content">
          {/* Logo and Site Name */}
          <div className="flex items-center transition-all duration-500">
            <Image
              src="/images/logo-white.png"
              alt="Z4R0 Logo"
              width={40}
              height={40}
              className={scrolled ? 'mr-3 invert transition-all duration-500' : 'mr-3 transition-all duration-500'}
            />
            <span
              className={
                scrolled
                  ? 'text-2xl font-medium text-black font-[var(--font-aldrich)] transition-colors duration-500 ease-in-out'
                  : 'text-2xl font-medium text-white font-[var(--font-aldrich)] transition-colors duration-500 ease-in-out'
              }
            >
              Z4R0
            </span>
          </div>
          {/* Navigation and Social Links */}
          <div className="flex items-center gap-6 header-socials">
            <Link
              href="https://gitbook.io/z4r0"
              target="_blank"
              className={
                scrolled
                  ? 'bg-black text-white px-6 py-2 rounded-full font-medium transition-all duration-500 ease-in-out'
                  : 'bg-white text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all duration-500 ease-in-out'
              }
            >
              Gitbook
            </Link>
            <div className="flex items-center gap-4">
              {/* Twitter X Icon */}
              <Link href="https://x.com/Z4R0_TOKEN" target="_blank" className={scrolled ? "hover:opacity-80 transition-opacity invert" : "hover:opacity-80 transition-opacity invert"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={scrolled ? 'invert' : 'invert'}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" fill={scrolled ? 'black' : 'white'} />
                </svg>
              </Link>
              {/* Telegram Icon */}
              <Link href="https://t.me/Z4R0_Official" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/telegram.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className={scrolled ? '' : 'invert'}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 手机版Header */}
      <header className="md:hidden fixed left-0 z-50 top-0 w-[100vw] bg-transparent p-4">
        <div className="w-full flex justify-between items-center">
          {/* Logo and Site Name */}
          <div className="flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="Z4R0 Logo"
              width={28}
              height={28}
              className="mr-2"
            />
            <span className="text-lg font-medium text-white font-[var(--font-aldrich)]">
              Z4R0
            </span>
          </div>
          {/* Gitbook Button */}
          <Link
            href="https://gitbook.io/z4r0"
            target="_blank"
            className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Gitbook
          </Link>
        </div>
      </header>
    </>
  );
} 
