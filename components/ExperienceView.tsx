"use client"

import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { useShell } from "@/components/shell-context"
import { experience } from "@/data/experience"
import { matchesQuery } from "@/lib/search"
import { muted } from "@/lib/styles"

export function ExperienceView() {
  const { query } = useShell()
  const items = experience.filter((item) =>
    matchesQuery(query, [item.linkLabel, item.kicker, item.title, item.role, item.summary, item.fact, item.dates, ...item.responsibilities]),
  )

  return (
    <div className="space-y-6">
      <h1 className="hand text-5xl">Experience</h1>
      {items.length === 0 ? <p className={`text-sm ${muted}`}>No matches</p> : <ExperienceTimeline items={items} variant="full" />}
    </div>
  )
}
