"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import { KanbanBoard } from "@/components/KanbanBoard"
import { ProjectTable } from "@/components/ProjectTable"
import { TimelineBar } from "@/components/TimelineBar"
import { useShell } from "@/components/shell-context"
import { ViewToggle, type ProjectView } from "@/components/ViewToggle"
import { projects } from "@/data/projects"
import { projectColumns } from "@/lib/content"
import { matchesQuery } from "@/lib/search"
import { muted } from "@/lib/styles"

export function ProjectsView() {
  const { query } = useShell()
  const reduce = useReducedMotion()
  const [view, setView] = useState<ProjectView>("board")
  const items = projects.filter((item) =>
    matchesQuery(query, [item.linkLabel, item.kicker, item.title, item.role, item.summary, item.fact, ...item.responsibilities]),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="hand text-5xl">Projects</h1>
        <ViewToggle value={view} onChange={setView} />
      </div>
      {items.length === 0 ? (
        <p className={`text-sm ${muted}`}>No matches</p>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={view}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {view === "board" ? <KanbanBoard columns={projectColumns(items)} /> : null}
            {view === "list" ? <ProjectTable rows={items} /> : null}
            {view === "timeline" ? <TimelineBar items={items} /> : null}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
