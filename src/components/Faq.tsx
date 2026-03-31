// src/components/Faq.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 sm:py-5 text-left"
      >
        <span className="font-[family-name:var(--font-heading)] text-sm sm:text-lg font-600 text-neutral-900">
          {question}
        </span>
        <span className="shrink-0 mt-1">
          {open ? (
            <Minus size={16} className="text-primary-500" />
          ) : (
            <Plus size={16} className="text-neutral-400" />
          )}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 sm:pb-5 text-neutral-600 text-xs sm:text-base leading-relaxed font-[family-name:var(--font-body)] max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-12 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold text-primary-500 uppercase tracking-widest mb-3 font-[family-name:var(--font-body)]">
            FAQ
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-neutral-900">
            Questions? <span className="text-primary-500">Answered.</span>
          </h2>
        </div>

        {/* FAQ groups */}
        <div className="space-y-8 sm:space-y-10">
          {faqs.map((group) => (
            <div key={group.category}>
              <h3 className="font-[family-name:var(--font-heading)] text-[10px] sm:text-xs font-700 uppercase tracking-widest text-primary-500 mb-3 sm:mb-4">
                {group.category}
              </h3>
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200/60 px-4 sm:px-6">
                {group.questions.map((item) => (
                  <FaqItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-neutral-500 text-xs sm:text-sm mb-4 font-[family-name:var(--font-body)]">
            Still have questions? We&apos;d love to help.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-neutral-300 text-neutral-700 font-semibold px-6 py-3 rounded-full text-sm hover:border-neutral-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}