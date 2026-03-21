// src/components/ScienceSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Moon, Activity, Brain, Zap } from "lucide-react";

const tabs = [
  {
    id: "nasal-breathing",
    label: "Nasal Breathing",
    icon: Wind,
    title: "WHY NASAL BREATHING MATTERS",
    body: "Your nose is designed to be your primary breathing organ. It filters, warms, and humidifies air before it reaches your lungs. Nasal breathing produces nitric oxide, which improves oxygen absorption by up to 18%. Many people unknowingly breathe through their mouth due to a narrow nasal valve — the narrowest point of the airway. NoseFlow gently expands this valve, restoring natural nasal airflow.",
  },
  {
    id: "sleep",
    label: "Sleep Quality",
    icon: Moon,
    title: "BETTER SLEEP STARTS WITH YOUR NOSE",
    body: "Mouth breathing during sleep is linked to snoring, dry mouth, disrupted sleep cycles, and reduced oxygen saturation. By opening the nasal passages, NoseFlow helps maintain consistent nasal breathing throughout the night. Users report falling asleep faster, snoring less, and waking up feeling more rested — without drugs, strips, or machinery.",
  },
  {
    id: "snoring",
    label: "Snoring",
    icon: Activity,
    title: "REDUCE SNORING AT THE SOURCE",
    body: "Snoring often starts at the nasal valve. When airflow is restricted through the nose, you compensate by opening your mouth — and the soft tissues in the throat vibrate, creating the snoring sound. NoseFlow addresses this at the source by widening the nasal passage, reducing the need for mouth breathing and minimising snoring naturally.",
  },
  {
    id: "performance",
    label: "Performance",
    icon: Zap,
    title: "BREATHE BETTER, PERFORM BETTER",
    body: "Athletes and coaches increasingly focus on nasal breathing for performance gains. Breathing through the nose during exercise maintains optimal CO₂ and O₂ balance, improves endurance, and reduces perceived exertion. NoseFlow is used by runners, cyclists, gym-goers, and anyone who wants to maximise oxygen efficiency during training.",
  },
  {
    id: "mouth-breathing",
    label: "Mouth Breathing",
    icon: Brain,
    title: "THE HIDDEN COST OF MOUTH BREATHING",
    body: "Chronic mouth breathing is linked to poor sleep quality, increased anxiety, dental problems, facial structure changes, and reduced cognitive performance. Many people don't realise they're mouth breathers — especially during sleep. NoseFlow offers a simple, non-invasive way to encourage nasal breathing and break the mouth-breathing habit.",
  },
];

export default function ScienceSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="science" className="py-20 sm:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-3 font-[family-name:var(--font-body)]">
            The Science
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-800 text-neutral-900">
            Backed by <span className="text-primary-500">Evidence</span>
          </h2>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all font-[family-name:var(--font-body)] ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-lg"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:text-neutral-800"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left — Image placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 flex items-center justify-center">
              <div className="text-center px-8">
                <active.icon size={48} className="mx-auto mb-3 text-primary-300" />
                <p className="text-sm font-semibold text-neutral-400 font-[family-name:var(--font-heading)]">
                  Educational Visual
                </p>
                <p className="text-xs text-neutral-400 mt-1 font-[family-name:var(--font-body)]">
                  Add supporting image or diagram
                </p>
              </div>
            </div>

            {/* Right — Text content */}
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-700 text-neutral-900 mb-4">
                {active.title}
              </h3>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-[family-name:var(--font-body)]">
                {active.body}
              </p>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 mt-8 bg-neutral-900 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-neutral-800 transition-colors"
              >
                Try NoseFlow
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
