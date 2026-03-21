// src/components/ProductShowcase.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check, Wind } from "lucide-react";

const sizes = [
  {
    id: "small",
    label: "Small",
    description: "Narrower nasal passages",
  },
  {
    id: "medium",
    label: "Medium",
    description: "Most common fit",
    popular: true,
  },
  {
    id: "large",
    label: "Large",
    description: "Wider nasal passages",
  },
];

const features = [
  "Medical-grade soft silicone",
  "Comfortable for all-night wear",
  "Reusable — wash and reuse daily",
  "Includes storage case",
  "3 sizes for perfect fit",
  "Instant airflow improvement",
];

export default function ProductShowcase() {
  const [selectedSize, setSelectedSize] = useState("medium");

  return (
    <section id="shop" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-800 text-neutral-900 mb-4">
            One Product. <span className="text-primary-500">Better Breathing.</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Our silicone nasal dilators gently expand the nasal valve — the
            narrowest part of your airway — for immediate, comfortable airflow
            improvement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Product image area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 flex items-center justify-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full bg-primary-200/20 blur-3xl" />

              {/* Placeholder */}
              <div className="relative text-center px-8">
                <Wind size={64} className="mx-auto mb-4 text-primary-300" />
                <p className="text-base font-semibold text-neutral-500 font-[family-name:var(--font-heading)]">
                  Product Photography
                </p>
                <p className="text-sm text-neutral-400 mt-1 font-[family-name:var(--font-body)]">
                  Replace with high-res product image
                </p>
              </div>

              {/* Floating size badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSize}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full px-4 py-2 shadow-sm"
                >
                  <span className="text-sm font-bold text-neutral-900 font-[family-name:var(--font-heading)]">
                    Size: {selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right — Product info & purchase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-2 font-[family-name:var(--font-body)]">
              NoseFlow Nasal Dilator Kit
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-800 text-neutral-900 mb-2">
              Silicone Nasal Dilator
            </h3>
            <p className="text-2xl font-700 text-neutral-900 mb-6 font-[family-name:var(--font-heading)]">
              $29.95 <span className="text-base font-400 text-neutral-400">AUD</span>
            </p>

            <p className="text-neutral-600 leading-relaxed mb-8 font-[family-name:var(--font-body)]">
              Each kit includes all 3 sizes (S, M, L) so you can find your
              perfect fit. Made from ultra-soft, medical-grade silicone that
              moulds comfortably inside your nose — you&apos;ll barely feel it,
              but you&apos;ll immediately breathe the difference.
            </p>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-neutral-700 mb-3 font-[family-name:var(--font-body)]">
                Select your primary size:
              </p>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`relative flex-1 p-4 rounded-xl border-2 text-center transition-all ${
                      selectedSize === size.id
                        ? "border-primary-500 bg-primary-50"
                        : "border-neutral-200 bg-white hover:border-neutral-300"
                    }`}
                  >
                    {size.popular && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                    <p className="font-[family-name:var(--font-heading)] font-700 text-neutral-900">
                      {size.label}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5 font-[family-name:var(--font-body)]">
                      {size.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-neutral-800 transition-colors mb-6">
              <ShoppingBag size={18} />
              Add to Cart — $29.95
            </button>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="flex items-start gap-2 text-sm text-neutral-600 font-[family-name:var(--font-body)]"
                >
                  <Check
                    size={16}
                    className="text-accent-500 shrink-0 mt-0.5"
                  />
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
