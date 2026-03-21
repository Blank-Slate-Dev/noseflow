// src/components/StatsBar.tsx
"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Sizes Included", sublabel: "S / M / L" },
  { value: "100%", label: "Medical-Grade", sublabel: "Soft Silicone" },
  { value: "0", label: "Drugs or Chemicals", sublabel: "Natural Support" },
  { value: "∞", label: "Reusable", sublabel: "Wash & Reuse" },
];

export default function StatsBar() {
  return (
    <section className="py-16 sm:py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/60 shadow-sm"
            >
              <p className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-800 text-primary-500 mb-2">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-heading)] text-sm font-700 text-neutral-900 uppercase tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-neutral-500 font-[family-name:var(--font-body)]">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
