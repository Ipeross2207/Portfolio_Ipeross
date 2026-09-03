"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import BackgroundGlow from "@/components/BackgroundGlow";
import Terminal from "@/components/Terminal";
import CustomCursor from "@/components/CustomCursor";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    <CustomCursor />
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#0a0f1c] text-slate-200">

        <BackgroundGlow />

        <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12">
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

              <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
                Iván.
              </h1>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-400 md:text-6xl">
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
            <Terminal />

          </div>
        </section>

        <Projects />

      </main>
    </>
  );
}
