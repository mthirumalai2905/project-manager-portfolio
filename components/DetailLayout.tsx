import Link from "next/link"
import { MoreLink } from "@/components/MoreLink"
import { ProgressBar, StatusBadge } from "@/components/StatusBadge"
import { TagChip } from "@/components/TagChip"
import type { Neighbor, RelatedLink, WorkStatus } from "@/data/types"
import { bodyCopy, card, muted, sectionLabel } from "@/lib/styles"

export function DetailLayout({
  kicker,
  linkLabel,
  title,
  role,
  status,
  fact,
  summary,
  responsibilities,
  tools,
  related,
  relatedLabel,
  previous,
  next,
}: {
  kicker: string
  linkLabel: string
  title: string
  role: string
  status: WorkStatus | null
  fact: string | null
  summary: string | null
  responsibilities: string[]
  tools: string[]
  related: RelatedLink[]
  relatedLabel: string
  previous: Neighbor | null
  next: Neighbor | null
}) {
  return (
    <article className="space-y-8">
      <header className={`${card} p-6 md:p-8`}>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-medium text-[#8c3b24] dark:text-[#e7c4b8]">{kicker}</p>
          <StatusBadge status={status} />
        </div>
        <p className={`mt-3 text-sm ${muted}`}>{linkLabel}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        <p className={`mt-3 ${bodyCopy}`}>{role}</p>
        <ProgressBar status={status} />
      </header>

      {fact ? (
        <section aria-labelledby="outcomes">
          <h2 id="outcomes" className={sectionLabel}>
            Key outcomes
          </h2>
          <p className={`mt-3 max-w-3xl ${bodyCopy}`}>{fact}</p>
        </section>
      ) : null}

      {summary ? (
        <section aria-labelledby="summary">
          <h2 id="summary" className={sectionLabel}>
            Summary
          </h2>
          <p className={`mt-3 max-w-3xl ${bodyCopy}`}>{summary}</p>
        </section>
      ) : null}

      <section aria-labelledby="responsibilities">
        <h2 id="responsibilities" className={sectionLabel}>
          Responsibilities
        </h2>
        <ul className="mt-3 max-w-3xl divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
          {responsibilities.map((item) => (
            <li key={item} className={`px-4 py-3 ${bodyCopy}`}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {tools.length > 0 ? (
        <section aria-labelledby="tools">
          <h2 id="tools" className={sectionLabel}>
            Tools
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool}>
                <TagChip>{tool}</TagChip>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section aria-labelledby="related">
          <h2 id="related" className={sectionLabel}>
            {relatedLabel}
          </h2>
          <ul className="mt-3 grid gap-3">
            {related.map((item) => (
              <li key={item.href} className={`${card} p-4`}>
                <p className={`text-xs ${muted}`}>{item.kicker}</p>
                <p className="mt-1 font-medium">{item.title}</p>
                <MoreLink href={item.href} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <nav aria-label="Pagination" className="grid gap-3 border-t border-zinc-200 pt-6 sm:grid-cols-2 dark:border-zinc-800">
        {previous ? (
          <Link href={previous.href} className={`${card} p-4`}>
            <span className={`text-xs ${muted}`}>Previous</span>
            <span className="mt-1 block font-medium">{previous.title}</span>
          </Link>
        ) : (
          <span className={`text-xs ${muted}`}>Previous</span>
        )}
        {next ? (
          <Link href={next.href} className={`${card} p-4 sm:text-right`}>
            <span className={`text-xs ${muted}`}>Next</span>
            <span className="mt-1 block font-medium">{next.title}</span>
          </Link>
        ) : (
          <span className={`text-xs sm:text-right ${muted}`}>Next</span>
        )}
      </nav>
    </article>
  )
}
