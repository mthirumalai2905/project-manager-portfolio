import { about } from "@/data/about"
import { contact } from "@/data/contact"
import { experience } from "@/data/experience"
import { projects } from "@/data/projects"
import { platforms, skillGroups, skillsIntro } from "@/data/skills"
import { site } from "@/data/site"

export type SearchHit = {
  href: string
  title: string
  group: string
  text: string
}

function hit(href: string, title: string, group: string, parts: Array<string | null | undefined>): SearchHit {
  return {
    href,
    title,
    group,
    text: parts.filter((part): part is string => Boolean(part)).join("\n"),
  }
}

const hits: SearchHit[] = [
  hit("/#top", site.hero.title, "Overview", [site.hero.eyebrow, site.hero.deck, ...site.hero.paragraphs]),
  hit("/#work", site.selectedWork.title, "Overview", [site.selectedWork.note, ...experience.map((item) => item.linkLabel), ...projects.map((item) => item.linkLabel)]),
  ...experience.map((item) =>
    hit(`/experience/${item.slug}`, item.title, "Experience", [item.linkLabel, item.kicker, item.role, item.summary, item.fact, ...item.responsibilities]),
  ),
  ...projects.map((item) =>
    hit(`/projects/${item.slug}`, item.title, "Projects", [item.linkLabel, item.kicker, item.role, item.summary, item.fact, ...item.responsibilities]),
  ),
  ...skillGroups.flatMap((group) =>
    group.items.map((skill) => hit(`/skills#${group.id}`, skill, "Skills", [group.title, skillsIntro.title, skillsIntro.lead])),
  ),
  ...platforms.map((row) => hit("/skills#platforms", row.tools, "Skills", [skillsIntro.platformsTitle, row.label])),
  hit("/about", about.heading, "About", [...about.paragraphs, ...about.facts.flatMap((fact) => [fact.term, fact.detail])]),
  hit("/contact", contact.heading, "Contact", [contact.eyebrow, contact.email, contact.phone, contact.linkedinLabel, contact.location]),
]

export function matchesQuery(query: string, parts: Array<string | null | undefined>) {
  const needle = query.trim().toLowerCase()
  if (!needle) return true
  return parts
    .filter((part): part is string => Boolean(part))
    .join("\n")
    .toLowerCase()
    .includes(needle)
}

export function searchContent(query: string) {
  const needle = query.trim().toLowerCase()
  if (!needle) return []
  return hits.filter((item) => `${item.title}\n${item.text}`.toLowerCase().includes(needle)).slice(0, 10)
}
