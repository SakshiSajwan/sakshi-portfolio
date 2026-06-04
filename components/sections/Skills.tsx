"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Frontend: "text-violet-400 bg-violet-500/8 border-violet-500/20",
  Backend: "text-blue-400 bg-blue-500/8 border-blue-500/20",
  "AI & ML": "text-emerald-400 bg-emerald-500/8 border-emerald-500/20",
  Databases: "text-amber-400 bg-amber-500/8 border-amber-500/20",
  Tools: "text-zinc-300 bg-zinc-800/60 border-zinc-700/40",
  Concepts: "text-rose-400 bg-rose-500/8 border-rose-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-zinc-800/40">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm text-violet-400 font-medium mb-3 tracking-wide uppercase">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-400 max-w-xl">
            A full-stack toolkit spanning frontend, backend, AI, and tooling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6"
            >
              <h3 className="text-sm font-semibold text-zinc-300 mb-4 tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${categoryColors[category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}