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
    <header
      className={
        [
          'fixed z-50 left-1/2 -translate-x-1/2',
          'transition-all duration-500 ease-in-out',
          scrolled
            ? 'top-6 w-[36vw] bg-white rounded-full shadow-lg py-0 px-0 h-[64px] flex items-center'
            : 'top-0 w-[70vw] bg-transparent rounded-none shadow-none py-6 h-auto',
        ].join(' ')
      }
    >
      <div className="w-full flex justify-between items-center px-10">
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
        <div className="flex items-center gap-6">
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
            <Link href="https://twitter.com/z4r0_protocol" target="_blank" className={scrolled ? "hover:opacity-80 transition-opacity invert" : "hover:opacity-80 transition-opacity invert"}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={scrolled ? 'invert' : 'invert'}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" fill={scrolled ? 'black' : 'white'} />
              </svg>
            </Link>
            {/* Telegram Icon */}
            <Link href="https://t.me/z4r0_protocol" target="_blank" className="hover:opacity-80 transition-opacity">
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
  );
} 