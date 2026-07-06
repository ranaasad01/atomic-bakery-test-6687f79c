"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Heart } from 'lucide-react';
import { navLinks, brandName, brandTagline } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <footer className="bg-[#3B2314] text-[#F5E6D3]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <p className="font-serif text-2xl font-bold text-[#F5E6D3] mb-3 tracking-tight">
              {brandName}
            </p>
            <p className="text-sm text-[#F5E6D3]/60 leading-relaxed">
              {brandTagline}
            </p>
          </motion.div>

          {/* Nav column */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C8813A] mb-4">
              {t("footer.navigate")}
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm text-[#F5E6D3]/70 hover:text-[#C8813A] transition-colors duration-200"
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Hours column */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C8813A] mb-4">
              {t("footer.hours")}
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[#F5E6D3]/70">
              <li className="flex justify-between gap-4">
                <span>{t("footer.weekdays")}</span>
                <span>7am – 6pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t("footer.saturday")}</span>
                <span>7am – 4pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t("footer.sunday")}</span>
                <span>8am – 2pm</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-[#F5E6D3]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F5E6D3]/40"
        >
          <p>
            &copy; {new Date().getFullYear()} {brandName}. {t("footer.rights")}
          </p>
          <p className="flex items-center gap-1.5">
            {t("footer.madeWith")} <Heart size={12} className="text-[#C8813A]" fill="#C8813A" /> {t("footer.inNeighborhood")}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}