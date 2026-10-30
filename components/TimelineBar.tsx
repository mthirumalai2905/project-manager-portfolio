import { MoreLink } from "@/components/MoreLink"
import type { ProjectItem } from "@/data/projects"
import { bodyCopy, card, muted } from "@/lib/styles"

export function TimelineBar({ items }: { items: ProjectItem[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item) => (
        <li key={item.slug} className={`${card} p-4`}>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-base font-semibold">{item.title}</h2>
            <p className={`text-sm ${muted}`}>{item.kicker}</p>
          </div>
          <p className={`mt-1 text-xs ${muted}`}>{item.linkLabel}</p>
          <div className="relative mt-4 h-10 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800" aria-hidden="true">
            <div className="absolute inset-y-1 right-1 left-1 rounded-md bg-[#8c3b24]/15" />
          </div>
          {item.summary ? <p className={`mt-3 ${bodyCopy}`}>{item.summary}</p> : null}
          <MoreLink href={`/projects/${item.slug}`} />
        </li>
      ))}
    </ol>
  )
}
