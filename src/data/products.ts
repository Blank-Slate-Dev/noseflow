export const colours = [
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

export const sizes = [
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

export const features = [
  "Medical-grade soft silicone",
  "Comfortable for all-night wear",
  "Reusable — wash and reuse daily",
  "Includes storage case",
  "Instant airflow improvement",
  "Fits discreetly inside the nose",
];

export const presets = [
  { qty: 1, price: 14.95, label: "Single", save: null },
  { qty: 2, price: 19.95, label: "2 Pack", save: "Save $9.95" },
  { qty: 4, price: 29.99, label: "4 Pack", save: "Save $29.81" },
];

export function getPrice(qty: number): number {
  if (qty <= 0) return 0;
  if (qty === 1) return 14.95;
  if (qty === 2) return 19.95;
  if (qty === 3) return 19.95 + 14.95;
  if (qty === 4) return 29.99;
  return 29.99 + (qty - 4) * 14.95;
}

export function getPricePerUnit(qty: number): string {
  return (getPrice(qty) / qty).toFixed(2);
}
