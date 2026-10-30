import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DetailLayout } from "@/components/DetailLayout"
import { experience } from "@/data/experience"
import { experienceNeighbors, getExperience, relatedProjects } from "@/lib/content"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getExperience(slug)
  if (!item) return {}
  return { title: item.title }
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params
  const item = getExperience(slug)
  if (!item) notFound()
  const neighbors = experienceNeighbors(slug)
  return (
    <DetailLayout
      kicker={item.kicker}
      linkLabel={item.linkLabel}
      title={item.title}
      role={item.role}
      status={item.status}
      fact={item.fact}
      summary={item.summary}
      responsibilities={item.responsibilities}
      tools={[...item.tools]}
      related={relatedProjects(item.relatedProjectSlugs)}
      relatedLabel="Related projects"
      previous={neighbors.previous}
      next={neighbors.next}
    />
  )
}
