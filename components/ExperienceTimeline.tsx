"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MoreLink } from "@/components/MoreLink"
import { ProgressBar, StatusBadge } from "@/components/StatusBadge"
import type { ExperienceItem } from "@/data/experience"
import { bodyCopy, card, muted } from "@/lib/styles"

export function ExperienceTimeline({ items, variant }: { items: ExperienceItem[]; variant: "full" | "strip" }) {
  const reduce = useReducedMotion()
  if (variant === "strip") {
    return (
      <ol className="flex min-w-0 max-w-full gap-3 overflow-x-auto pb-2">
        {items.map((item) => (
          <li key={item.slug} className={`${card} min-w-56 shrink-0 p-4`}>
            <StatusBadge status={item.status} />
            <p className={`mt-3 text-xs ${muted}`}>{item.dates}</p>
            <p className="mt-1 text-sm font-medium">{item.linkLabel}</p>
            <p className={`mt-1 text-sm ${muted}`}>{item.title}</p>
            <MoreLink href={`/experience/${item.slug}`} />
          </li>
        ))}
      </ol>
    )
  }

  return (
    <ol className="relative space-y-6 border-l border-zinc-200 pl-6 dark:border-zinc-800">
      {items.map((item, index) => (
        <li key={item.slug} id={item.slug} className="relative scroll-mt-24">
          <span className="absolute top-6 -left-[31px] h-3 w-3 rounded-full bg-white ring-2 ring-[#8c3b24] dark:bg-zinc-950" aria-hidden="true" />
          <motion.article
            className={`${card} p-5`}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: index * 0.04 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-medium text-[#8c3b24] dark:text-[#e7c4b8]">{item.kicker}</p>
              <StatusBadge status={item.status} />
            </div>
            <p className={`mt-2 text-xs ${muted}`}>{item.linkLabel}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</h2>
            <p className={`mt-1 text-sm ${muted}`}>{item.role}</p>
            {item.fact ? <p className={`mt-4 ${bodyCopy}`}>{item.fact}</p> : null}
            {item.summary ? <p className={`mt-3 ${bodyCopy}`}>{item.summary}</p> : null}
            <ProgressBar status={item.status} />
            <MoreLink href={`/experience/${item.slug}`} />
          </motion.article>
        </li>
      ))}
    </ol>
  )
}
