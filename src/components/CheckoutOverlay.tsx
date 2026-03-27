// src/components/CheckoutOverlay.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Lock, Truck, RotateCcw } from "lucide-react";
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

  useEffect(() => {
    if (isCheckoutOpen) {
      setStep("intro");
      const timer = setTimeout(() => setStep("details"), 2800);
      return () => clearTimeout(timer);
    }
  }, [isCheckoutOpen]);

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

      {/* STEP 1: Breathing intro animation */}
      {step === "intro" && (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center relative overflow-hidden">
          {/* Expanding breath circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="rounded-full bg-primary-100/40"
              style={{
                animation: "breathExpand 2.8s ease-out forwards",
              }}
            />
          </div>

          {/* Airflow lines sweeping across */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 800"
            fill="none"
            style={{ animation: "fadeIn 0.5s ease-out forwards" }}
          >
            <path
              d="M-200 400 Q200 300 600 400 Q1000 500 1400 400"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary-300/30"
              style={{ animation: "flowRight 2s ease-out 0.2s forwards", strokeDasharray: 2000, strokeDashoffset: 2000 }}
            />
            <path
              d="M-200 340 Q200 260 600 340 Q1000 420 1400 340"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent-300/25"
              style={{ animation: "flowRight 2.2s ease-out 0.4s forwards", strokeDasharray: 2000, strokeDashoffset: 2000 }}
            />
            <path
              d="M-200 460 Q200 380 600 460 Q1000 540 1400 460"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary-200/20"
              style={{ animation: "flowRight 2.4s ease-out 0.6s forwards", strokeDasharray: 2000, strokeDashoffset: 2000 }}
            />
          </svg>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary-300/30"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animation: `particleDrift ${1.5 + i * 0.3}s ease-out ${0.3 + i * 0.15}s forwards`,
                  opacity: 0,
                }}
              />
            ))}
          </div>

          {/* Main text content */}
          <div className="relative z-10">
            {/* Logo icon with breath pulse */}
            <div
              className="mx-auto mb-8 relative"
              style={{ animation: "fadeInScale 0.6s ease-out forwards" }}
            >
              <div className="w-20 h-20 rounded-full bg-primary-50 border border-primary-200/50 flex items-center justify-center mx-auto overflow-hidden">
                <Image
                  src="/icon.png"
                  alt="NoseFlow"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  style={{ animation: "breathPulse 2s ease-in-out 0.5s infinite" }}
                />
              </div>
              {/* Pulse rings */}
              <div
                className="absolute inset-0 w-20 h-20 rounded-full border border-primary-200/40 mx-auto"
                style={{ animation: "pulseRing 2s ease-out 0.8s infinite" }}
              />
              <div
                className="absolute inset-0 w-20 h-20 rounded-full border border-primary-200/30 mx-auto"
                style={{ animation: "pulseRing 2s ease-out 1.2s infinite" }}
              />
            </div>

            <h1
              className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-neutral-900 mb-4"
              style={{ animation: "fadeInUp 0.7s ease-out 0.3s forwards", opacity: 0 }}
            >
              Clear air ahead.
            </h1>

            <p
              className="text-neutral-500 text-base sm:text-lg font-[family-name:var(--font-body)] mb-2"
              style={{ animation: "fadeInUp 0.7s ease-out 0.6s forwards", opacity: 0 }}
            >
              {"You're about to breathe better."}
            </p>

            <p
              className="text-primary-500/60 text-sm font-[family-name:var(--font-body)]"
              style={{ animation: "fadeInUp 0.7s ease-out 0.9s forwards", opacity: 0 }}
            >
              Preparing your order...
            </p>
          </div>
        </div>
      )}

      {/* STEP 2: Order details + payment */}
      {step === "details" && (
        <div
          className="h-full overflow-y-auto"
          style={{ animation: "fadeIn 0.5s ease-out forwards" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-8 sm:mb-12">
              <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-200/50 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                <Image
                  src="/icon.png"
                  alt="NoseFlow"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-800 text-neutral-900">
                Complete Your Order
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-3 space-y-6">
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

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold py-4 rounded-full text-sm sm:text-base hover:bg-neutral-800 transition-colors"
                >
                  <Lock size={16} />
                  Place Order — ${orderTotal.toFixed(2)}
                </button>

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
          className="flex flex-col items-center justify-center h-full px-6 text-center relative overflow-hidden"
          style={{ animation: "fadeIn 0.5s ease-out forwards" }}
        >
          {/* Background breath burst */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="rounded-full bg-accent-100/30"
              style={{ animation: "breathExpand 2s ease-out forwards" }}
            />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-accent-400/30"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${35 + (i % 3) * 15}%`,
                  animation: `particleRise ${1.2 + i * 0.2}s ease-out ${0.2 + i * 0.1}s forwards`,
                  opacity: 0,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {/* Checkmark with breath ring */}
            <div
              className="relative mx-auto mb-6"
              style={{ animation: "scaleIn 0.4s ease-out forwards" }}
            >
              <div className="w-24 h-24 rounded-full bg-accent-50 border-2 border-accent-200 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent-600"
                  style={{ animation: "drawCheck 0.5s ease-out 0.3s forwards", strokeDasharray: 30, strokeDashoffset: 30 }}
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="absolute inset-0 w-24 h-24 rounded-full border border-accent-200/40 mx-auto"
                style={{ animation: "pulseRing 1.5s ease-out 0.5s infinite" }}
              />
            </div>

            <h1
              className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-800 text-neutral-900 mb-3"
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
            >
              Breathe easy.
            </h1>

            <p
              className="text-neutral-500 text-base sm:text-lg max-w-md mb-2 font-[family-name:var(--font-body)]"
              style={{ animation: "fadeInUp 0.6s ease-out 0.4s forwards", opacity: 0 }}
            >
              Your NoseFlow order is confirmed. Clearer breathing is on its way.
            </p>

            <p
              className="text-sm text-neutral-400 mb-8 font-[family-name:var(--font-body)]"
              style={{ animation: "fadeInUp 0.6s ease-out 0.6s forwards", opacity: 0 }}
            >
              {"We'll send a confirmation to your email shortly."}
            </p>

            <button
              type="button"
              onClick={handleSuccessClose}
              className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-neutral-800 transition-colors"
              style={{ animation: "fadeInUp 0.6s ease-out 0.8s forwards", opacity: 0 }}
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        @keyframes breathExpand {
          0% {
            width: 40px;
            height: 40px;
            opacity: 0.6;
          }
          100% {
            width: 800px;
            height: 800px;
            opacity: 0;
          }
        }
        @keyframes breathPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes flowRight {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes particleDrift {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.5);
          }
          30% {
            opacity: 0.6;
            transform: translate(30px, -20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(80px, -60px) scale(0.3);
          }
        }
        @keyframes particleRise {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          40% {
            opacity: 0.5;
            transform: translateY(-30px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-80px) scale(0.2);
          }
        }
        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}