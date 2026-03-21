// src/components/Testimonials.tsx
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James T.",
    location: "Sydney, AU",
    text: "I've been a mouth breather my whole life without realising it. First night with NoseFlow I actually woke up without a dry mouth. Game changer.",
    rating: 5,
    tag: "Sleep",
  },
  {
    name: "Sarah M.",
    location: "Melbourne, AU",
    text: "My partner's snoring was ruining both our sleep. He's been using NoseFlow for 3 weeks and the difference is unbelievable. We both sleep better now.",
    rating: 5,
    tag: "Snoring",
  },
  {
    name: "Liam K.",
    location: "Brisbane, AU",
    text: "I use it during my runs and gym sessions. Breathing through my nose used to feel impossible during cardio — now it's effortless. Love the soft silicone feel.",
    rating: 5,
    tag: "Performance",
  },
  {
    name: "Emily R.",
    location: "Perth, AU",
    text: "So much better than those sticky nasal strips. Reusable, comfortable, and actually works. I wear mine every single night.",
    rating: 5,
    tag: "Daily Use",
  },
  {
    name: "Daniel W.",
    location: "Adelaide, AU",
    text: "Skeptical at first but honestly blown away. I can feel the airflow difference immediately when I put it in. Falling asleep faster too.",
    rating: 5,
    tag: "Airflow",
  },
  {
    name: "Mia L.",
    location: "Gold Coast, AU",
    text: "Got this for my congestion issues during allergy season. It doesn't cure allergies but the extra airflow is noticeable and helps me breathe more comfortably.",
    rating: 4,
    tag: "Congestion",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={
            i < count
              ? "fill-amber-400 text-amber-400"
              : "fill-neutral-200 text-neutral-200"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-12 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold text-primary-500 uppercase tracking-widest mb-3 font-[family-name:var(--font-body)]">
            Reviews
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-neutral-900">
            Hear From Real <span className="text-primary-500">Breathers</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200/60"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <Stars count={t.rating} />
                <span className="text-[10px] sm:text-xs font-semibold text-primary-500 bg-primary-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-[family-name:var(--font-body)]">
                  {t.tag}
                </span>
              </div>
              <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-[family-name:var(--font-body)]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-neutral-900 font-[family-name:var(--font-heading)]">
                  {t.name}
                </p>
                <p className="text-[10px] sm:text-xs text-neutral-500 font-[family-name:var(--font-body)]">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
