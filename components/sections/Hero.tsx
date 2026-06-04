"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl">

          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.div
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-1.5 text-zinc-500 text-sm mb-6"
          >
            <MapPin size={13} />
            <span>{siteConfig.location}</span>
          </motion.div>

          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-50 leading-[1.1] mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
              Sakshi Sajwan.
            </span>
          </motion.h1>

          <motion.p
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl"
          >
            {siteConfig.bio}
          </motion.p>

          <motion.div
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              View Projects
              <ArrowDown size={14} />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-50 text-sm font-medium rounded-lg transition-colors duration-200 border border-zinc-700/50"
            >
              <Download size={14} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-zinc-400 hover:text-zinc-50 text-sm font-medium transition-colors duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            custom={0.45}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-500 hover:text-zinc-50 transition-colors rounded-lg hover:bg-zinc-800"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-500 hover:text-zinc-50 transition-colors rounded-lg hover:bg-zinc-800"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.email}
              className="p-2 text-zinc-500 hover:text-zinc-50 transition-colors rounded-lg hover:bg-zinc-800"
            >
              <Mail size={18} />
            </a>
            <div className="h-4 w-px bg-zinc-800 mx-1" />
            <span className="text-xs text-zinc-600">
              B.Tech CSE (IoT) · Graduating 2026
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
