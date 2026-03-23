// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { ArrowRight, Wind } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[80vh] sm:min-h-[90vh] flex items-center">
      {/* Floating airflow circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-primary-200/20 blur-3xl animate-float-slow" />
        <div className="absolute top-[40%] right-[5%] w-52 sm:w-80 h-52 sm:h-80 rounded-full bg-accent-200/20 blur-3xl animate-float-gentle" />
        <div className="absolute bottom-[10%] left-[30%] w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-primary-100/30 blur-2xl animate-float-slow" />

        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <path
            d="M0 400 Q300 350 600 400 Q900 450 1200 400"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-500"
          />
          <path
            d="M0 300 Q300 250 600 300 Q900 350 1200 300"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary-400"
          />
          <path
            d="M0 500 Q300 450 600 500 Q900 550 1200 500"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent-400"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6">
              <Wind size={14} />
              Breathing Optimisation
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl lg:text-7xl font-800 leading-[0.95] tracking-tight text-neutral-900 mb-4 sm:mb-6">
              Breathe
              <br />
              <span className="text-primary-500">Better.</span>
              <br />
              Naturally.
            </h1>

            <p className="text-base sm:text-xl text-neutral-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8 font-[family-name:var(--font-body)]">
              Medical-grade silicone nasal dilators that gently open your nasal
              passages — improving airflow, sleep, and performance. No drugs. No
              strips. Just better breathing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:bg-neutral-800 transition-colors"
              >
                Shop NoseFlow
                <ArrowRight size={18} />
              </a>

              <a
                href="#science"
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-300 text-neutral-700 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:border-neutral-400 transition-colors"
              >
                Learn the Science
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-2 mt-6 sm:mt-10 text-xs sm:text-sm text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                Medical-grade silicone
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                {"Reusable & washable"}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                2 sizes available
              </span>
            </div>
          </div>

          {/* Right — Product image */}
          <div className="relative flex items-center justify-center mt-4 lg:mt-0">
            <div className="relative w-56 h-56 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200/40 to-accent-200/40 blur-2xl" />

              <Image
                src="/Clear_Nasal_Dilator_Product_Image.png"
                alt="NoseFlow Clear Nasal Dilator"
                width={480}
                height={480}
                className="relative w-full h-full object-contain drop-shadow-lg"
                priority
              />

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-accent-100 border border-accent-200/50 flex items-center justify-center animate-float-slow">
                <span className="text-[10px] sm:text-xs font-bold text-accent-600">
                  Drug
                  <br />
                  Free
                </span>
              </div>

              <div className="absolute -bottom-1 -left-3 sm:-bottom-2 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-primary-50 border border-primary-200/50 flex items-center justify-center animate-float-gentle">
                <span className="text-[10px] sm:text-xs font-bold text-primary-600 text-center">
                  Instant
                  <br />
                  Airflow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
