"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);
  const [history, setHistory] = useState<
    { id: string; type: "command" | "response"; content: ReactNode }[]
  >([]);

  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ipeross2207@gmail.com");

      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch {
      window.prompt("Copy this email:", "ipeross2207@gmail.com");
    }
  };

  const addToHistory = (type: "command" | "response", content: ReactNode) => {
    setHistory((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        content,
      },
    ]);
  };

  const handleCommand = () => {
    const command = input.trim().toLowerCase();

    if (!command) return;

    let response: ReactNode = "";

    switch (command) {
      case "help":
        response = "Available commands: about, stack, projects, contact, clear";
        break;

      case "about":
        response = (
          <div className="space-y-4">
            <p className="text-cyan-400">ABOUT</p>

            <div>
              <p className="text-slate-300">
                I'm <span className="text-white">Iván</span>, a software
                developer who enjoys learning by building things.
              </p>

              <p className="mt-2 text-slate-500">
                I'm naturally curious and like understanding how things work
                under the hood. I learn by experimenting, breaking things,
                fixing them and making them better.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-slate-700/60 bg-slate-800/20 p-3">
                <p className="text-[11px] text-slate-500">FOCUS</p>
                <p className="mt-1 text-xs text-slate-300">Web & APIs</p>
              </div>

              <div className="rounded-lg border border-slate-700/60 bg-slate-800/20 p-3">
                <p className="text-[11px] text-slate-500">CURRENTLY</p>
                <p className="mt-1 text-xs text-slate-300">Exploring AI</p>
              </div>

              <div className="rounded-lg border border-slate-700/60 bg-slate-800/20 p-3">
                <p className="text-[11px] text-slate-500">LOCATION</p>
                <p className="mt-1 text-xs text-slate-300">Granada, Spain</p>
              </div>

              <div className="rounded-lg border border-slate-700/60 bg-slate-800/20 p-3">
                <p className="text-[11px] text-slate-500">STATUS</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Available
                </p>
              </div>
            </div>
          </div>
        );
        break;

      case "stack":
        response = (
          <div className="space-y-4">
            <p className="text-cyan-400">STACK</p>

            <div>
              <p className="mb-2 text-xs text-slate-500">BACKEND</p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-purple-400/20 bg-purple-400/5 px-2.5 py-1 text-xs text-purple-300">
                  Java
                </span>

                <span className="rounded-md border border-purple-400/20 bg-purple-400/5 px-2.5 py-1 text-xs text-purple-300">
                  Spring Boot
                </span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs text-slate-500">FRONTEND</p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-xs text-cyan-300">
                  TypeScript
                </span>

                <span className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-xs text-cyan-300">
                  React
                </span>

                <span className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-xs text-cyan-300">
                  Next.js
                </span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs text-slate-500">DATABASE</p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-blue-400/20 bg-blue-400/5 px-2.5 py-1 text-xs text-blue-300">
                  PostgreSQL
                </span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs text-slate-500">DEVOPS</p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-orange-400/20 bg-orange-400/5 px-2.5 py-1 text-xs text-orange-300">
                  Docker
                </span>
              </div>
            </div>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-4">
            <p className="text-cyan-400">PROJECTS</p>

            <div className="space-y-3">
              <div className="rounded-lg border border-slate-700/60 bg-slate-800/20 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-slate-200">Streamlytics</p>
                  <span className="text-xs text-green-400">ACTIVE</span>
                </div>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Analytics platform for tracking and visualizing data.
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="rounded border border-purple-400/20 bg-purple-400/5 px-2 py-0.5 text-[11px] text-purple-300">
                    Java
                  </span>
                  <span className="rounded border border-purple-400/20 bg-purple-400/5 px-2 py-0.5 text-[11px] text-purple-300">
                    Spring Boot
                  </span>
                  <span className="rounded border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 text-[11px] text-cyan-300">
                    React Native
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-slate-700/60 bg-slate-800/20 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-slate-200">FeastFit</p>
                  <span className="text-xs text-cyan-400">PERSONAL</span>
                </div>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Nutrition application for creating and managing personalized
                  meal plans.
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="rounded border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 text-[11px] text-cyan-300">
                    Flutter
                  </span>
                  <span className="rounded border border-yellow-400/20 bg-yellow-400/5 px-2 py-0.5 text-[11px] text-yellow-300">
                    Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-4">
            <p className="text-cyan-400">CONTACT</p>

            <p className="text-slate-500">Let's build something together.</p>

            <div className="space-y-2">
              <a
                href="https://github.com/Ipeross2207"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/20 px-3 py-2 transition hover:border-slate-500 hover:bg-slate-800/40"
              >
                <div>
                  <p className="text-xs text-slate-500">GITHUB</p>
                  <p className="text-sm text-slate-300 transition group-hover:text-white">
                    github.com/ivan
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/ivan-perez-ossintsev-7a7a41396/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/20 px-3 py-2 transition hover:border-slate-500 hover:bg-slate-800/40"
              >
                <div>
                  <p className="text-xs text-slate-500">LINKEDIN</p>
                  <p className="text-sm text-slate-300 transition group-hover:text-white">
                    linkedin.com/in/ivan
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="group flex w-full items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/20 px-3 py-2 text-left transition hover:border-slate-500 hover:bg-slate-800/40"
              >
                <div>
                  <p className="text-xs text-slate-500">EMAIL</p>

                  <p className="text-sm text-slate-300 transition group-hover:text-white">
                    {emailCopied ? "Copied!" : "ipeross2207@gmail.com"}
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:text-cyan-400">
                  {emailCopied ? "✓" : "↗"}
                </span>
              </button>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        response = `Command not found: ${command}`;
    }

    addToHistory("command", `$ ${command}`);
    addToHistory("response", response);
    setInput("");
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-[#0d1424] shadow-2xl shadow-cyan-950/20">
      <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />

        <span className="ml-3 font-mono text-xs text-slate-500">
          ivan@portfolio ~
        </span>
      </div>

      <div className="flex h-[360px] flex-col p-6 font-mono text-sm leading-7">
        <div ref={historyRef} className="flex-1 overflow-y-auto">
          <p className="text-slate-500">Welcome to my portfolio terminal.</p>

          <p className="text-slate-500">
            Type <span className="text-cyan-400">help</span> to see available
            commands.
          </p>

          <div className="mt-4">
            {history.map((item) => {
              if (item.type === "command") {
                return (
                  <div key={item.id} className="text-slate-300">
                    {item.content}
                  </div>
                );
              }

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {item.content}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-2 flex shrink-0 items-center">
          <span className="text-cyan-400">$</span>

          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleCommand();
              }
            }}
            autoFocus
            className="ml-2 w-full bg-transparent text-slate-300 outline-none"
          />

          <span className="ml-1 animate-pulse text-white">_</span>
        </div>
      </div>
    </div>
  );
}
