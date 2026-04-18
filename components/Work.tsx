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

const otherProjects = [
  {
    title: "Shri Gajanan Maharaj Mandir",
    desc: "Community temple site for events, teachings, and donation flows with bilingual content and SEO-focused structure so visitors can discover schedules and support the mandir online.",
    link: "https://shrigajananmaharajmandirsangvipune.com/",
    tags: ["WordPress", "Payments", "Bilingual", "SEO", "Donations"],
  },
  {
    title: "DigiSkillsPro",
    desc: "End-to-end franchise and student operations: applications, documents, cohorts, and payment workflows so institutions and franchise partners stay aligned in one system.",
    link: "https://www.digiskillspro.com/",
    tags: ["WordPress", "Franchise", "Students", "Payments", "Documents"],
  },
  {
    title: "My Cute Office",
    desc: "Multi-location coworking portal for listing spaces, amenities, and bookings so teams can compare offices and reserve the right fit without juggling spreadsheets.",
    link: "https://mycuteoffice.com/",
    tags: ["WordPress", "Coworking", "Reservations", "Amenities"],
  },
  {
    title: "Ascend Cowork",
    desc: "Marketing site for a coworking brand—services, space types, amenities, and gallery—with clear paths to book a tour or get in touch.",
    link: "https://ascendcowork.com/",
    tags: ["WordPress", "Coworking", "Gallery", "Lead gen"],
  },
  {
    title: "Future Building Infrastructure",
    desc: "Next.js marketing site explaining MIDC industrial plot services, step-by-step process, and contact—fast, structured content for a technical audience.",
    link: "https://futurebuildinfra.in/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Services"],
  },
  {
    title: "Ameet Dubey",
    desc: "Personal portfolio highlighting services, selected work, and credibility signals for consulting and delivery engagements.",
    link: "https://ameetdubey.com/",
    tags: ["WordPress", "Portfolio", "SEO"],
  },
  {
    title: "Pro Procurement",
    desc: "Corporate site for procurement services and product lines, with service breakdowns, visuals, and contact for enterprise buyers.",
    link: "https://pro-procurement.com/",
    tags: ["WordPress", "B2B", "Services", "Products"],
  },
  {
    title: "Fran Tech",
    desc: "Franchise technology positioning: solutions, differentiators, and inquiry flows for operators evaluating franchise systems.",
    link: "https://fran-tech.com/",
    tags: ["WordPress", "Franchise", "B2B", "Lead gen"],
  },
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

      {/* Other projects */}
      <div className="mt-24">
        <div className="mb-10 max-w-2xl">
          <h3 className="text-3xl font-bold">Other projects</h3>
          <p className="mt-2 text-gray-400">
            Client and marketing sites—clear structure, credible content, and paths to contact or convert.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              <h4 className="text-xl font-semibold text-white">
                {project.title}
              </h4>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                {project.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                Visit site →
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      </div>
    </section>
  );
}