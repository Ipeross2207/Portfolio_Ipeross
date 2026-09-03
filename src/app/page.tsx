"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import BackgroundGlow from "@/components/BackgroundGlow";
import Terminal from "@/components/Terminal";
import CustomCursor from "@/components/CustomCursor";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#0a0f1c] text-slate-200">
        <BackgroundGlow />

        <section className="mx-auto flex min-h-screen max-w-7xl items-start px-6 pt-32 md:items-center md:px-12 md:pt-0">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 font-mono text-sm text-cyan-400">
                Hi, my name is
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
                Ivan.
              </h1>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-400 sm:text-4xl md:text-6xl">
                I build things for the web.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                I'm a software developer focused on building modern
                applications, APIs and digital experiences with clean and
                maintainable code.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded border border-cyan-400 px-5 py-3 font-mono text-sm text-cyan-400 transition hover:bg-cyan-400/10"
                >
                  View my projects
                </a>

                <a
                  href="https://github.com/Ipeross2207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-slate-600 px-5 py-3 font-mono text-sm text-slate-300 transition hover:border-slate-400 hover:text-white"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.div>

            {/* Terminal */}
            <div className="hidden lg:block">
              <Terminal />
            </div>
          </div>
        </section>

        <About />

        <Stack />

        <Projects />
      </main>
    </>
  );
}
