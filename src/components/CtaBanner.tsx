// src/components/CtaBanner.tsx
import { ArrowRight, Wind } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-12 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path
            d="M0 300 Q300 200 600 300 Q900 400 1200 300"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M0 250 Q300 180 600 250 Q900 320 1200 250"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M0 350 Q300 280 600 350 Q900 420 1200 350"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Wind size={32} className="mx-auto mb-4 sm:mb-6 text-primary-400" />

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl lg:text-6xl font-800 text-white leading-tight mb-4 sm:mb-6">
          Try NoseFlow —{" "}
          <span className="text-primary-400">Free Shipping Over $25</span>
        </h2>

        <p className="text-sm sm:text-lg text-neutral-400 max-w-xl mx-auto mb-8 sm:mb-10 font-[family-name:var(--font-body)]">
          Join thousands of Australians who have switched to nasal breathing
          with NoseFlow. Free shipping on orders over $25.
        </p>

        <a
          href="#shop"
          className="inline-flex items-center gap-2 bg-white text-neutral-900 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:bg-neutral-100 transition-colors"
        >
          Shop NoseFlow
          <ArrowRight size={18} />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 mt-8 sm:mt-10 text-xs sm:text-sm text-neutral-500 font-[family-name:var(--font-body)]">
          <span>Free shipping $25+</span>
          <span className="text-neutral-700">✦</span>
          <span>30-day returns</span>
          <span className="text-neutral-700">✦</span>
          <span>Australian owned</span>
        </div>
      </div>
    </section>
  );
}
