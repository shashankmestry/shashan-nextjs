"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="py-32 text-center">
      <div className="mx-auto max-w-6xl px-6 md:px-8">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto"
      >
        I focus on building systems that scale, perform, and evolve.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-400 max-w-2xl mx-auto"
      >
        From startups to enterprise platforms, my work is centered around solving
        real-world engineering challenges with modern technology.
      </motion.p>

      </div>
    </section>
  );
}