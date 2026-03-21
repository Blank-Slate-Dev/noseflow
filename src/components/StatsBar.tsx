// src/components/StatsBar.tsx

const stats = [
  { value: "2", label: "Sizes Available", sublabel: "M / L" },
  { value: "100%", label: "Medical-Grade", sublabel: "Soft Silicone" },
  { value: "0", label: "Drugs or Chemicals", sublabel: "Natural Support" },
  { value: "∞", label: "Reusable", sublabel: "Wash & Reuse" },
];

export default function StatsBar() {
  return (
    <section className="py-16 sm:py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-8 rounded-2xl bg-white border border-neutral-200/60 shadow-sm"
            >
              <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-primary-500 mb-2">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm font-700 text-neutral-900 uppercase tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="text-[10px] sm:text-xs text-neutral-500 font-[family-name:var(--font-body)]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
