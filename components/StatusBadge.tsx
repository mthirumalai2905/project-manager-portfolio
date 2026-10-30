import type { WorkStatus } from "@/data/types"
import { cn } from "@/lib/styles"

const labels: Record<WorkStatus, string> = {
  "in-progress": "In Progress",
  completed: "Completed",
}

export function StatusBadge({ status }: { status: WorkStatus | null }) {
  if (!status) return null
  const label = labels[status]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        status === "completed"
          ? "bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-200 dark:ring-emerald-900"
          : "bg-amber-50 text-amber-900 ring-amber-200 dark:bg-amber-950 dark:text-amber-100 dark:ring-amber-900",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", status === "completed" ? "bg-emerald-500" : "bg-amber-500")} aria-hidden="true" />
      {label}
    </span>
  )
}

export function ProgressBar({ status }: { status: WorkStatus | null }) {
  if (!status) return null
  const done = status === "completed"
  return (
    <div
      className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800"
      role="progressbar"
      aria-label={done ? "Completed" : "In Progress"}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={done ? 100 : undefined}
      aria-busy={done ? undefined : true}
    >
      {done ? (
        <div className="h-full w-full rounded-full bg-[#8c3b24]" />
      ) : (
        <div className="indeterminate-bar h-full w-1/3 rounded-full bg-[#8c3b24] motion-reduce:w-full motion-reduce:opacity-40" />
      )}
    </div>
  )
}
