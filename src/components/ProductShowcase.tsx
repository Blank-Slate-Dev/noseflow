// src/components/ProductShowcase.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ShoppingBag, Check, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const colours = [
  {
    id: "clear",
    label: "Clear",
    hex: "#e2e8f0",
    ring: "#cbd5e1",
    image: "/Nasal_Dilator_Product_Image_Clear.png",
  },
  {
    id: "blue",
    label: "Blue",
    hex: "#3a9dff",
    ring: "#0a7cf5",
    image: "/Nasal_Dilator_Product_Image_Blue.png",
  },
  {
    id: "orange",
    label: "Orange",
    hex: "#fb923c",
    ring: "#f97316",
    image: "/Nasal_Dilator_Product_Image_Orange.png",
  },
];

const sizes = [
  {
    id: "medium",
    label: "Medium",
    description: "Most common fit",
    popular: true,
  },
  {
    id: "large",
    label: "Large",
    description: "Wider nasal passages",
    popular: false,
  },
];

const features = [
  "Medical-grade soft silicone",
  "Comfortable for all-night wear",
  "Reusable — wash and reuse daily",
  "Includes storage case",
  "Instant airflow improvement",
  "Fits discreetly inside the nose",
];

const presets = [
  { qty: 1, price: 14.95, label: "Single", save: null },
  { qty: 2, price: 19.95, label: "2 Pack", save: "Save $9.95" },
  { qty: 4, price: 29.99, label: "4 Pack", save: "Save $29.81" },
];

function getPrice(qty: number): number {
  if (qty <= 0) return 0;
  if (qty === 1) return 14.95;
  if (qty === 2) return 19.95;
  if (qty === 3) return 19.95 + 14.95;
  if (qty === 4) return 29.99;
  return 29.99 + (qty - 4) * 14.95;
}

function getPricePerUnit(qty: number): string {
  return (getPrice(qty) / qty).toFixed(2);
}

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 72 : -72,
    scale: 0.985,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -96 : 96,
    scale: 0.99,
  }),
};

export default function ProductShowcase() {
  const [selectedColour, setSelectedColour] = useState("clear");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const directionRef = useRef(1);
  const { addItem } = useCart();

  const activeColour = colours.find((c) => c.id === selectedColour)!;
  const totalPrice = getPrice(quantity);
  const pricePerUnit = getPricePerUnit(quantity);
  const fullPrice = (quantity * 14.95).toFixed(2);
  const isSaving = totalPrice < quantity * 14.95;

  const handleColourChange = (newColourId: string) => {
    if (newColourId === selectedColour) return;
    const currentIndex = colours.findIndex((c) => c.id === selectedColour);
    const nextIndex = colours.findIndex((c) => c.id === newColourId);
    directionRef.current = nextIndex > currentIndex ? 1 : -1;
    setSelectedColour(newColourId);
  };

  const handlePreset = (qty: number) => {
    setQuantity(qty);
  };

  const increment = () => setQuantity((q) => Math.min(q + 1, 20));
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleAddToCart = () => {
    addItem({
      colour: activeColour.label,
      colourHex: activeColour.hex,
      size: selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1),
      quantity,
      price: totalPrice,
      image: activeColour.image,
    });

    // Show feedback
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);

    // Reset quantity after adding
    setQuantity(1);
  };

  return (
    <section id="shop" className="py-12 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-neutral-900 mb-4">
            One Product.{" "}
            <span className="text-primary-500">Better Breathing.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Our silicone nasal dilators gently expand the nasal valve — the
            narrowest part of your airway — for immediate, comfortable airflow
            improvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT — IMAGE */}
          <div className="relative">
            <div className="aspect-square max-w-[420px] mx-auto rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute w-[70%] h-[70%] rounded-full bg-neutral-200/40 blur-3xl" />
              <div className="absolute w-[40%] h-[40%] rounded-full bg-neutral-400/20 blur-2xl" />

              <div
                className="absolute w-[55%] h-[55%] rounded-full blur-2xl opacity-20 transition-all duration-500"
                style={{ backgroundColor: activeColour.hex }}
              />

              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" initial={false} custom={directionRef.current}>
                  <motion.div
                    key={activeColour.id}
                    custom={directionRef.current}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { duration: 0.2, ease: [0.55, 0.06, 0.68, 0.19] },
                      opacity: { duration: 0.34, ease: "easeOut" },
                      scale: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={activeColour.image}
                      alt={`${activeColour.label} NoseFlow Nasal Dilator`}
                      width={500}
                      height={500}
                      className="relative w-[104%] sm:w-[98%] h-auto object-contain drop-shadow-[0_28px_65px_rgba(0,0,0,0.22)] -translate-y-1"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full border"
                  style={{
                    backgroundColor: activeColour.hex,
                    borderColor: activeColour.ring,
                  }}
                />
                <span className="text-xs sm:text-sm font-bold text-neutral-900 font-[family-name:var(--font-heading)]">
                  {activeColour.label} ·{" "}
                  {selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — INFO */}
          <div>
            <p className="text-xs sm:text-sm font-semibold text-primary-500 uppercase tracking-widest mb-2 font-[family-name:var(--font-body)]">
              NoseFlow Nasal Dilator
            </p>

            <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl font-800 text-neutral-900 mb-2">
              Silicone Nasal Dilator
            </h3>

            {/* Price display */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <p className="text-2xl sm:text-3xl font-bold text-neutral-900">
                  ${totalPrice.toFixed(2)}
                </p>
                {isSaving && (
                  <p className="text-sm text-neutral-400 line-through">
                    ${fullPrice}
                  </p>
                )}
              </div>
              <p className="text-sm text-neutral-500 mt-0.5">
                ${pricePerUnit} each
                {isSaving && (
                  <span className="ml-2 text-accent-600 font-semibold">
                    — You save ${(quantity * 14.95 - totalPrice).toFixed(2)}
                  </span>
                )}
              </p>
            </div>

            {/* Quantity — Preset bundles */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-neutral-700 mb-3">
                Quantity:
              </p>
              <div className="flex gap-2 sm:gap-3">
                {presets.map((preset) => (
                  <button
                    key={preset.qty}
                    type="button"
                    onClick={() => handlePreset(preset.qty)}
                    className={`relative flex-1 p-2.5 sm:p-3 rounded-xl border-2 text-center transition-all ${
                      quantity === preset.qty
                        ? "border-primary-500 bg-primary-50"
                        : "border-neutral-200 bg-white hover:border-neutral-300"
                    }`}
                  >
                    {preset.save && (
                      <span className="pointer-events-none absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                        {preset.save}
                      </span>
                    )}
                    <p className="font-[family-name:var(--font-heading)] font-700 text-sm sm:text-base text-neutral-900">
                      {preset.label}
                    </p>
                    <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5">
                      ${preset.price.toFixed(2)}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity — Custom stepper */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-neutral-500">Or choose your own:</span>
              <div className="inline-flex items-center border-2 border-neutral-200 rounded-full overflow-hidden">
                <button
                  type="button"
                  onClick={decrement}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 sm:w-12 text-center text-sm font-semibold text-neutral-900 font-[family-name:var(--font-heading)]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={increment}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 sm:mb-8 font-[family-name:var(--font-body)]">
              Made from ultra-soft, medical-grade silicone that moulds
              comfortably inside your nose — you&apos;ll barely feel it, but
              you&apos;ll immediately breathe the difference. Comes with a
              compact storage case.
            </p>

            {/* COLOUR */}
            <div className="mb-5 sm:mb-6">
              <p className="text-sm font-semibold text-neutral-700 mb-3">
                Colour:{" "}
                <span className="text-neutral-500 font-normal">
                  {activeColour.label}
                </span>
              </p>
              <div className="flex gap-3">
                {colours.map((colour) => (
                  <button
                    key={colour.id}
                    type="button"
                    onClick={() => handleColourChange(colour.id)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColour === colour.id
                        ? "border-neutral-900 scale-110"
                        : "border-neutral-200 hover:border-neutral-400"
                    }`}
                    aria-label={`Select ${colour.label}`}
                  >
                    <span
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                      style={{ backgroundColor: colour.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="mb-6 sm:mb-8">
              <p className="text-sm font-semibold text-neutral-700 mb-3">
                Size:
              </p>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size.id)}
                    className={`relative flex-1 p-3 sm:p-4 rounded-xl border-2 text-center transition-all ${
                      selectedSize === size.id
                        ? "border-primary-500 bg-primary-50"
                        : "border-neutral-200 bg-white hover:border-neutral-300"
                    }`}
                  >
                    {size.popular && (
                      <span className="pointer-events-none absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                    <p className="font-700 text-sm sm:text-base text-neutral-900">
                      {size.label}
                    </p>
                    <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5">
                      {size.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 font-semibold px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 mb-6 ${
                addedFeedback
                  ? "bg-accent-500 text-white scale-[1.02]"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
              }`}
            >
              {addedFeedback ? (
                <>
                  <Check size={18} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingBag size={18} />
                  Add to Cart — ${totalPrice.toFixed(2)}
                </>
              )}
            </button>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-3">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600"
                >
                  <Check size={14} className="text-accent-500 mt-0.5" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
