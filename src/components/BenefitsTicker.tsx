// src/components/BenefitsTicker.tsx
"use client";

import { Wind, Moon, Activity, Shield, Zap, Heart } from "lucide-react";

const benefits = [
  { icon: Wind, text: "IMPROVED NASAL AIRFLOW" },
  { icon: Moon, text: "BETTER SLEEP QUALITY" },
  { icon: Activity, text: "REDUCED SNORING" },
  { icon: Zap, text: "ENHANCED ATHLETIC PERFORMANCE" },
  { icon: Shield, text: "MEDICAL-GRADE SILICONE" },
  { icon: Heart, text: "DRUG-FREE BREATHING SUPPORT" },
];

export default function BenefitsTicker() {
  /* Duplicate the array so the second copy seamlessly follows the first */
  const doubled = [...benefits, ...benefits];

  return (
    <div className="bg-neutral-900 text-white py-4 overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide mx-8 font-[family-name:var(--font-body)]"
            >
              <Icon size={16} className="text-accent-400 shrink-0" />
              {item.text}
              <span className="text-neutral-600 ml-6">✦</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
