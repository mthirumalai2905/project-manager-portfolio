import Link from "next/link"

export default function NotFound() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-2xl font-semibold tracking-tight">Not found</h1>
      <Link href="/" className="mt-6 inline-block text-sm font-medium text-[#8c3b24] dark:text-[#e7c4b8]">
        Overview
      </Link>
    </div>
  )
}
