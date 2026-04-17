"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <main className="bg-[#0B0F19] text-white px-6 md:px-20 py-20">

      {/* HERO */}
      <section className="max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold">
          Drafter AI
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          AI-powered legal drafting platform that automates document creation
          using LLMs, queues, and scalable backend architecture.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="mt-24 max-w-4xl">
        <h2 className="text-3xl font-semibold">Problem</h2>
        <p className="mt-4 text-gray-400">
          Legal drafting is time-consuming and requires expert knowledge.
          Businesses needed a way to generate accurate legal documents quickly
          without relying entirely on manual processes.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="mt-20 max-w-4xl">
        <h2 className="text-3xl font-semibold">Solution</h2>
        <p className="mt-4 text-gray-400">
          Built an AI-powered system that generates legal drafts using OpenAI,
          processes requests asynchronously using queues, and ensures scalable
          performance under load.
        </p>
      </section>

      {/* ARCHITECTURE */}
      <section className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-semibold">Architecture</h2>

        <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5">
          <ul className="space-y-3 text-gray-400">
            <li>• Frontend: Next.js (SSR + performance optimized)</li>
            <li>• Backend: Node.js with queue-based processing</li>
            <li>• Database: MongoDB</li>
            <li>• AI: OpenAI APIs for document generation</li>
            <li>• Queue: Background job handling for heavy tasks</li>
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="glass p-6">
            Automated legal document generation
          </div>
          <div className="glass p-6">
            Queue-based processing for scalability
          </div>
          <div className="glass p-6">
            AI-powered clause structuring
          </div>
          <div className="glass p-6">
            Fast and responsive UI
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mt-20 max-w-4xl">
        <h2 className="text-3xl font-semibold">Challenges & Decisions</h2>
        <p className="mt-4 text-gray-400">
          Handling long-running AI tasks without blocking user experience was
          critical. Implemented queue-based architecture to ensure reliability
          and scalability. Also optimized prompt engineering for better accuracy.
        </p>
      </section>

      {/* OUTCOME */}
      <section className="mt-20 max-w-4xl">
        <h2 className="text-3xl font-semibold">Outcome</h2>
        <p className="mt-4 text-gray-400">
          Delivered a production-ready AI platform capable of generating legal
          drafts efficiently, reducing manual effort and improving turnaround time.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mt-6">
          {["Next.js", "Node.js", "MongoDB", "OpenAI", "Queue"].map((t) => (
            <span key={t} className="glass px-4 py-2 text-sm">
              {t}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}