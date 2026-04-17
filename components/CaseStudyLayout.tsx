"use client";

import { motion } from "framer-motion";

export default function CaseStudyLayout({ data }: any) {
  const hasLiveLink = Boolean(data?.link);
  const hasHeroImage = Boolean(data?.heroImage);
  const hasValidVisuals =
    Array.isArray(data?.visuals) &&
    data.visuals.length > 0 &&
    data.visuals.every((visual: any) => Boolean(visual?.image));

  return (
    <main className="bg-[#0B0F19] text-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">

      {/* HERO */}
      <section className="max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold">
          {data.title}
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          {data.subtitle}
        </p>

        {hasLiveLink ? (
          <a
            href={data.link}
            target="_blank"
            className="inline-block mt-6 text-blue-400"
          >
            Visit Live →
          </a>
        ) : (
          <div className="mt-6 inline-block px-3 py-1 text-xs border border-yellow-500/30 text-yellow-400 rounded-full">
            Confidential Project
          </div>
        )}

        {/* HERO IMAGE */}
        {hasHeroImage && (
          <div className="mt-12 max-w-3xl rounded-2xl overflow-hidden border border-white/10">
            <img
              src={data.heroImage}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </section>

      {/* VISUALS */}
      {hasValidVisuals && (
        <section className="mt-24 max-w-6xl">
          <h2 className="text-3xl font-semibold">Visual Overview</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.visuals.map((v: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-4 text-xl text-gray-300">
                  {v.title}
                </h3>

                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={v.image}
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {renderSection("Problem", data.problem)}
      {renderSection("Solution", data.solution)}

      {/* ARCHITECTURE */}
      <section className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-semibold">Architecture</h2>

        <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5">
          <ul className="space-y-3 text-gray-400">
            {data.architecture.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-20 max-w-5xl">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {data.features.map((f: string, i: number) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="glass p-6"
            >
              {f}
            </motion.div>
          ))}
        </div>
      </section>

      {renderSection("Challenges & Decisions", data.challenges)}
      {renderSection("Outcome", data.outcome)}

      {/* TECH */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mt-6">
          {data.tech.map((t: string) => (
            <span key={t} className="glass px-4 py-2 text-sm">
              {t}
            </span>
          ))}
        </div>
      </section>

      </div>
    </main>
  );
}

/* helper */
function renderSection(title: string, items: string[]) {
  if (!items) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-20 max-w-4xl"
    >
      <h2 className="text-3xl font-semibold">{title}</h2>

      <ul className="mt-4 space-y-3 text-gray-400">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </motion.section>
  );
}