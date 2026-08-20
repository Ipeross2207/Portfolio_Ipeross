"use client";

import { motion } from "motion/react";
import ProjectPreview from "./ProjectPreview";

const projects = [
  {
    number: "01",
    name: "Streamlytics",
    status: "ACTIVE",
    description:
      "Analytics platform for tracking and visualizing application data.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React Native"],
  },
  {
    number: "02",
    name: "FeastFit",
    status: "PERSONAL",
    description:
      "Nutrition application for creating and managing personalized meal plans.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    number: "03",
    name: "Irrigation API",
    status: "API",
    description: "REST API for managing automated irrigation systems.",
    technologies: ["Node.js", "Express"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32 md:px-12">
      <div className="mb-16">
        <p className="font-mono text-sm text-cyan-400">SELECTED WORK</p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Things I've built.
        </h2>

        <p className="mt-4 max-w-xl text-slate-400">
          A selection of projects I've worked on while exploring different
          technologies and ideas.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <motion.article
            key={project.number}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#0d1424]/60 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <div className="mb-6 flex items-center gap-3 font-mono text-xs">
                  <span className="text-cyan-400">{project.number}</span>

                  <span className="text-slate-700">/</span>

                  <span className="text-slate-500">{project.status}</span>
                </div>

                <h3 className="text-3xl font-bold text-white md:text-4xl">
                  {project.name}
                </h3>

                <p className="mt-4 max-w-lg leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-700 bg-slate-800/40 px-2.5 py-1 font-mono text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-6 font-mono text-sm">
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

              {project.number === "01" ? (
                <ProjectPreview />
              ) : (
                <div className="relative flex min-h-[280px] items-center justify-center rounded-lg border border-slate-800/80 bg-[#0a0f1c]/70">
                  <span className="font-mono text-xs text-slate-700">
                    PREVIEW
                  </span>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
