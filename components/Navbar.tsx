"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks, brandName, primaryCTA } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF8F0]/95 backdrop-blur-md shadow-[0_1px_2px_rgba(59,35,20,0.06),0_8px_24px_-8px_rgba(59,35,20,0.1)] border-b border-[#C8813A]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-serif text-xl font-bold text-[#7B4F2E] tracking-tight hover:text-[#C8813A] transition-colors duration-200"
        >
          {brandName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getLinkHref(link.href)}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-sm font-medium text-[#7B4F2E]/80 hover:text-[#C8813A] transition-colors duration-200 tracking-wide"
            >
              {t(`nav.${link.label.toLowerCase()}`)}
            </Link>
          ))}
          <Link
            href={getLinkHref(primaryCTA.href)}
            onClick={(e) => handleAnchorClick(e, primaryCTA.href)}
            className="ml-2 px-5 py-2 rounded-full bg-[#C8813A] text-[#FFF8F0] text-sm font-semibold tracking-wide hover:bg-[#7B4F2E] transition-all duration-300 shadow-[0_2px_8px_rgba(200,129,58,0.35)] hover:shadow-[0_4px_16px_rgba(123,79,46,0.35)]"
          >
            {t("nav.cta")}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-[#7B4F2E] hover:bg-[#F5E6D3] transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#FFF8F0]/98 backdrop-blur-md border-b border-[#C8813A]/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="py-3 text-base font-medium text-[#7B4F2E] hover:text-[#C8813A] border-b border-[#F5E6D3] last:border-0 transition-colors duration-200"
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                </Link>
              ))}
              <Link
                href={getLinkHref(primaryCTA.href)}
                onClick={(e) => handleAnchorClick(e, primaryCTA.href)}
                className="mt-3 px-5 py-3 rounded-full bg-[#C8813A] text-[#FFF8F0] text-sm font-semibold text-center tracking-wide hover:bg-[#7B4F2E] transition-all duration-300"
              >
                {t("nav.cta")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}