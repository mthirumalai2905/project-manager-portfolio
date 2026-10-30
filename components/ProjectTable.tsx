import { MoreLink } from "@/components/MoreLink"
import { StatusBadge } from "@/components/StatusBadge"
import { moreLabel } from "@/data/site"
import type { ProjectItem } from "@/data/projects"
import { bodyCopy, muted } from "@/lib/styles"

export function ProjectTable({ rows }: { rows: ProjectItem[] }) {
  return (
    <div className="max-w-full overflow-x-auto rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <caption className="sr-only">Projects</caption>
        <thead className="border-b border-zinc-200 text-xs font-medium text-zinc-500 dark:border-zinc-800">
          <tr>
            <th scope="col" className="px-4 py-3 font-medium">
              Title
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Role
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Status
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              <span className="sr-only">{moreLabel}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.slug} className="border-b border-zinc-100 align-top last:border-0 dark:border-zinc-800">
              <td className="px-4 py-4">
                <p className="font-medium">{row.title}</p>
                <p className={`mt-1 text-xs ${muted}`}>{row.linkLabel}</p>
                <p className={`mt-1 text-xs ${muted}`}>{row.kicker}</p>
                {row.summary ? <p className={`mt-2 ${bodyCopy}`}>{row.summary}</p> : null}
              </td>
              <td className="px-4 py-4">{row.role}</td>
              <td className="px-4 py-4">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-4">
                <MoreLink href={`/projects/${row.slug}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
