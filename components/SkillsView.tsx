"use client"

import { TagChip } from "@/components/TagChip"
import { useShell } from "@/components/shell-context"
import { platforms, skillGroups, skillsIntro } from "@/data/skills"
import { matchesQuery } from "@/lib/search"
import { bodyCopy, muted } from "@/lib/styles"

export function SkillsView() {
  const { query } = useShell()
  const groups = skillGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((skill) => matchesQuery(query, [skill, group.title, skillsIntro.title, skillsIntro.lead, skillsIntro.eyebrow])),
    }))
    .filter((group) => group.items.length > 0 || matchesQuery(query, [group.title]))
  const platformRows = platforms.filter((row) =>
    matchesQuery(query, [row.label, row.tools, skillsIntro.platformsTitle, skillsIntro.title]),
  )
  const showIntro = matchesQuery(query, [skillsIntro.eyebrow, skillsIntro.title, skillsIntro.lead])

  return (
    <div className="space-y-8">
      {showIntro ? (
        <header>
          <p className="text-sm font-medium text-[#8c3b24] dark:text-[#e7c4b8]">{skillsIntro.eyebrow}</p>
          <h1 className="hand mt-1 text-5xl">{skillsIntro.title}</h1>
          <p className={`mt-3 max-w-2xl ${bodyCopy}`}>{skillsIntro.lead}</p>
        </header>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-2">
        {groups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24">
            <h2 className="hand text-4xl">{group.title}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill}>
                  <TagChip>{skill}</TagChip>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {platformRows.length > 0 ? (
        <section id="platforms" className="scroll-mt-24">
          <h2 className="hand text-4xl">{skillsIntro.platformsTitle}</h2>
          <ul className="space-y-4 px-4 py-4">
            {platformRows.map((row) => (
              <li key={row.label} className="flex flex-col gap-2 sm:flex-row sm:items-start">
                <p className="w-full shrink-0 text-sm font-medium sm:w-44 sm:pt-1">{row.label}</p>
                <ul className="flex min-w-0 flex-wrap gap-2">
                  {row.tools.split(", ").map((tool) => (
                    <li key={tool}>
                      <TagChip>{tool}</TagChip>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {!showIntro && groups.length === 0 && platformRows.length === 0 ? <p className={`text-sm ${muted}`}>No matches</p> : null}
    </div>
  )
}
