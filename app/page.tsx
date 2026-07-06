"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";
import { brandName, brandTagline } from "@/lib/data";
import { Star, MapPin, Phone, Mail, Clock, Leaf, Heart, Award } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

const menuItems = [
  {
    id: 1,
    category: "Breads",
    name: "Country Sourdough",
    description: "Slow-fermented 48 hours with our house starter. Crisp crust, open crumb, deeply tangy.",
    price: "$9",
    image: "https://littlespoonfarm.com/wp-content/uploads/2020/01/sourdough-country-loaf.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    category: "Breads",
    name: "Seeded Rye",
    description: "Dark rye flour, caraway, sunflower, and sesame seeds. Dense, earthy, and satisfying.",
    price: "$8",
    image: "https://www.pepperidgefarm.com/wp-content/uploads/2019/10/seeded-rye-bread.png",
    badge: null,
  },
  {
    id: 3,
    category: "Pastries",
    name: "Almond Croissant",
    description: "Twice-baked with frangipane cream and toasted almond flakes. Buttery and golden.",
    price: "$5",
    image: "http://www.aceofspoons.com/wp-content/uploads/2022/09/almond-croissants-15-of-19-scaled.jpg",
    badge: "Morning Favorite",
  },
  {
    id: 4,
    category: "Pastries",
    name: "Cardamom Morning Bun",
    description: "Laminated dough rolled in cardamom sugar, baked until caramelized and fragrant.",
    price: "$4.50",
    image: "https://curlygirlkitchen.com/wp-content/uploads/2024/02/Cardamom-Morning-Buns-Cinnamon-Sugar-Rolls-High-Altitude-012.jpg",
    badge: null,
  },
  {
    id: 5,
    category: "Sweets",
    name: "Brown Butter Blondie",
    description: "Nutty brown butter, dark chocolate chunks, and a pinch of fleur de sel. Chewy center.",
    price: "$4",
    image: "https://images.food52.com/N5mqOSACWobu31xLkz_XBzK3a-I=/57f901bc-3d29-4952-9d12-7cdae886d9e9--blondies6.jpg",
    badge: null,
  },
  {
    id: 6,
    category: "Sweets",
    name: "Seasonal Fruit Tart",
    description: "Crisp pâte sucrée shell, vanilla pastry cream, and whatever fruit is at its peak today.",
    price: "$6",
    image: "https://www.abakingjourney.com/wp-content/uploads/2022/04/Mini-Fruit-Tarts-Feature.jpg",
    badge: "Daily Special",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Local Ingredients",
    body: "We source flour from a family mill 40 miles away and eggs from a farm just down the road. Freshness you can taste.",
  },
  {
    icon: Clock,
    title: "Baked Before Dawn",
    body: "Our ovens fire at 4 am every morning so the first loaf hits the shelf warm by 7. No day-old bread, ever.",
  },
  {
    icon: Heart,
    title: "Made by Hand",
    body: "No industrial mixers, no shortcuts. Every loaf is shaped by hand, scored with care, and baked in a stone deck oven.",
  },
  {
    icon: Award,
    title: "Award-Winning Recipes",
    body: "Named Best Bakery by the Millbrook Gazette three years running. We're proud of the craft behind every bite.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Millbrook",
    quote: "The sourdough changed my life. I drive 20 minutes every Saturday just for a loaf. Worth every mile.",
    stars: 5,
  },
  {
    id: 2,
    name: "James T.",
    location: "Riverside",
    quote: "Hearth and Crumb is the real deal. The almond croissant is the best I've had outside of Paris.",
    stars: 5,
  },
  {
    id: 3,
    name: "Priya K.",
    location: "Millbrook",
    quote: "I order a dozen morning buns every Sunday for my family. They disappear in minutes. Absolute perfection.",
    stars: 5,
  },
];

export default function HomePage() {
  const t = useTranslations();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FFF8F0] overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center">
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,129,58,0.13) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(123,79,46,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C8813A] bg-[#C8813A]/10 px-4 py-1.5 rounded-full w-fit border border-[#C8813A]/20"
            >
              <Leaf size={12} /> {t("hero.badge")}
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-6xl font-bold text-[#3B2314] leading-[1.1] tracking-tight text-balance"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[#7B4F2E]/80 text-lg leading-relaxed max-w-md text-pretty"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-full bg-[#C8813A] text-[#FFF8F0] font-semibold text-sm tracking-wide hover:bg-[#7B4F2E] transition-all duration-300 shadow-[0_2px_8px_rgba(200,129,58,0.4)] hover:shadow-[0_4px_20px_rgba(123,79,46,0.35)] hover:-translate-y-0.5"
              >
                {t("hero.cta_primary")}
              </Link>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-full border border-[#C8813A]/40 text-[#7B4F2E] font-semibold text-sm tracking-wide hover:border-[#C8813A] hover:bg-[#F5E6D3] transition-all duration-300"
              >
                {t("hero.cta_secondary")}
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 border-t border-[#C8813A]/15">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[#3B2314]">12+</p>
                <p className="text-xs text-[#7B4F2E]/60 mt-0.5">{t("hero.stat_items")}</p>
              </div>
              <div className="w-px h-10 bg-[#C8813A]/20" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[#3B2314]">3x</p>
                <p className="text-xs text-[#7B4F2E]/60 mt-0.5">{t("hero.stat_award")}</p>
              </div>
              <div className="w-px h-10 bg-[#C8813A]/20" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[#3B2314]">4am</p>
                <p className="text-xs text-[#7B4F2E]/60 mt-0.5">{t("hero.stat_bake")}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: hero image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative hidden md:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(59,35,20,0.18)] border border-[#C8813A]/10 aspect-[4/5]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/552b1f8ce4b0c75f5b891d3f/1502153473640-38VB1LG771B20SFM9AGX/Crumb+of+SW.jpg?format=1500w"
                alt="Fresh artisan bread at Hearth and Crumb"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314]/30 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-5 -left-6 bg-[#FFF8F0] rounded-2xl px-5 py-4 shadow-[0_4px_24px_rgba(59,35,20,0.14)] border border-[#C8813A]/15 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8813A]/15 flex items-center justify-center">
                <Star size={18} className="text-[#C8813A]" fill="#C8813A" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#3B2314]">{t("hero.badge_rating")}</p>
                <p className="text-xs text-[#7B4F2E]/60">{t("hero.badge_reviews")}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 bg-[#F5E6D3]/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-[#FFF8F0] rounded-2xl p-6 border border-[#C8813A]/10 shadow-[0_1px_2px_rgba(59,35,20,0.04),0_8px_24px_-8px_rgba(59,35,20,0.08)] flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C8813A]/12 flex items-center justify-center">
                    <Icon size={20} className="text-[#C8813A]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#3B2314] mb-1.5">{v.title}</h3>
                    <p className="text-sm text-[#7B4F2E]/70 leading-relaxed">{v.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-widest text-[#C8813A] mb-3"
            >
              {t("menu.label")}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-[#3B2314] tracking-tight text-balance"
            >
              {t("menu.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#7B4F2E]/70 text-lg max-w-xl leading-relaxed"
            >
              {t("menu.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="group bg-[#FFF8F0] rounded-2xl overflow-hidden border border-[#C8813A]/10 shadow-[0_1px_2px_rgba(59,35,20,0.04),0_8px_24px_-8px_rgba(59,35,20,0.1)] flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-[#C8813A] text-[#FFF8F0] text-xs font-semibold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-[#3B2314]/70 text-[#F5E6D3] text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#3B2314] leading-snug">{item.name}</h3>
                    <span className="font-serif text-lg font-bold text-[#C8813A] shrink-0">{item.price}</span>
                  </div>
                  <p className="text-sm text-[#7B4F2E]/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#3B2314]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-widest text-[#C8813A] mb-3"
            >
              {t("testimonials.label")}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold text-[#F5E6D3] tracking-tight mb-14 text-balance"
            >
              {t("testimonials.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((review) => (
                <motion.div
                  key={review.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-[#FFF8F0]/6 border border-[#F5E6D3]/10 rounded-2xl p-7 flex flex-col gap-5 backdrop-blur-sm"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} size={14} className="text-[#C8813A]" fill="#C8813A" />
                    ))}
                  </div>
                  <p className="text-[#F5E6D3]/80 text-sm leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 border-t border-[#F5E6D3]/10">
                    <p className="text-sm font-semibold text-[#F5E6D3]">{review.name}</p>
                    <p className="text-xs text-[#F5E6D3]/50 mt-0.5 flex items-center gap-1">
                      <MapPin size={10} /> {review.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <div>
                <motion.p
                  variants={fadeInUp}
                  className="text-xs font-semibold uppercase tracking-widest text-[#C8813A] mb-3"
                >
                  {t("contact.label")}
                </motion.p>
                <motion.h2
                  variants={fadeInUp}
                  className="font-serif text-4xl md:text-5xl font-bold text-[#3B2314] tracking-tight text-balance"
                >
                  {t("contact.title")}
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="mt-4 text-[#7B4F2E]/70 text-lg leading-relaxed"
                >
                  {t("contact.subtitle")}
                </motion.p>
              </div>

              <motion.div variants={staggerContainer} className="flex flex-col gap-4 mt-2">
                {[
                  { icon: MapPin, label: t("contact.address_label"), value: "14 Millbrook Lane, Millbrook, NY 12545" },
                  { icon: Phone, label: t("contact.phone_label"), value: "(845) 555-0182" },
                  { icon: Mail, label: t("contact.email_label"), value: "hello@hearthandcrumb.com" },
                  { icon: Clock, label: t("contact.hours_label"), value: "Mon–Fri 7am–6pm, Sat 7am–4pm, Sun 8am–2pm" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={fadeInUp}
                      className="flex items-start gap-4 p-4 rounded-xl bg-[#F5E6D3]/50 border border-[#C8813A]/10"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#C8813A]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-[#C8813A]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#7B4F2E]/60 uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="text-sm text-[#3B2314] font-medium leading-relaxed">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="bg-[#FFF8F0] rounded-3xl p-8 border border-[#C8813A]/12 shadow-[0_4px_32px_rgba(59,35,20,0.1)]"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C8813A]/15 flex items-center justify-center">
                    <Heart size={28} className="text-[#C8813A]" fill="#C8813A" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#3B2314]">{t("contact.success_title")}</h3>
                  <p className="text-[#7B4F2E]/70 text-sm leading-relaxed max-w-xs">{t("contact.success_body")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#3B2314] mb-1">{t("contact.form_title")}</h3>
                    <p className="text-sm text-[#7B4F2E]/60">{t("contact.form_subtitle")}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#7B4F2E] uppercase tracking-wide" htmlFor="name">
                      {t("contact.field_name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#C8813A]/20 bg-[#F5E6D3]/40 text-[#3B2314] text-sm placeholder:text-[#7B4F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#C8813A]/40 focus:border-[#C8813A]/50 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#7B4F2E] uppercase tracking-wide" htmlFor="email">
                      {t("contact.field_email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#C8813A]/20 bg-[#F5E6D3]/40 text-[#3B2314] text-sm placeholder:text-[#7B4F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#C8813A]/40 focus:border-[#C8813A]/50 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#7B4F2E] uppercase tracking-wide" htmlFor="message">
                      {t("contact.field_message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about a custom order, catering inquiry, or just say hello..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#C8813A]/20 bg-[#F5E6D3]/40 text-[#3B2314] text-sm placeholder:text-[#7B4F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#C8813A]/40 focus:border-[#C8813A]/50 transition-all duration-200 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-full bg-[#C8813A] text-[#FFF8F0] font-semibold text-sm tracking-wide hover:bg-[#7B4F2E] transition-all duration-300 shadow-[0_2px_8px_rgba(200,129,58,0.4)] hover:shadow-[0_4px_20px_rgba(123,79,46,0.35)] mt-1"
                  >
                    {t("contact.submit")}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}