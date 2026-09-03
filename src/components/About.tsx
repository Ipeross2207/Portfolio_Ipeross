"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-sm text-cyan-400">
          01 / ABOUT
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
          A little about me.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-lg leading-relaxed text-slate-400"
        >
          <p>
            I'm a software developer passionate about building modern
            applications and exploring new technologies.
          </p>

          <p>
            I enjoy working across the stack, from designing APIs and
            backend systems to creating clean and responsive user
            interfaces.
          </p>

          <p>
            I'm constantly learning, experimenting with new ideas and
            looking for better ways to build reliable and maintainable
            software.
          </p>
        </motion.div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-xl border border-slate-800 bg-[#0d1424]/60 p-6 backdrop-blur-sm"
        >
          <div className="space-y-5 font-mono text-sm">
            <div>
              <p className="text-slate-600">focus</p>
              <p className="mt-1 text-cyan-400">
                Software Development
              </p>
            </div>

            <div>
              <p className="text-slate-600">currently</p>
              <p className="mt-1 text-slate-300">
                Building & learning
              </p>
            </div>

            <div>
              <p className="text-slate-600">interests</p>
              <p className="mt-1 text-slate-300">
                Web · Backend · Mobile · AI
              </p>
            </div>

            <div>
              <p className="text-slate-600">status</p>
              <p className="mt-1 flex items-center gap-2 text-slate-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Open to opportunities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}