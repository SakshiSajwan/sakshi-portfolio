"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-zinc-800/40">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm text-violet-400 font-medium mb-3 tracking-wide uppercase">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
            Where I&apos;ve Worked
          </h2>
          <p className="text-zinc-400 max-w-xl">
            Real-world experience building production software and supporting tech-forward teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-800/60" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-1 h-2.5 w-2.5 rounded-full bg-violet-500 border-2 border-zinc-950" />

                {/* Date (desktop sidebar) */}
                <div className="hidden md:block absolute left-0 top-0 w-16 text-right">
                  <span className="text-xs text-zinc-600 leading-tight">
                    {exp.period.split("–")[0].trim()}
                  </span>
                </div>

                {/* Card */}
                <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-50 mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-violet-400 text-sm font-medium">
                        <Briefcase size={13} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-600 text-xs">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-xs bg-zinc-800 text-zinc-500 border border-zinc-700/40">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-violet-500/70 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/80 text-zinc-500 border border-zinc-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}