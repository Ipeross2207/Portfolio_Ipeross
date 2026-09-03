"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          onClick={() => setMenuOpen(false)}
          className="font-mono text-lg font-bold text-cyan-400 transition hover:text-white"
        >
          IP<span className="text-slate-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="group font-mono text-sm text-slate-400 transition hover:text-cyan-400"
            >
              <span className="mr-1 text-cyan-400">0{index + 1}.</span>
              {link.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            className="rounded border border-cyan-400 px-4 py-2 font-mono text-sm text-cyan-400 transition hover:bg-cyan-400/10"
          >
            CV
          </a>
        </div>

                {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-cyan-400 transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-cyan-400 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-cyan-400 transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-800/60 bg-[#0a0f1c]/95 backdrop-blur-md md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
                {links.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-slate-800/60 py-4 font-mono text-sm text-slate-400 transition hover:text-cyan-400"
                  >
                    <span className="mr-2 text-cyan-400">0{index + 1}.</span>
                    {link.name}
                  </a>
                ))}

                <a
                  href="/cv.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 rounded border border-cyan-400 px-4 py-3 text-center font-mono text-sm text-cyan-400 transition hover:bg-cyan-400/10"
                >
                  CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.header>
  );
}
