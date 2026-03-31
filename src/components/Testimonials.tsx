// src/components/Testimonials.tsx
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

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
