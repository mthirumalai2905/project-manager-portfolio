"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, type ReactNode } from "react"
import { Icon } from "@/components/icons"
import { ShellProvider, useShell } from "@/components/shell-context"
import { contact } from "@/data/contact"
import { site } from "@/data/site"
import { searchContent } from "@/lib/search"
import { cn } from "@/lib/styles"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <ShellProvider>
      <ShellFrame>{children}</ShellFrame>
    </ShellProvider>
  )
}

function ShellFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const { menuOpen, setMenuOpen, query, setQuery } = useShell()
  const [dark, setDark] = useState(false)
  const results = searchContent(query)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, setMenuOpen])

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    const mobile = window.matchMedia("(max-width: 767px)").matches
    document.body.classList.toggle("overflow-hidden", menuOpen && mobile)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [menuOpen, setMenuOpen])

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark")
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setDark(next)
  }

  return (
    <div className="relative z-10 min-h-screen">
      <a
        href="/#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-white"
      >
        {site.skip}
      </a>
      {menuOpen ? (
        <button type="button" aria-label="Close menu" className="fixed inset-0 z-30 bg-zinc-950/30 md:hidden" onClick={() => setMenuOpen(false)} />
      ) : null}
      <div className="notebook-sheet mx-auto min-h-screen px-5 py-5 sm:px-14 sm:py-7">
        <header className={cn("relative flex flex-wrap items-center gap-3", menuOpen ? "z-40" : "z-20")}>
          <button
            id="menuBtn"
            type="button"
            className="hand inline-flex min-h-11 items-center gap-1 px-1 text-xl md:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name="menu" />
            {site.menu}
          </button>
          <nav
            id="menu"
            aria-label="Primary"
            className={cn(
              "items-center gap-x-5 gap-y-1 text-sm font-semibold tracking-[0.14em] uppercase",
              menuOpen
                ? "flex w-full flex-col items-stretch rounded-2xl border border-black/10 bg-[#fffdf8] p-2 shadow-md dark:border-white/10 dark:bg-[#2a2724] md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none"
                : "hidden md:flex",
            )}
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 hover:bg-black/5 hover:text-zinc-950 md:px-0 md:py-0 md:hover:bg-transparent dark:hover:bg-white/10 dark:hover:text-white",
                  isActive(pathname, item.href) ? "underline decoration-2 underline-offset-4" : "text-zinc-600 dark:text-zinc-300",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="relative ml-auto flex items-center gap-2">
            <label className="sr-only" htmlFor="search">
              Search
            </label>
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
              className="hand h-9 w-28 rounded-full border border-black/10 bg-white/70 px-3 text-lg outline-none placeholder:text-zinc-400 sm:w-36 dark:border-white/15 dark:bg-black/20"
            />
            {query.trim() ? (
              <ul id="search-results" role="listbox" className="absolute top-11 right-0 z-30 max-h-80 w-64 overflow-auto rounded-2xl border border-black/10 bg-[#fffdf8] p-1 shadow-lg dark:border-white/10 dark:bg-[#2a2724]">
                {results.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-zinc-500">No matches</li>
                ) : (
                  results.map((result) => (
                    <li key={`${result.href}-${result.title}`} role="option">
                      <Link href={result.href} className="block rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setQuery("")}>
                        <span className="block text-xs text-zinc-500">{result.group}</span>
                        <span className="block text-sm">{result.title}</span>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            ) : null}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 dark:border-white/15 dark:bg-black/30"
            >
              <Icon name={dark ? "sun" : "moon"} />
            </button>
            <Link href="/contact" className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white uppercase dark:bg-[#f6f1ea] dark:text-zinc-950">
              {contact.eyebrow}
            </Link>
          </div>
        </header>
        <main id="main" className="relative z-10 mt-8 min-w-0">
          {children}
        </main>
        <footer className="relative z-10 mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-5 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
          <span>{site.wordmark}</span>
          <span>{site.footerRole}</span>
          <a href={contact.emailHref}>{site.emailLabel}</a>
          <span>© {site.year}</span>
        </footer>
      </div>
    </div>
  )
}
