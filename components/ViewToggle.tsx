"use client"

import { cn } from "@/lib/styles"

const views = [
  { id: "board", label: "Board" },
  { id: "list", label: "List" },
  { id: "timeline", label: "Timeline" },
] as const

export type ProjectView = (typeof views)[number]["id"]

export function ViewToggle({ value, onChange }: { value: ProjectView; onChange: (view: ProjectView) => void }) {
  return (
    <div role="group" aria-label="Project view" className="inline-flex rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900">
      {views.map((view) => {
        const selected = value === view.id
        return (
          <button
            key={view.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(view.id)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm",
              selected ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800",
            )}
          >
            {view.label}
          </button>
        )
      })}
    </div>
  )
}
