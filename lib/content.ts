import { about } from "@/data/about"
import { contact } from "@/data/contact"
import { experience, type ExperienceItem } from "@/data/experience"
import { projects, type ProjectItem } from "@/data/projects"
import { platforms, skillGroups } from "@/data/skills"
import { site } from "@/data/site"
import type { Neighbor, RelatedLink } from "@/data/types"

export function getExperience(slug: string) {
  return experience.find((item) => item.slug === slug) ?? null
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug) ?? null
}

export function chapterLinks() {
  return [
    ...experience.map((item) => ({
      href: `/experience/${item.slug}`,
      label: item.linkLabel,
    })),
    ...projects.map((item) => ({
      href: `/projects/${item.slug}`,
      label: item.linkLabel,
    })),
  ]
}

function neighbor(item: { slug: string; title: string } | undefined, base: string): Neighbor | null {
  if (!item) return null
  return { href: `${base}/${item.slug}`, title: item.title }
}

export function experienceNeighbors(slug: string) {
  const index = experience.findIndex((item) => item.slug === slug)
  if (index < 0) return { previous: null, next: null }
  return {
    previous: neighbor(experience[index - 1], "/experience"),
    next: neighbor(experience[index + 1], "/experience"),
  }
}

export function projectNeighbors(slug: string) {
  const index = projects.findIndex((item) => item.slug === slug)
  if (index < 0) return { previous: null, next: null }
  return {
    previous: neighbor(projects[index - 1], "/projects"),
    next: neighbor(projects[index + 1], "/projects"),
  }
}

export function relatedProjects(slugs: string[]): RelatedLink[] {
  return slugs.flatMap((slug) => {
    const project = getProject(slug)
    if (!project) return []
    return [{ href: `/projects/${project.slug}`, title: project.title, kicker: project.kicker }]
  })
}

export function relatedExperience(slugs: string[]): RelatedLink[] {
  return slugs.flatMap((slug) => {
    const item = getExperience(slug)
    if (!item) return []
    return [{ href: `/experience/${item.slug}`, title: item.title, kicker: item.kicker }]
  })
}

export type BoardColumn = {
  id: string
  title: string
  items: ProjectItem[]
}

export function projectColumns(items: ProjectItem[]): BoardColumn[] {
  return [
    { id: "key-project", title: "Key project", items },
    { id: "in-progress", title: "In Progress", items: [] },
    { id: "completed", title: "Completed", items: [] },
    { id: "shipped", title: "Shipped", items: [] },
  ]
}

export function experienceText(item: ExperienceItem) {
  return [item.linkLabel, item.kicker, item.title, item.role, item.summary, item.fact, ...item.responsibilities]
}

export function projectText(item: ProjectItem) {
  return [item.linkLabel, item.kicker, item.title, item.role, item.summary, item.fact, item.dates, ...item.responsibilities]
}

export function overviewText() {
  return [
    site.hero.eyebrow,
    site.hero.title,
    site.hero.deck,
    ...site.hero.paragraphs,
    site.selectedWork.title,
    site.selectedWork.note,
    about.facts.find((fact) => fact.term === "Experience")?.detail,
  ]
}

export { about, contact, experience, platforms, projects, skillGroups, site }
