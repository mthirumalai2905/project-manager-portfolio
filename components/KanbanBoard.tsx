"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { MoreLink } from "@/components/MoreLink"
import type { BoardColumn } from "@/lib/content"
import { bodyCopy, card, muted } from "@/lib/styles"

export function KanbanBoard({ columns }: { columns: BoardColumn[] }) {
  const reduce = useReducedMotion()
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {columns.map((column) => (
        <section key={column.id} aria-label={column.title} className="min-h-40 rounded-md bg-black/5 p-2 dark:bg-white/5">
          <header className="flex items-center justify-between px-2 py-2">
            <h3 className="text-sm font-medium">{column.title}</h3>
            <span className={`text-xs ${muted}`}>{column.items.length}</span>
          </header>
          <div className="space-y-2">
            {column.items.map((item, index) => (
              <motion.article
                key={item.slug}
                className={`${card} p-3`}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
              >
                <p className={`text-xs ${muted}`}>{item.linkLabel}</p>
                <h4 className="mt-1 font-medium leading-snug">
                  <Link href={`/projects/${item.slug}`} className="hover:underline">
                    {item.title}
                  </Link>
                </h4>
                <p className={`mt-1 text-xs ${muted}`}>{item.kicker}</p>
                {item.summary ? <p className={`mt-2 ${bodyCopy}`}>{item.summary}</p> : null}
                <MoreLink href={`/projects/${item.slug}`} />
              </motion.article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
