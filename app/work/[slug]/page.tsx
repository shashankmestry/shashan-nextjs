import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = caseStudies.find((p) => p.slug === slug);

  if (!data) return notFound();

  return <CaseStudyLayout data={data} />;
}