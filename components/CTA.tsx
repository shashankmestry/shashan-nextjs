"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 px-6 md:px-20 text-center">

      {/* HEADLINE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto"
      >
        Let’s build something impactful.
      </motion.h2>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-gray-400 max-w-xl mx-auto"
      >
        Open to freelance, consulting, and product collaborations.
      </motion.p>

      {/* CONTACT LINKS */}
      <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">

        <a
          href="mailto:shashankmestry@gmail.com"
          className="glass px-6 py-3 hover:scale-105 transition inline-flex items-center gap-2"
        >
          <MailIcon />
          <span>shashankmestry@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/shashank-mestry"
          target="_blank"
          rel="noreferrer"
          className="glass px-6 py-3 hover:scale-105 transition inline-flex items-center gap-2"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/shashankmestry"
          target="_blank"
          rel="noreferrer"
          className="glass px-6 py-3 hover:scale-105 transition inline-flex items-center gap-2"
        >
          <GithubIcon />
          <span>GitHub</span>
        </a>

        <a
          href="https://shashankmestry.com"
          target="_blank"
          rel="noreferrer"
          className="glass px-6 py-3 hover:scale-105 transition inline-flex items-center gap-2"
        >
          <GlobeIcon />
          <span>Website</span>
        </a>

      </div>

    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v9A1.5 1.5 0 0 1 19.5 18h-15A1.5 1.5 0 0 1 3 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M7.5 10.5v7M7.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm4 10.5v-4a2 2 0 1 1 4 0v4m-8 0h8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.75"
        y="3.75"
        width="16.5"
        height="16.5"
        rx="2.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M9.25 20c-3.5 1-3.5-2-5-2m10 4v-2.6a2.3 2.3 0 0 0-.65-1.8c2.2-.25 4.5-1.1 4.5-5a3.9 3.9 0 0 0-1.05-2.7 3.6 3.6 0 0 0-.06-2.66s-.84-.27-2.75 1.04a9.3 9.3 0 0 0-5 0C7.34 7 6.5 7.27 6.5 7.27A3.6 3.6 0 0 0 6.44 9.93a3.9 3.9 0 0 0-1.05 2.7c0 3.86 2.3 4.73 4.5 4.98a2.3 2.3 0 0 0-.64 1.79V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 12h17M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}