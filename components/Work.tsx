"use client";

import { motion } from "framer-motion";

const featured = [
  {
    slug: "drafter-ai",
    title: "Drafter AI",
    desc: "AI-powered legal drafting platform using OpenAI, queue systems, and scalable architecture.",
    tech: "Next.js • Node • MongoDB • OpenAI",
    link: "https://www.drafterai.in/",
  },
  {
    slug: "prodcure",
    title: "Prodcure",
    desc: "Full-scale procurement marketplace with AI-powered vendor discovery and document workflows.",
    tech: "MERN • AI • SaaS Platform",
    link: "https://www.prodcure.com/",
  },
  {
    slug: "web3-genesis",
    title: "Web3 Genesis",
    desc: "Token vesting platform with whitelist, contribution flow, and task-based early vesting.",
    tech: "Web3 • Smart Contracts • Node",
    link: "https://genesis.spad.xyz/",
  },
];

const secondary = [
  {
    title: "DigiSkillsPro",
    desc: "Franchise and student management platform with payments and application workflows.",
  },
  {
    title: "Coworking Platforms",
    desc: "Workspace booking and management systems with WordPress integrations.",
  },
];

const wordpress = [
  "shrigajananmaharajmandirsangvipune.com",
  "mycuteoffice.com",
  "ascendcowork.com",
  "ameetdubey.com",
  "pro-procurement.com",
  "fran-tech.com",
];

export default function Work() {
  return (
    <section id="selected-work" className="py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">

      <h2 className="text-5xl font-bold mb-16">
        Selected Work
      </h2>

      {/* 🔥 Featured Projects */}
      <div className="space-y-16">
      <section className="mb-24">

<div className="p-12 rounded-3xl border border-white/10 
bg-gradient-to-br from-yellow-500/10 to-orange-500/10">

  <div className="max-w-3xl">

    {/* Label */}
    <div className="mb-4 text-sm text-yellow-400">
      Featured Engineering Work
    </div>

    {/* Title */}
    <h3 className="text-4xl md:text-5xl font-bold">
      Zero-Downtime Laravel Modernization
    </h3>

    {/* Description */}
    <p className="mt-6 text-gray-300 text-lg">
      Migrated a production SaaS platform from Laravel 5.4 to Laravel 12 
      serving 2M+ users — without downtime.
    </p>

    {/* Highlights */}
    <div className="flex flex-wrap gap-3 mt-6 text-sm">
      <span className="glass px-3 py-1">2M+ Users</span>
      <span className="glass px-3 py-1">Zero Downtime</span>
      <span className="glass px-3 py-1">Laravel Upgrade</span>
    </div>

    {/* CTA */}
    <div className="mt-8">
      <a
        href="/work/laravel-modernization"
        className="text-white text-lg"
      >
        View Case Study →
      </a>
    </div>

  </div>

</div>

</section>
        {featured.map((project, i) => (
          <motion.a
            key={i}
            href={`/work/${project.slug}`}
            whileHover={{ scale: 1.02 }}
            className="block p-10 rounded-2xl border border-white/10 
            bg-gradient-to-br from-purple-600/20 to-blue-600/20 
            hover:border-white/20 transition-all"
          >
            <h3 className="text-3xl font-semibold">{project.title}</h3>

            <p className="mt-4 text-gray-300 max-w-2xl">
              {project.desc}
            </p>

            <p className="mt-4 text-sm text-gray-400">
              {project.tech}
            </p>
          </motion.a>
        ))}
      </div>

      {/* ⚙️ Secondary */}
      <div className="mt-24 grid md:grid-cols-2 gap-8">
        {secondary.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border border-white/10 bg-white/5"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 🧱 WordPress Grid */}
      <div className="mt-20">
        <h3 className="text-2xl mb-6">Other Projects</h3>

        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
          {wordpress.map((site, i) => (
            <a
              key={i}
              href={`https://${site}`}
              target="_blank"
              className="hover:text-white transition"
            >
              {site}
            </a>
          ))}
        </div>
      </div>

      </div>
    </section>
  );
}