"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  content: string[];
  side: "left" | "right";
}

export default function Section({ title, content, side }: Props) {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20">

      <div className={`grid md:grid-cols-2 gap-10 w-full items-center ${side === "left" ? "" : "md:flex-row-reverse"}`}>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            {content.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </motion.div>

        {/* VISUAL CARD */}
        <motion.div
          initial={{ opacity: 0, x: side === "left" ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="space-y-4">
            {content.map((item, i) => (
              <div key={i} className="text-sm text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
}