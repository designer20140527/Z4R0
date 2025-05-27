import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-6 z-50">
      <div className="container flex justify-between items-center">
        {/* Logo and Site Name */}
        <div className="flex items-center">
          <Image 
            src="/images/logo-white.png" 
            alt="Z4R0 Logo" 
            width={40} 
            height={40} 
            className="mr-3"
          />
          <span className="text-2xl font-bold text-white">Z4R0</span>
        </div>
        
        {/* Navigation and Social Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="https://gitbook.io/z4r0" 
            target="_blank" 
            className="bg-white text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Gitbook
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Twitter X Icon */}
            <Link href="https://twitter.com/z4r0_protocol" target="_blank" className="hover:opacity-80 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" fill="white" />
              </svg>
            </Link>
            
            {/* Telegram Icon (White) */}
            <Link href="https://t.me/z4r0_protocol" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/telegram.svg" 
                alt="Telegram" 
                width={24} 
                height={24}
                className="invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 