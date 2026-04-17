"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Product Architecture",
    desc: "Designing scalable backend and frontend systems.",
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end SaaS platforms using MERN & Laravel.",
  },
  {
    title: "AI Integration",
    desc: "LLM, RAG, and automation systems for real products.",
  },
  {
    title: "Legacy Modernization",
    desc: "Upgrading old systems without downtime.",
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="text-4xl font-bold mb-12">What I Do</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}