import Link from "next/link"

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex min-w-0 flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const current = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-zinc-400">
                  /
                </span>
              ) : null}
              {item.href && !current ? (
                <Link href={item.href} className="truncate text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="truncate font-medium">
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
