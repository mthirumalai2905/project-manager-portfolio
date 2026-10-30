"use client"

import { useShell } from "@/components/shell-context"
import { about } from "@/data/about"
import { matchesQuery } from "@/lib/search"
import { bodyCopy, muted } from "@/lib/styles"

export function AboutView() {
  const { query } = useShell()
  const paragraphs = about.paragraphs.filter((paragraph) => matchesQuery(query, [paragraph, about.heading]))
  const facts = about.facts.filter((fact) => matchesQuery(query, [fact.term, fact.detail, about.heading]))
  const showHeading = matchesQuery(query, [about.heading]) || paragraphs.length > 0 || facts.length > 0

  if (!showHeading) return <p className={`text-sm ${muted}`}>No matches</p>

  return (
    <div className="grid gap-8 md:grid-cols-[180px_1fr]">
      <h1 className="hand text-5xl">{about.heading}</h1>
      <div>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={`max-w-3xl ${bodyCopy} mt-4 first:mt-0`}>
            {paragraph}
          </p>
        ))}
        {facts.length > 0 ? (
          <dl className="mt-8">
            {facts.map((fact) => (
              <div key={fact.term} className="grid gap-2 border-t border-zinc-200 py-3 sm:grid-cols-[140px_1fr] dark:border-zinc-800">
                <dt className={muted}>{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </div>
  )
}
