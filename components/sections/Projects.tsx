"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Layers, Brain, LayoutDashboard } from "lucide-react";
import { projects } from "@/data/portfolio";

const categoryIcon: Record<string, React.ReactNode> = {
  "Full Stack": <Layers size={14} />,
  Mobile: <Layers size={14} />,
  Frontend: <LayoutDashboard size={14} />,
  "AI / ML": <Brain size={14} />,
};

const accentClasses: Record<string, string> = {
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
};

const accentBorder: Record<string, string> = {
  violet: "hover:border-violet-500/40",
  blue: "hover:border-blue-500/40",
  emerald: "hover:border-emerald-500/40",
};

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm text-violet-400 font-medium mb-3 tracking-wide uppercase">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-xl">
            A selection of projects built with product thinking, technical
            depth, and real-world use cases.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden transition-all duration-300 ${accentBorder[project.accentColor]} hover:bg-zinc-900/60`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 pointer-events-none`}
              />

              <div className="relative p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${accentClasses[project.accentColor]}`}
                          >
                            {categoryIcon[project.category]}
                            {project.category}
                          </span>
                          {project.status === "Featured" && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                              Hero Project
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-zinc-50 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-zinc-500 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-zinc-500 hover:text-zinc-50 rounded-lg hover:bg-zinc-800 transition-colors"
                            aria-label={`${project.title} GitHub`}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-zinc-500 hover:text-zinc-50 rounded-lg hover:bg-zinc-800 transition-colors"
                            aria-label={`${project.title} Live`}
                          >
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-3">
                          Features
                        </p>
                        <ul className="space-y-2">
                          {project.features.slice(0, 4).map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-zinc-400"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-3">
                          Engineering Challenges
                        </p>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge) => (
                            <li
                              key={challenge}
                              className="flex items-start gap-2 text-sm text-zinc-400"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
