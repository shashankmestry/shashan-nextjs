import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";
import { SITE_NAME, getMetadataBase } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = caseStudies.find((p) => p.slug === slug);
  if (!data) return {};

  const title = `${data.title} — Case study`;
  const description = data.subtitle;
  const base = getMetadataBase();
  const ogImage = data.heroImage
    ? [{ url: data.heroImage, alt: data.title }]
    : [{ url: new URL("/opengraph-image", base).toString(), alt: data.title }];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/work/${slug}`,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage.map((img) => img.url),
    },
    alternates: {
      canonical: `/work/${slug}`,
    },
    keywords: [...data.tech, SITE_NAME, "case study"],
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = caseStudies.find((p) => p.slug === slug);

  if (!data) return notFound();

  return <CaseStudyLayout data={data} />;
}