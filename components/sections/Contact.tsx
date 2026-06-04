"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const links = [
  {
    label: "Email",
    href: siteConfig.links.email,
    icon: <Mail size={16} />,
    description: "Best way to reach me",
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: <ExternalLink size={16} />,
    description: "Professional profile",
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: <ExternalLink size={16} />,
    description: "Code & projects",
  },
  {
    label: "HackerRank",
    href: siteConfig.links.hackerrank,
    icon: <ExternalLink size={16} />,
    description: "Problem solving",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-zinc-800/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-violet-400 font-medium mb-3 tracking-wide uppercase">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 mb-6">
              Let&apos;s build something together.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              I&apos;m actively looking for frontend, full stack, and AI
              engineering roles, internships and graduate positions. If
              you&apos;re hiring or want to collaborate, I&apos;d love to hear
              from you.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                Available for opportunities — Graduating Sep 2026
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-zinc-50 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      {link.label}
                    </p>
                    <p className="text-xs text-zinc-500">{link.description}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
