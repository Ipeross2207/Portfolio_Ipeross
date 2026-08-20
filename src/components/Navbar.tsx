"use client";

import { motion } from "motion/react";

const links = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-[#0a0f1c] via-[#0a0f1c]/80 to-transparent"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a
          href="#home"
          className="font-mono text-lg font-bold text-cyan-400 transition hover:text-white"
        >
          MP<span className="text-slate-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="group font-mono text-sm text-slate-400 transition hover:text-cyan-400"
            >
              <span className="mr-1 text-cyan-400">
                0{index + 1}.
              </span>
              {link.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            className="rounded border border-cyan-400 px-4 py-2 font-mono text-sm text-cyan-400 transition hover:bg-cyan-400/10"
          >
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}