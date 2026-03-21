// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-neutral-900 text-white text-center text-sm py-2 px-4 font-[family-name:var(--font-body)]">
        Free shipping on all orders over $25
      </div>

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Left spacer — keeps logo centered */}
            <div className="w-[120px]" />

            {/* Centered logo */}
            <a href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image
                src="/logo_header_transparent_background.png"
                alt="NoseFlow"
                width={280}
                height={80}
                className="h-16 sm:h-20 w-auto"
                priority
              />
            </a>

            {/* Right — Shop Now button */}
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
            >
              <ShoppingBag size={16} />
              <span className="hidden sm:inline">Shop Now</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
