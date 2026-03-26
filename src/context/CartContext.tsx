// src/context/CartContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  colour: string;
  colourHex: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  isCheckoutOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const openCheckout = () => {
    setIsOpen(false);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => setIsCheckoutOpen(false);

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.colour === newItem.colour && item.size === newItem.size
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        const combined = updated[existingIndex].quantity + newItem.quantity;
        const newPrice = getPrice(combined);
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: combined,
          price: newPrice,
        };
        return updated;
      }

      return [...prev, newItem];
    });
    setIsOpen(true);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        isCheckoutOpen,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

function getPrice(qty: number): number {
  if (qty <= 0) return 0;
  if (qty === 1) return 14.95;
  if (qty === 2) return 19.95;
  if (qty === 3) return 19.95 + 14.95;
  if (qty === 4) return 29.99;
  return 29.99 + (qty - 4) * 14.95;
}