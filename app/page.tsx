import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Story from "@/components/Story";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white">
      <Hero />
      <Services />
      <Work />
      <Story />
      <CTA />
    </main>
  );
}