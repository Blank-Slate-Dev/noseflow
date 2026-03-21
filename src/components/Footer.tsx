// src/components/Footer.tsx
"use client";

import { Wind } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "Nasal Dilator Kit", href: "#shop" },
    { label: "How It Works", href: "#science" },
    { label: "Reviews", href: "#reviews" },
  ],
  Support: [
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#" },
  ],
  Company: [
    { label: "Our Story", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] text-2xl font-800 text-white mb-4"
            >
              <Wind size={22} className="text-primary-400" />
              NoseFlow
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-sm font-[family-name:var(--font-body)]">
              A modern breathing optimisation brand. Medical-grade silicone nasal
              dilators designed to improve airflow, sleep, and performance.
            </p>

            {/* Email signup */}
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 transition-colors font-[family-name:var(--font-body)]"
              />
              <button className="bg-primary-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-600 transition-colors shrink-0">
                Join
              </button>
            </div>
            <p className="text-xs text-neutral-600 mt-2 font-[family-name:var(--font-body)]">
              Get exclusive offers and breathing tips. No spam.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="font-[family-name:var(--font-heading)] text-sm font-700 text-white uppercase tracking-wider mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-white transition-colors font-[family-name:var(--font-body)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600 font-[family-name:var(--font-body)]">
            &copy; {new Date().getFullYear()} NoseFlow. All rights reserved.
            Australian owned &amp; operated.
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-600 font-[family-name:var(--font-body)]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
