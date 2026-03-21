// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-neutral-900 text-white text-center text-xs sm:text-sm py-2 px-4 font-[family-name:var(--font-body)]">
        Free shipping on all orders over $25
      </div>

      <nav
        className={`z-50 border-b transition-all duration-500 ease-out ${
          scrolled
            ? "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-neutral-200/60 shadow-sm"
            : "relative bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-out ${
              scrolled ? "h-14 sm:h-[76px]" : "h-16 sm:h-24"
            }`}
          >
            <div className="w-10 sm:w-[120px] shrink-0" />

            <a href="/" className="flex-1 flex justify-center">
              <Image
                src="/logo_header_transparent_background.png"
                alt="NoseFlow"
                width={280}
                height={80}
                className={`w-auto transition-all duration-500 ease-out ${
                  scrolled
                    ? "h-[45px] sm:h-16 max-w-[220px]"
                    : "h-14 sm:h-20 max-w-[250px]"
                }`}
                priority
              />
            </a>

            <div className="w-10 sm:w-[120px] shrink-0 flex justify-end">
              <a
                href="#shop"
                className={`inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-all duration-500 ease-out ${
                  scrolled
                    ? "px-4 sm:px-4.5 py-2 text-xs sm:text-sm"
                    : "px-5 py-2.5 text-xs sm:text-sm"
                }`}
              >
                <ShoppingBag size={16} />
                <span className="hidden sm:inline">Shop Now</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {scrolled && <div className="h-14 sm:h-[76px]" />}
    </>
  );
}
