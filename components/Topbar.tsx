"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Icon } from "@/components/icons"
import { useShell } from "@/components/shell-context"
import { getExperience, getProject } from "@/lib/content"
import { searchContent } from "@/lib/search"
import { site } from "@/data/site"

export function Topbar() {
  const pathname = usePathname()
  const { query, setQuery, menuOpen, setMenuOpen } = useShell()
  const results = searchContent(query)

  return (
    <header className="sticky top-0 z-20 min-w-0 border-b border-[#8c3b24]/10 bg-[#f7f1ea]/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#12100e]/70">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 px-4 py-3 md:h-16 md:flex-nowrap md:px-8 md:py-0">
        <button
          id="menuBtn"
          type="button"
          className="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name="menu" />
          {site.menu}
        </button>
        <div className="min-w-0 flex-1">
          <Breadcrumbs items={crumbsFor(pathname)} />
        </div>
        <div className="relative order-last w-full md:order-none md:w-64">
          <label className="sr-only" htmlFor="search">
            Search
          </label>
          <span className="pointer-events-none absolute top-2 left-2.5 text-zinc-400">
            <Icon name="search" />
          </span>
          <input
            id="search"
            type="search"
            value={query}
            placeholder="Search"
            aria-controls="search-results"
            aria-expanded={query.trim().length > 0}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setQuery("")
            }}
            className="h-8 w-full rounded-lg border border-zinc-200 bg-white pr-3 pl-8 text-sm outline-none dark:border-zinc-700 dark:bg-zinc-900"
          />
          {query.trim() ? (
            <ul id="search-results" role="listbox" className="absolute left-0 right-0 z-30 mt-2 max-h-80 overflow-auto rounded-xl border border-zinc-200 bg-white p-1 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
              {results.length === 0 ? (
                <li className="px-3 py-2 text-sm text-zinc-500">No matches</li>
              ) : (
                results.map((result) => (
                  <li key={`${result.href}-${result.title}`} role="option">
                    <Link href={result.href} className="block rounded-lg px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800" onClick={() => setQuery("")}>
                      <span className="block text-xs text-zinc-500">{result.group}</span>
                      <span className="block text-sm">{result.title}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          ) : null}
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

function crumbsFor(pathname: string) {
  if (pathname === "/") return [{ label: "Overview" }]
  const [section, slug] = pathname.split("/").filter(Boolean)
  if (section === "experience") {
    const item = slug ? getExperience(slug) : null
    return item
      ? [{ label: "Experience", href: "/experience" }, { label: item.title }]
      : [{ label: "Experience" }]
  }
  if (section === "projects") {
    const item = slug ? getProject(slug) : null
    return item ? [{ label: "Projects", href: "/projects" }, { label: item.title }] : [{ label: "Projects" }]
  }
  if (section === "skills") return [{ label: "Skills" }]
  if (section === "about") return [{ label: "About" }]
  if (section === "contact") return [{ label: "Contact" }]
  return [{ label: "Overview", href: "/" }]
}

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggle() {
    const next = !document.documentElement.classList.contains("dark")
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
    >
      <Icon name={dark ? "sun" : "moon"} />
    </button>
  )
}
