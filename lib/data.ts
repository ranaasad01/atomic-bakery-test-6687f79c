export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export const primaryCTA = {
  label: "Order Today",
  href: "#contact",
};

export const brandName = "Hearth & Crumb";
export const brandTagline = "Baked with love, served with warmth.";

export const brandColors = {
  cream: "#F5E6D3",
  amber: "#C8813A",
  brown: "#7B4F2E",
  offWhite: "#FFF8F0",
  dark: "#3B2314",
} as const;