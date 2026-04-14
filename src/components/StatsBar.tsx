// src/components/StatsBar.tsx

const stats = [
  { value: "2", label: "Sizes Available", sublabel: "M / L", isSymbol: false },
  { value: "100%", label: "Medical-Grade", sublabel: "Soft Silicone", isSymbol: false },
  { value: "0", label: "Drugs or Chemicals", sublabel: "Natural Support", isSymbol: false },
  { value: "∞", label: "Reusable", sublabel: "Wash & Reuse", isSymbol: true },
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
              <p
                className="text-3xl sm:text-5xl font-extrabold text-primary-500 mb-2 leading-none"
                style={{
                  fontFamily: stat.isSymbol
                    ? '"Segoe UI Symbol", "Apple Symbols", "Arial Unicode MS", system-ui, sans-serif'
                    : "var(--font-heading)",
                }}
              >
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 font-[family-name:var(--font-body)]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
