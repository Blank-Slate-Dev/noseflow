// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wind } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
      {/* Floating airflow circles — decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[15%] left-[8%] w-64 h-64 rounded-full bg-primary-200/20 blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] right-[5%] w-80 h-80 rounded-full bg-accent-200/20 blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[30%] w-48 h-48 rounded-full bg-primary-100/30 blur-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle airflow lines */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <Wind size={14} />
              Breathing Optimisation
            </motion.div>

            <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-800 leading-[0.95] tracking-tight text-neutral-900 mb-6">
              Breathe
              <br />
              <span className="text-primary-500">Better.</span>
              <br />
              Naturally.
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 max-w-lg leading-relaxed mb-8 font-[family-name:var(--font-body)]">
              Medical-grade silicone nasal dilators that gently open your nasal
              passages — improving airflow, sleep, and performance. No drugs. No
              strips. Just better breathing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-neutral-800 transition-colors"
              >
                Shop NoseFlow
                <ArrowRight size={18} />
              </a>
              <a
                href="#science"
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-300 text-neutral-700 font-semibold px-8 py-4 rounded-full text-base hover:border-neutral-400 transition-colors"
              >
                Learn the Science
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-10 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                Medical-grade silicone
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                Reusable &amp; washable
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                3 sizes included
              </span>
            </div>
          </motion.div>

          {/* Right — Product visual placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Placeholder product area — will be replaced with actual product photography */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
              {/* Glow ring behind product */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200/40 to-accent-200/40 blur-2xl" />

              {/* Product placeholder circle */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200/30 flex items-center justify-center">
                <div className="text-center px-8">
                  <Wind size={48} className="mx-auto mb-4 text-primary-400" />
                  <p className="text-sm font-semibold text-neutral-500 font-[family-name:var(--font-heading)]">
                    Product Image
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Replace with product photography
                  </p>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent-100 border border-accent-200/50 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs font-bold text-accent-600">
                  Drug
                  <br />
                  Free
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-6 w-24 h-24 rounded-full bg-primary-50 border border-primary-200/50 flex items-center justify-center"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-xs font-bold text-primary-600 text-center">
                  Instant
                  <br />
                  Airflow
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
