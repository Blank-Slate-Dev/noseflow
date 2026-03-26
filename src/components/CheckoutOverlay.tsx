// src/components/CheckoutOverlay.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Wind, Lock, Truck, RotateCcw } from "lucide-react";
import { useCart } from "@/context/CartContext";

type CheckoutStep = "intro" | "details" | "success";

export default function CheckoutOverlay() {
  const {
    items,
    totalPrice,
    totalItems,
    isCheckoutOpen,
    closeCheckout,
    clearCart,
  } = useCart();

  const [step, setStep] = useState<CheckoutStep>("intro");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
  });

  // Reset to intro when overlay opens
  useEffect(() => {
    if (isCheckoutOpen) {
      setStep("intro");
      // Auto-advance from intro to details after animation
      const timer = setTimeout(() => setStep("details"), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCheckoutOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isCheckoutOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCheckoutOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = () => {
    // This is where Stripe will be wired in.
    // For now, show the success step.
    setStep("success");
  };

  const handleSuccessClose = () => {
    clearCart();
    closeCheckout();
  };

  const shipping = totalPrice >= 25 ? 0 : 4.95;
  const orderTotal = totalPrice + shipping;

  if (!isCheckoutOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-white">
      {/* Close button — always visible */}
      {step !== "success" && (
        <button
          type="button"
          onClick={closeCheckout}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close checkout"
        >
          <X size={24} className="text-neutral-600" />
        </button>
      )}

      {/* STEP 1: Intro animation */}
      {step === "intro" && (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <Wind
            size={48}
            className="text-primary-400 mb-6 animate-pulse"
          />
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-neutral-900 mb-4"
            style={{
              animation: "fadeInUp 0.8s ease-out forwards",
            }}
          >
            {"You're on your way to"}
            <br />
            <span className="text-primary-500">breathing better.</span>
          </h1>
          <p
            className="text-neutral-500 text-base sm:text-lg font-[family-name:var(--font-body)]"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.3s forwards",
              opacity: 0,
            }}
          >
            {"Let's finalise your order."}
          </p>
        </div>
      )}

      {/* STEP 2: Order details + payment */}
      {step === "details" && (
        <div
          className="h-full overflow-y-auto"
          style={{ animation: "fadeIn 0.5s ease-out forwards" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <Wind size={28} className="mx-auto mb-3 text-primary-400" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-800 text-neutral-900">
                Complete Your Order
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left — Form */}
              <div className="lg:col-span-3 space-y-6">
                {/* Contact */}
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-700 uppercase tracking-widest text-neutral-400 mb-4">
                    Contact
                  </h3>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-2 border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors font-[family-name:var(--font-body)]"
                  />
                </div>

                {/* Shipping */}
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-700 uppercase tracking-widest text-neutral-400 mb-4">
                    Shipping Address
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-2 border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors font-[family-name:var(--font-body)]"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-2 border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors font-[family-name:var(--font-body)]"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border-2 border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors mt-3 font-[family-name:var(--font-body)]"
                  />
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border-2 border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors font-[family-name:var(--font-body)]"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="border-2 border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors font-[family-name:var(--font-body)]"
                    />
                    <input
                      type="text"
                      name="postcode"
                      placeholder="Postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="border-2 border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors font-[family-name:var(--font-body)]"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-2 border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors mt-3 font-[family-name:var(--font-body)]"
                  />
                </div>

                {/* Payment — Stripe placeholder */}
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-700 uppercase tracking-widest text-neutral-400 mb-4">
                    Payment
                  </h3>
                  <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center bg-neutral-50">
                    <Lock size={24} className="mx-auto mb-3 text-neutral-300" />
                    <p className="text-sm font-semibold text-neutral-500 font-[family-name:var(--font-heading)]">
                      Stripe Payment Element
                    </p>
                    <p className="text-xs text-neutral-400 mt-1 font-[family-name:var(--font-body)]">
                      Card, Apple Pay, Google Pay, Afterpay
                    </p>
                    <p className="text-[10px] text-neutral-300 mt-3 font-[family-name:var(--font-body)]">
                      Connect your Stripe account to activate
                    </p>
                  </div>
                </div>

                {/* Place order button */}
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold py-4 rounded-full text-sm sm:text-base hover:bg-neutral-800 transition-colors"
                >
                  <Lock size={16} />
                  Place Order — ${orderTotal.toFixed(2)}
                </button>

                {/* Trust signals */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-[family-name:var(--font-body)]">
                  <span className="flex items-center gap-1.5">
                    <Lock size={12} />
                    Secure checkout
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Truck size={12} />
                    {shipping === 0 ? "Free shipping" : "Flat rate $4.95"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RotateCcw size={12} />
                    30-day returns
                  </span>
                </div>
              </div>

              {/* Right — Order summary */}
              <div className="lg:col-span-2">
                <div className="bg-neutral-50 rounded-2xl border border-neutral-200/60 p-6 lg:sticky lg:top-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-700 uppercase tracking-widest text-neutral-400 mb-4">
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    {items.map((item, index) => (
                      <div
                        key={`${item.colour}-${item.size}-${index}`}
                        className="flex gap-3"
                      >
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 shrink-0 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={`${item.colour} dilator`}
                            width={56}
                            height={56}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-neutral-900 font-[family-name:var(--font-heading)]">
                            NoseFlow Dilator
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full border"
                              style={{ backgroundColor: item.colourHex }}
                            />
                            <span className="text-xs text-neutral-500">
                              {item.colour} · {item.size} · x{item.quantity}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-neutral-900 shrink-0">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-neutral-200 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">
                        Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
                      </span>
                      <span className="text-neutral-900 font-semibold">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Shipping</span>
                      <span className="text-neutral-900 font-semibold">
                        {shipping === 0 ? (
                          <span className="text-accent-600">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="border-t border-neutral-200 pt-3 flex justify-between">
                      <span className="font-[family-name:var(--font-heading)] font-700 text-neutral-900">
                        Total
                      </span>
                      <span className="font-[family-name:var(--font-heading)] text-xl font-800 text-neutral-900">
                        ${orderTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {shipping === 0 && (
                    <div className="mt-4 bg-accent-50 border border-accent-200 rounded-lg px-3 py-2 text-xs text-accent-700 text-center font-[family-name:var(--font-body)]">
                      {"You've qualified for free shipping!"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Success */}
      {step === "success" && (
        <div
          className="flex flex-col items-center justify-center h-full px-6 text-center"
          style={{ animation: "fadeIn 0.5s ease-out forwards" }}
        >
          <div
            className="w-20 h-20 rounded-full bg-accent-100 flex items-center justify-center mb-6"
            style={{ animation: "scaleIn 0.4s ease-out forwards" }}
          >
            <Wind size={36} className="text-accent-600" />
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-neutral-900 mb-4">
            {"You're all set!"}
          </h1>

          <p className="text-neutral-500 text-base sm:text-lg max-w-md mb-2 font-[family-name:var(--font-body)]">
            Your NoseFlow order has been placed. Better breathing is on its way.
          </p>

          <p className="text-sm text-neutral-400 mb-8 font-[family-name:var(--font-body)]">
            {"We'll send a confirmation to your email shortly."}
          </p>

          <button
            type="button"
            onClick={handleSuccessClose}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-neutral-800 transition-colors"
          >
            Continue Browsing
          </button>
        </div>
      )}

      {/* Keyframe styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}