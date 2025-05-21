"use client";
import { useEffect, useState } from 'react';
import { BioRhyme } from 'next/font/google';

const bioRhyme = BioRhyme({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ComingSoonModal() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      // Remove from DOM after fade completes
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center
      transition-opacity duration-500 ease-in-out
      ${isFading ? 'opacity-0' : 'opacity-100'}
      bg-[#5C2E2E]/95
    `}>
      <div className={`
        transform transition-all duration-1000 ease-in-out
        ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}>
        <div className="text-center">
          <h1 className={`
            text-6xl md:text-8xl font-bold text-[#D4A437]
            animate-bounce
            ${bioRhyme.className}
          `}>
            COMING SOON
          </h1>
          <p className="mt-4 text-xl text-white animate-pulse">
            Moon Valley Meadery is brewing something special...
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-16 border-4 border-[#D4A437] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 