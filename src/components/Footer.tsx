"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border-t border-slate-800/70"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-12">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-slate-400">
            Built by <span className="text-cyan-400">Ivan</span>
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Designed & built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-mono text-sm">
          <a
            href="https://github.com/Ipeross2207"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-cyan-400"
          >
            GitHub ↗
          </a>

          <span className="text-slate-700">/</span>

          <a
            href="https://github.com/Ipeross2207/Portfolio_Ipeross"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-cyan-400"
          >
            Source ↗
          </a>

          <span className="text-slate-700">/</span>

          <a
            href="#home"
            className="text-slate-500 transition hover:text-cyan-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </motion.footer>
  );
}