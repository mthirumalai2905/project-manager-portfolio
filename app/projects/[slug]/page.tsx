import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DetailLayout } from "@/components/DetailLayout"
import { projects } from "@/data/projects"
import { getProject, projectNeighbors, relatedExperience } from "@/lib/content"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getProject(slug)
  if (!item) return {}
  return { title: item.title }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const item = getProject(slug)
  if (!item) notFound()
  const neighbors = projectNeighbors(slug)
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
      related={relatedExperience(item.relatedExperienceSlugs)}
      relatedLabel="Related"
      previous={neighbors.previous}
      next={neighbors.next}
    />
  )
}
