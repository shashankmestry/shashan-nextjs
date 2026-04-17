"use client";

import { motion } from "framer-motion";

export default function GlassCard({ children }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="
      relative overflow-hidden
      p-6 rounded-2xl
      border border-white/10
      bg-white/5 backdrop-blur-xl
      transition-all duration-300
      hover:border-white/20
      "
    >
      {/* Glow border effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}