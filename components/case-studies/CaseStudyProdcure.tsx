"use client";

import { motion } from "framer-motion";

export default function CaseStudyProdcure() {
  return (
    <main className="bg-[#0B0F19] text-white px-6 md:px-20 py-20">

      {/* HERO */}
      <section className="max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold">
          Prodcure
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          A full-scale procurement marketplace built from scratch with AI-powered
          vendor discovery, document workflows, and scalable SaaS architecture.
        </p>

        <a
          href="https://www.prodcure.com/"
          target="_blank"
          className="inline-block mt-6 text-blue-400"
        >
          Visit Live Site →
        </a>
      </section>

      {/* PROBLEM */}
      <section className="mt-24 max-w-4xl">
        <h2 className="text-3xl font-semibold">Problem</h2>

        <p className="mt-4 text-gray-400">
          Traditional procurement processes are fragmented, manual, and inefficient.
          Businesses struggle with vendor discovery, comparison, and managing large
          volumes of procurement data and documents.
        </p>

        <p className="mt-4 text-gray-400">
          There was a need for a centralized platform that could streamline procurement,
          improve decision-making, and reduce manual effort using intelligent automation.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="mt-20 max-w-4xl">
        <h2 className="text-3xl font-semibold">Solution</h2>

        <p className="mt-4 text-gray-400">
          Designed and developed a full-stack SaaS procurement platform enabling
          businesses to discover vendors, manage procurement workflows, and leverage
          AI for smarter decision-making.
        </p>

        <p className="mt-4 text-gray-400">
          The system integrates AI-driven search and recommendations, structured
          document handling, and scalable backend services to support growing usage.
        </p>
      </section>

      {/* ARCHITECTURE */}
      <section className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-semibold">Architecture</h2>

        <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5">
          <ul className="space-y-3 text-gray-400">
            <li>• Frontend: Next.js (SSR + optimized performance)</li>
            <li>• Backend: Node.js + Express</li>
            <li>• Database: MongoDB (flexible schema for procurement data)</li>
            <li>• AI Layer: LLM-based vendor discovery and search</li>
            <li>• Document System: Structured storage and retrieval</li>
            <li>• API Design: Modular and scalable service architecture</li>
          </ul>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="glass p-6">
            AI-powered vendor discovery and matching
          </div>

          <div className="glass p-6">
            End-to-end procurement workflow management
          </div>

          <div className="glass p-6">
            Document management and structured data handling
          </div>

          <div className="glass p-6">
            Scalable SaaS architecture for growing usage
          </div>

        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mt-20 max-w-4xl">
        <h2 className="text-3xl font-semibold">Challenges & Decisions</h2>

        <p className="mt-4 text-gray-400">
          Designing a flexible data model for procurement workflows required balancing
          structure with adaptability. MongoDB was chosen to support evolving requirements.
        </p>

        <p className="mt-4 text-gray-400">
          Integrating AI into vendor discovery required careful tuning to ensure relevant
          and meaningful results rather than generic outputs.
        </p>

        <p className="mt-4 text-gray-400">
          Performance optimization was critical due to complex queries and document-heavy
          workflows, leading to efficient indexing and API design decisions.
        </p>
      </section>

      {/* OUTCOME */}
      <section className="mt-20 max-w-4xl">
        <h2 className="text-3xl font-semibold">Outcome</h2>

        <p className="mt-4 text-gray-400">
          Delivered a production-ready procurement platform that simplifies vendor
          discovery, reduces manual work, and enhances decision-making using AI.
        </p>

        <p className="mt-4 text-gray-400">
          The system provides a strong foundation for scaling into a larger SaaS
          ecosystem with advanced automation capabilities.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mt-6">
          {[
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "OpenAI",
            "LLM",
          ].map((t) => (
            <span key={t} className="glass px-4 py-2 text-sm">
              {t}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}