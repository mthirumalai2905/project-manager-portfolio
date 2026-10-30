import type { ReactNode } from "react"

const colors = ["bg-[#ffe56a]", "bg-[#8ed67a]", "bg-[#ff9ec4]", "bg-[#8fd3ff]", "bg-[#ffc27a]", "bg-[#d7c4ff]"]

function colorFor(label: string) {
  let total = 0
  for (const char of label) total += char.charCodeAt(0)
  return colors[total % colors.length]
}

export function TagChip({ children }: { children: ReactNode }) {
  const label = typeof children === "string" ? children : "skill"
  return (
    <span className={`skill-bounce inline-flex cursor-pointer rounded-md px-2.5 py-1 text-sm font-semibold text-zinc-900 shadow-[2px_2px_0_rgba(0,0,0,0.12)] ${colorFor(label)}`}>
      {children}
    </span>
  )
}
