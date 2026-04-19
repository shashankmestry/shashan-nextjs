import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const Services = dynamic(() => import("@/components/Services"));
const Work = dynamic(() => import("@/components/Work"));
const Story = dynamic(() => import("@/components/Story"));
const CTA = dynamic(() => import("@/components/CTA"));

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