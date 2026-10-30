"use client"

import Link from "next/link"
import { Portrait } from "@/components/Portrait"
import { TagChip } from "@/components/TagChip"
import { useShell } from "@/components/shell-context"
import { about } from "@/data/about"
import { contact } from "@/data/contact"
import { experience } from "@/data/experience"
import { projects } from "@/data/projects"
import { site, moreLabel } from "@/data/site"
import { skillGroups } from "@/data/skills"
import { matchesQuery } from "@/lib/search"
import { bodyCopy, muted } from "@/lib/styles"

const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-[1.5deg]", "-rotate-[0.5deg]", "rotate-2"]

export function OverviewView({ portrait = false }: { portrait?: boolean }) {
  const { query } = useShell()
  const years = about.facts.find((fact) => fact.term === "Experience")
  const windows = experience.find((item) => item.slug === "windows")
  const calls = experience.find((item) => item.slug === "ai")
  const clients = experience.find((item) => item.slug === "mirror")
  const stats = [
    windows?.fact ? { key: "profit", figure: "$130K", text: windows.fact, label: undefined } : null,
    calls?.fact ? { key: "calls", figure: "10,000", text: calls.fact, label: undefined } : null,
    clients?.fact ? { key: "clients", figure: "100+", text: clients.fact, label: undefined } : null,
    years ? { key: "years", figure: years.detail, text: years.detail, label: years.term } : null,
  ].flatMap((item) => {
    if (!item || !matchesQuery(query, [item.text, item.figure, item.label])) return []
    return [item]
  })

  const visibleExperience = experience.filter((item) => matchesQuery(query, [item.linkLabel, item.title, item.dates, item.kicker, item.role, item.fact, item.summary]))
  const visibleProjects = projects.filter((item) => matchesQuery(query, [item.linkLabel, item.kicker, item.title, item.summary, item.role]))
  const stickers = skillGroups.flatMap((group) => group.items.slice(0, 2).map((skill) => ({ skill, href: `/skills#${group.id}` }))).filter((item) => matchesQuery(query, [item.skill, "Skills"]))
  const showHero = matchesQuery(query, [site.hero.eyebrow, site.hero.title, site.hero.deck, site.hero.paragraphs[0]])
  const showFocus = matchesQuery(query, [site.hero.paragraphs[1], "Current Focus"])
  const showWork = matchesQuery(query, [site.selectedWork.title, site.selectedWork.note]) || visibleExperience.length > 0 || visibleProjects.length > 0
  const empty = !showHero && !showFocus && stats.length === 0 && stickers.length === 0 && !showWork

  return (
    <div className="space-y-14">
      {showHero ? (
        <header id="top" className="grid items-center gap-8 md:grid-cols-[1fr_12rem]">
          <div>
            <p className="hand -rotate-2 text-3xl text-zinc-600 dark:text-zinc-300">my name is</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className="hand inline-block -rotate-2 rounded-md bg-[#ffe56a] px-3 py-1 text-2xl text-zinc-900 shadow-[2px_2px_0_rgba(0,0,0,0.08)]">
                senior project manager
              </span>
              <span className="hand inline-block rotate-2 rounded-md bg-[#8fd3ff] px-3 py-1 text-2xl text-zinc-900 shadow-[2px_2px_0_rgba(0,0,0,0.08)]">
                {contact.location}
              </span>
            </div>
            <h1 className="script mt-3 inline-block max-w-full -rotate-2 text-[clamp(3.4rem,9vw,6rem)] leading-[1.05] text-[#1d4e89] dark:text-[#d7e6f8]">{site.hero.title}</h1>
            <p className="mt-5 text-sm font-medium tracking-wide text-[#8c3b24] dark:text-[#e7c4b8]">{site.hero.eyebrow}</p>
            <p className="mt-4 max-w-md text-lg leading-relaxed font-normal text-zinc-600 dark:text-zinc-300 md:text-xl">{site.hero.deck}</p>
            <p className={`mt-4 max-w-2xl ${bodyCopy}`}>{site.hero.paragraphs[0]}</p>
          </div>
          <Portrait caption={site.wordmark} src={portrait ? "/portrait.jpg" : null} />
        </header>
      ) : null}

      {showFocus ? (
        <section aria-labelledby="current-focus" className="relative max-w-3xl rotate-[-0.4deg] rounded-md border border-black/10 bg-white/75 p-5 shadow-[4px_5px_0_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-white/5">
          <span className="tape -top-2 left-8 -rotate-2" aria-hidden="true" />
          <h2 id="current-focus" className="hand text-4xl">
            Current Focus
          </h2>
          <p className={`mt-2 ${bodyCopy}`}>{site.hero.paragraphs[1]}</p>
        </section>
      ) : null}

      {stats.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <li key={stat.key} className={`relative rounded-md border border-black/10 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5 ${rotations[index % rotations.length]}`}>
              {stat.label ? <p className="text-xs font-black tracking-wide text-zinc-950 uppercase dark:text-[#f6f1ea]">{stat.label}</p> : null}
              <p className="text-4xl font-black tracking-tight text-zinc-950 uppercase dark:text-[#f6f1ea]">{stat.figure}</p>
              {stat.text.startsWith(stat.figure) && stat.text.slice(stat.figure.length).trim() ? (
                <p className={`mt-2 ${bodyCopy}`}>{stat.text.slice(stat.figure.length).trim()}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}

      {stickers.length > 0 ? (
        <section aria-label="Skills">
          <h2 className="hand text-4xl">
            <Link href="/skills">Skills</Link>
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stickers.map((item) => (
              <li key={item.skill}>
                <Link href={item.href}>
                  <TagChip>{item.skill}</TagChip>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {showWork ? (
        <section id="work" className="scroll-mt-24">
          <h2 className="hand text-5xl">{site.selectedWork.title}</h2>
          <p className={`mt-1 ${bodyCopy}`}>{site.selectedWork.note}</p>
          <ul className="mt-6 grid gap-5 md:grid-cols-2">
            {visibleExperience.map((item, index) => (
              <WorkCard
                key={item.slug}
                href={`/experience/${item.slug}`}
                kicker={item.dates}
                label={item.linkLabel}
                title={item.title}
                text={item.fact ?? item.summary ?? item.role}
                rotate={rotations[index % rotations.length]}
              />
            ))}
            {visibleProjects.map((item, index) => (
              <WorkCard
                key={item.slug}
                href={`/projects/${item.slug}`}
                kicker={item.kicker}
                label={item.linkLabel}
                title={item.title}
                text={item.summary ?? item.role}
                rotate={rotations[(index + visibleExperience.length) % rotations.length]}
              />
            ))}
          </ul>
        </section>
      ) : null}

      {empty ? <p className={`text-sm ${muted}`}>No matches</p> : null}
    </div>
  )
}

function WorkCard({
  href,
  kicker,
  label,
  title,
  text,
  rotate,
}: {
  href: string
  kicker: string
  label: string
  title: string
  text: string
  rotate: string
}) {
  return (
    <li className={`relative rounded-md border border-black/10 bg-white/85 p-5 shadow-[5px_6px_0_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-[#2a2724] ${rotate}`}>
      <span className="tape -top-2.5 left-1/2 -translate-x-1/2 -rotate-1" aria-hidden="true" />
      <p className="hand text-2xl text-zinc-600 dark:text-zinc-300">{kicker}</p>
      <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-[#8c3b24] uppercase dark:text-[#e7c4b8]">{label}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className={`mt-2 ${bodyCopy}`}>{text}</p>
      <Link href={href} className="hand mt-3 inline-flex text-2xl underline decoration-black/30 underline-offset-4">
        {moreLabel}
      </Link>
    </li>
  )
}
