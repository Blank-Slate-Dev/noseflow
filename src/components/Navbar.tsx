// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, X, Trash2, Wind } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CheckoutOverlay from "@/components/CheckoutOverlay";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const {
    items,
    isOpen,
    openCart,
    closeCart,
    removeItem,
    openCheckout,
    totalItems,
    totalPrice,
  } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="bg-neutral-900 text-white text-center text-xs sm:text-sm py-2 px-4 font-[family-name:var(--font-body)]">
        Free shipping on all orders over $25
      </div>

      <nav
        className={`z-50 border-b transition-all duration-500 ease-out ${
          scrolled
            ? "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-neutral-200/60 shadow-sm"
            : "relative bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-out ${
              scrolled ? "h-14 sm:h-[76px]" : "h-16 sm:h-24"
            }`}
          >
            <div className="w-10 sm:w-[120px] shrink-0" />

            <a href="/" className="flex-1 flex justify-center">
              <Image
                src="/logo_header_transparent_background.png"
                alt="NoseFlow"
                width={280}
                height={80}
                style={{ width: "auto" }}
                className={`transition-all duration-500 ease-out ${
                  scrolled
                    ? "h-[45px] sm:h-16 max-w-[220px]"
                    : "h-14 sm:h-20 max-w-[250px]"
                }`}
                priority
              />
            </a>

            <div className="w-10 sm:w-[120px] shrink-0 flex justify-end">
              <button
                type="button"
                onClick={openCart}
                className={`relative inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-all duration-500 ease-out ${
                  scrolled
                    ? "px-4 sm:px-4.5 py-2 text-xs sm:text-sm"
                    : "px-5 py-2.5 text-xs sm:text-sm"
                }`}
              >
                <ShoppingBag size={16} />
                <span className="hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {scrolled && <div className="h-14 sm:h-[76px]" />}

      {/* Cart drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Cart drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-700 text-neutral-900">
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm font-normal text-neutral-500">
                  ({totalItems} {totalItems === 1 ? "item" : "items"})
                </span>
              )}
            </h2>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} className="text-neutral-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Wind size={48} className="text-neutral-200 mb-4" />
                <p className="font-[family-name:var(--font-heading)] text-lg font-600 text-neutral-400 mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-neutral-400 mb-6 font-[family-name:var(--font-body)]">
                  Add a NoseFlow dilator to get started
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.colour}-${item.size}-${index}`}
                    className="flex gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200/60"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.colour} NoseFlow Dilator`}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-[family-name:var(--font-heading)] text-sm font-600 text-neutral-900">
                        NoseFlow Dilator
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="w-3 h-3 rounded-full border"
                          style={{ backgroundColor: item.colourHex }}
                        />
                        <span className="text-xs text-neutral-500 font-[family-name:var(--font-body)]">
                          {item.colour} · {item.size} · Qty {item.quantity}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-neutral-900 mt-2">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="self-start p-1.5 rounded-full hover:bg-neutral-200 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} className="text-neutral-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-neutral-200 px-6 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 font-[family-name:var(--font-body)]">
                  Subtotal
                </span>
                <span className="font-[family-name:var(--font-heading)] text-lg font-700 text-neutral-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <p className="text-xs text-neutral-400 font-[family-name:var(--font-body)]">
                Shipping calculated at checkout
              </p>

              <button
                type="button"
                onClick={openCheckout}
                className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold py-4 rounded-full text-sm sm:text-base hover:bg-neutral-800 transition-colors"
              >
                Proceed to Checkout — ${totalPrice.toFixed(2)}
              </button>

              <button
                type="button"
                onClick={closeCart}
                className="w-full text-center text-sm text-neutral-500 hover:text-neutral-700 transition-colors font-[family-name:var(--font-body)]"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      <CheckoutOverlay />
    </>
  );
}
