import { card } from "@/lib/styles"

export function StatCard({ figure, text, label }: { figure: string; text: string; label?: string }) {
  const rest = text.startsWith(figure) ? text.slice(figure.length).trim() : text
  return (
    <article className={`${card} p-4`}>
      {label ? <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{label}</p> : null}
      <p className="mt-2 text-2xl font-semibold tracking-tight">{figure}</p>
      {rest ? <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{rest}</p> : null}
    </article>
  )
}
