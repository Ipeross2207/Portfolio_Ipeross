"use client";

import { motion } from "motion/react";
import { useState } from "react";

const email = "ipeross2207@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Fallback si el navegador no permite acceder al portapapeles
      window.prompt("Copy this email:", email);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-32 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1424]/60 px-6 py-16 text-center backdrop-blur-sm md:px-12 md:py-20"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">
          <p className="font-mono text-sm text-cyan-400">04 / CONTACT</p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let's work together.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            I'm always open to discussing new projects, opportunities and ideas.
            Feel free to get in touch.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ipeross2207@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-cyan-400 px-6 py-3 font-mono text-sm text-cyan-400 transition hover:bg-cyan-400/10"
            >
              Get in touch ↗
            </a>

            <a
              href="https://github.com/Ipeross2207"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-slate-600 px-6 py-3 font-mono text-sm text-slate-300 transition hover:border-slate-400 hover:text-white"
            >
              GitHub ↗
            </a>
          </div>

          {/* Contact links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-sm">
            <button
              type="button"
              onClick={copyEmail}
              className="text-slate-500 transition hover:text-cyan-400"
            >
              {copied ? "Copied!" : email}
            </button>

            <span className="text-slate-700">/</span>

            <a
              href="https://github.com/Ipeross2207"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <span className="text-slate-700">/</span>

            <a
              href="https://www.linkedin.com/in/ivan-perez-ossintsev-7a7a41396/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
