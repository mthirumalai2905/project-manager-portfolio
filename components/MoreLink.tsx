import Link from "next/link"
import { moreLabel } from "@/data/site"
import { linkAccent } from "@/lib/styles"

export function MoreLink({ href }: { href: string }) {
  return (
    <Link href={href} className={`${linkAccent} mt-3 inline-flex`}>
      {moreLabel}
    </Link>
  )
}
