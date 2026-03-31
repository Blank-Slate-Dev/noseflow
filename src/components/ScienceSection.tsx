// src/components/ScienceSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Wind, Moon, Activity, Brain, Zap } from "lucide-react";

const tabs = [
  {
    id: "nasal-breathing",
    label: "Nasal Breathing",
    icon: Wind,
    title: "WHY NASAL BREATHING MATTERS",
    body: "Your nose is designed to be your primary breathing organ. It filters, warms, and humidifies air before it reaches your lungs. Nasal breathing produces nitric oxide, which improves oxygen absorption by up to 18%. Many people unknowingly breathe through their mouth due to a narrow nasal valve — the narrowest point of the airway. NoseFlow gently expands this valve, restoring natural nasal airflow.",
    image: "/nasal_breathing.png",
    alt: "Illustration showing airflow through nasal passages during nasal breathing",
  },
  {
    id: "sleep",
    label: "Sleep Quality",
    icon: Moon,
    title: "BETTER SLEEP STARTS WITH YOUR NOSE",
    body: "Mouth breathing during sleep is linked to snoring, dry mouth, disrupted sleep cycles, and reduced oxygen saturation. By opening the nasal passages, NoseFlow helps maintain consistent nasal breathing throughout the night. Users report falling asleep faster, snoring less, and waking up feeling more rested — without drugs, strips, or machinery.",
    image: "/sleep_quality.png",
    alt: "Person sleeping peacefully with improved nasal breathing and sleep quality",
  },
  {
    id: "snoring",
    label: "Snoring",
    icon: Activity,
    title: "REDUCE SNORING AT THE SOURCE",
    body: "Snoring often starts at the nasal valve. When airflow is restricted through the nose, you compensate by opening your mouth — and the soft tissues in the throat vibrate, creating the snoring sound. NoseFlow addresses this at the source by widening the nasal passage, reducing the need for mouth breathing and minimising snoring naturally.",
    image: "/snoring.png",
    alt: "Diagram showing how nasal dilators reduce snoring by opening the nasal valve",
  },
  {
    id: "performance",
    label: "Performance",
    icon: Zap,
    title: "BREATHE BETTER, PERFORM BETTER",
    body: "Athletes and coaches increasingly focus on nasal breathing for performance gains. Breathing through the nose during exercise maintains optimal CO₂ and O₂ balance, improves endurance, and reduces perceived exertion. NoseFlow is used by runners, cyclists, gym-goers, and anyone who wants to maximise oxygen efficiency during training.",
    image: "/performance.png",
    alt: "Athlete performing with improved breathing efficiency using a nasal dilator",
  },
  {
    id: "mouth-breathing",
    label: "Mouth Breathing",
    icon: Brain,
    title: "THE HIDDEN COST OF MOUTH BREATHING",
    body: "Chronic mouth breathing is linked to poor sleep quality, increased anxiety, dental problems, facial structure changes, and reduced cognitive performance. Many people don't realise they're mouth breathers — especially during sleep. NoseFlow offers a simple, non-invasive way to encourage nasal breathing and break the mouth-breathing habit.",
    image: "/mouth_breathing.png",
    alt: "Comparison showing the effects of mouth breathing versus nasal breathing on health",
  },
];

export default function ScienceSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="science" className="py-12 sm:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-primary-500 uppercase tracking-widest mb-3 font-[family-name:var(--font-body)]">
            The Science
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-neutral-900">
            Backed by <span className="text-primary-500">Evidence</span>
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all font-[family-name:var(--font-body)] ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-lg"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:text-neutral-800"
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
          {/* Left — Image */}
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 overflow-hidden relative">
            <Image
              src={active.image}
              alt={active.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — Text content */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-3xl font-700 text-neutral-900 mb-3 sm:mb-4">
              {active.title}
            </h3>

            <p className="text-sm sm:text-lg text-neutral-600 leading-relaxed font-[family-name:var(--font-body)]">
              {active.body}
            </p>

            <a
              href="#shop"
              className="inline-flex items-center gap-2 mt-6 sm:mt-8 bg-neutral-900 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-neutral-800 transition-colors"
            >
              Try NoseFlow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
