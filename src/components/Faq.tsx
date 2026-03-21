// src/components/Faq.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Breathing Science",
    questions: [
      {
        q: "Why is nose breathing better than mouth breathing?",
        a: "Your nose does a lot more than just let air in. When you breathe through your nose, your sinuses release nitric oxide — a molecule that widens blood vessels and helps your lungs absorb 10–18% more oxygen than mouth breathing. Nasal breathing also activates your parasympathetic nervous system (the \"rest and digest\" mode), which lowers your heart rate and blood pressure. Mouth breathing skips all of this.",
      },
      {
        q: "Can mouth breathing actually affect my health long-term?",
        a: "Yes — and the research is surprisingly strong. A 2024 study published in the American Journal of Physiology found that mouth breathing raised diastolic blood pressure by 4 mmHg and shifted the nervous system toward a stress response, even in healthy young adults. Over time, chronic mouth breathing is linked to poor sleep quality, increased snoring, dental decay, and reduced cognitive performance. In children, a landmark study of over 11,000 kids found mouth breathing doubled the risk of behavioural problems by age 7.",
      },
      {
        q: "What is nitric oxide and why does it matter?",
        a: "Nitric oxide (NO) is a gas naturally produced in your paranasal sinuses — but only when you breathe through your nose. It was first measured at surprisingly high concentrations by researchers at the Karolinska Institute in 1995 (published in Nature Medicine). NO widens your airways and blood vessels, helps kill bacteria and viruses in your nasal passages, and improves oxygen transfer in your lungs. Mouth breathing bypasses your sinuses entirely, cutting your nitric oxide intake by roughly 50%.",
      },
      {
        q: "Does mouth breathing really cause snoring?",
        a: "In most cases, yes. Snoring happens when soft tissues in the throat vibrate due to restricted airflow. When your nose is partially blocked, you compensate by opening your mouth — and that's when snoring starts. About 45% of adults snore occasionally, and nasal obstruction is considered the most common contributing cause. A study in the European Respiratory Journal found that mouth breathing during sleep increased obstructive events from 1.5 to 43 per hour — even in healthy people.",
      },
    ],
  },
  {
    category: "Product & Usage",
    questions: [
      {
        q: "How does a nasal dilator actually work?",
        a: "A nasal dilator is a small, soft silicone device that sits just inside your nostrils. It gently pushes outward on the nasal valve — the narrowest part of your airway and the main bottleneck for airflow. Clinical studies using rhinomanometry (a nasal airflow measurement tool) show that internal nasal dilators increase airflow by 18–55%, depending on your anatomy. You'll feel the difference immediately.",
      },
      {
        q: "Is it comfortable to wear while sleeping?",
        a: "Yes — NoseFlow dilators are made from ultra-soft, medical-grade silicone that moulds to the inside of your nose. Most people forget they're wearing it within a few minutes. In clinical trials of similar internal dilators, the majority of participants reported no discomfort during all-night wear.",
      },
      {
        q: "How do I pick the right size?",
        a: "We offer Medium and Large. Medium fits most people and is the best starting point if you're unsure. If you have noticeably wider nostrils or have used nasal dilators before and found standard sizes too small, go with Large. The dilator should feel snug but not uncomfortable — it needs gentle outward pressure to work.",
      },
      {
        q: "How long does a NoseFlow dilator last?",
        a: "Each dilator is reusable for weeks with proper care. Just rinse it with warm water and mild soap after each use, and store it in the included case. Replace it when the silicone starts to lose its shape or firmness.",
      },
      {
        q: "Are internal dilators better than nasal strips?",
        a: "Research suggests yes. A 2019 study in Acta Biomedica compared internal dilators to external Breathe Right strips in snoring patients and found internal devices were effective in more patients and produced better sleep quality scores. Internal dilators also don't leave adhesive residue, don't fall off during sleep, and are reusable rather than single-use.",
      },
    ],
  },
  {
    category: "Performance & Sleep",
    questions: [
      {
        q: "Can nasal breathing improve my athletic performance?",
        a: "It can — especially once you adapt to it. A 2018 study from Colorado State University tested runners who had trained with nose-only breathing for 6+ months. They achieved the same VO₂max and endurance as mouth breathers but used 22% less ventilation — meaning their breathing was significantly more efficient. A separate 2023 study found that internal nasal dilators specifically improved VO₂max and reduced perceived breathing effort in athletes with nasal valve issues.",
      },
      {
        q: "Will this help with my snoring?",
        a: "For most snorers, yes. Internal nasal dilators address one of the most common root causes of snoring: restricted nasal airflow. When your nose can't deliver enough air, your mouth opens and throat tissues vibrate. By opening the nasal valve, NoseFlow helps keep your mouth closed and your airway stable. That said, severe or chronic snoring should be discussed with a healthcare professional, as it can be a sign of sleep apnoea.",
      },
      {
        q: "Does NoseFlow treat sleep apnoea?",
        a: "No — and we want to be upfront about that. Multiple systematic reviews have found that nasal dilators do not significantly reduce the apnoea-hypopnoea index (AHI), which is the clinical measure of sleep apnoea severity. NoseFlow is designed to improve nasal airflow, reduce snoring, and support better breathing — but it is not a medical treatment for sleep apnoea. If you suspect you have OSA, please consult your doctor.",
      },
      {
        q: "How quickly will I notice a difference?",
        a: "Most people notice improved airflow the moment they insert it — that's the physical widening of the nasal valve at work. For sleep benefits like reduced snoring and less dry mouth, most users report a difference within the first few nights. Athletic breathing efficiency tends to improve over a few weeks as you adapt to sustained nasal breathing during exercise.",
      },
    ],
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-600 text-neutral-900">
          {question}
        </span>
        <span className="shrink-0 mt-1">
          {open ? (
            <Minus size={18} className="text-primary-500" />
          ) : (
            <Plus size={18} className="text-neutral-400" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-600 text-sm sm:text-base leading-relaxed font-[family-name:var(--font-body)] max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-3 font-[family-name:var(--font-body)]">
            FAQ
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-800 text-neutral-900">
            Questions? <span className="text-primary-500">Answered.</span>
          </h2>
        </motion.div>

        {/* FAQ groups */}
        <div className="space-y-10">
          {faqs.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-xs font-700 uppercase tracking-widest text-primary-500 mb-4">
                {group.category}
              </h3>
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200/60 px-6">
                {group.questions.map((item) => (
                  <FaqItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-500 text-sm mb-4 font-[family-name:var(--font-body)]">
            Still have questions? We&apos;d love to help.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-neutral-300 text-neutral-700 font-semibold px-6 py-3 rounded-full text-sm hover:border-neutral-400 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}