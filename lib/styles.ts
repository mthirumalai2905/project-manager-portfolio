export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ")
}

export const card =
  "rounded-md border border-black/10 bg-white/90 text-zinc-900 shadow-[4px_5px_0_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-[#2a2724] dark:text-[#f6f1ea]"

export const muted = "text-zinc-500 dark:text-zinc-400"

export const bodyCopy = "text-sm leading-6 text-zinc-600 dark:text-zinc-300"

export const linkAccent =
  "hand text-2xl text-zinc-900 underline decoration-black/30 underline-offset-4 dark:text-[#f6f1ea]"

export const sectionLabel = "hand text-3xl text-zinc-900 dark:text-[#f6f1ea]"
