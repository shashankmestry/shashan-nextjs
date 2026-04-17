"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 md:px-8">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
      >
        I build scalable products, modern web platforms, and AI-powered systems.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-400 max-w-2xl text-lg"
      >
        15+ years of experience delivering SaaS platforms, high-scale systems,
        and production-ready AI solutions.
      </motion.p>

      <div className="flex gap-4 mt-10 flex-wrap">
        <div className="glass">2M+ Users</div>
        <div className="glass">Laravel • Next.js • AI</div>
        <div className="glass">AWS • Web3</div>
      </div>

      </div>
    </section>
  );
}