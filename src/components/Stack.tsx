"use client";

import { motion } from "motion/react";

const stack = [
  {
    category: "Backend",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    category: "Frontend & Mobile",
    technologies: ["React", "TypeScript", "React Native", "Flutter"],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "Docker"],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-7xl px-6 py-32 md:px-12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-sm text-cyan-400">
          02 / STACK
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Technologies I work with.
        </h2>

        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
          A selection of technologies and tools I use to build
          applications, interfaces and backend systems.
        </p>
      </motion.div>

      {/* Stack */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: groupIndex * 0.1,
            }}
            className="rounded-xl border border-slate-800 bg-[#0d1424]/60 p-6 backdrop-blur-sm"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />

              <h3 className="font-mono text-sm text-slate-300">
                {group.category}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {group.technologies.map((technology) => (
                <motion.div
                  key={technology}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-slate-800 bg-[#0a0f1c] px-3 py-4 text-center font-mono text-sm text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  {technology}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}