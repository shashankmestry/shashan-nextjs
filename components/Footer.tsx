import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-[#0B0F19]/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Shashank Mestry. Built with modern web tech.</p>

        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/#selected-work" className="hover:text-white transition">
            Work
          </Link>
          <a
            href="mailto:shashankmestry@gmail.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
