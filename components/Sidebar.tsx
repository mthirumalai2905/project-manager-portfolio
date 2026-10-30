"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { contact } from "@/data/contact"
import { site } from "@/data/site"
import { Icon } from "@/components/icons"
import { useShell } from "@/components/shell-context"
import { cn } from "@/lib/styles"

const primary = [
  { href: "/", label: "Overview", icon: "overview" as const },
  { href: "/experience", label: "Experience", icon: "experience" as const },
  { href: "/projects", label: "Projects", icon: "projects" as const },
]

const secondary = [
  { href: "/skills", label: "Skills", icon: "skills" as const },
  { href: "/about", label: "About", icon: "about" as const },
  { href: "/contact", label: "Contact", icon: "contact" as const },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Sidebar() {
  const pathname = usePathname()
  const { menuOpen, setMenuOpen } = useShell()
  const menuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, setMenuOpen])

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches
    if (menuOpen && mobile) {
      menuRef.current?.querySelector<HTMLElement>("a")?.focus()
    }
  }, [menuOpen])

  return (
    <aside
      ref={menuRef}
      id="menu"
      className={cn(
        "z-40 flex w-[15.25rem] flex-col overflow-hidden rounded-[1.6rem]",
        "border border-white/80 bg-white/80 shadow-[0_24px_60px_-28px_rgba(24,24,27,0.55),0_0_0_1px_rgba(24,24,27,0.04)] backdrop-blur-2xl",
        "dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]",
        "max-md:fixed max-md:bottom-3 max-md:left-3 max-md:top-3",
        "md:fixed md:bottom-4 md:left-4 md:top-4",
        menuOpen ? "flex" : "hidden md:flex",
      )}
    >
      <Link href="/#top" className="flex items-center gap-3 px-4 pb-3 pt-4">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
        >
          B
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold tracking-tight">{site.wordmark}</span>
          <span className="block truncate text-xs text-zinc-500">{site.footerRole}</span>
        </span>
      </Link>
      <nav aria-label="Primary" className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-3 pb-3">
        <div>
          <p className="px-3 pb-1.5 text-[11px] font-medium tracking-[0.14em] text-zinc-400 uppercase">{site.workLabel}</p>
          <ul className="space-y-0.5">
            {primary.map((item) => (
              <li key={item.href}>
                <NavLink item={item} active={isActive(pathname, item.href)} />
              </li>
            ))}
          </ul>
        </div>
        <ul className="space-y-0.5">
          {secondary.map((item) => (
            <li key={item.href}>
              <NavLink item={item} active={isActive(pathname, item.href)} />
            </li>
          ))}
        </ul>
        <a
          href={contact.emailHref}
          className="mt-auto flex items-center gap-2 rounded-full px-3 py-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-900/5 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-white/8 dark:hover:text-zinc-100"
        >
          <Icon name="contact" />
          {site.emailLabel}
        </a>
      </nav>
    </aside>
  )
}

function NavLink({
  item,
  active,
}: {
  item: { href: string; label: string; icon: "overview" | "experience" | "projects" | "skills" | "about" | "contact" }
  active: boolean
}) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-2.5 rounded-full px-3 py-2 text-sm transition-colors",
        active
          ? "bg-white font-medium text-[#8c3b24] shadow-[0_1px_2px_rgba(24,24,27,0.06),0_6px_16px_-10px_rgba(24,24,27,0.45)] ring-1 ring-black/5 dark:bg-zinc-800 dark:text-[#e7c4b8] dark:ring-white/10"
          : "text-zinc-600 hover:bg-zinc-900/5 dark:text-zinc-300 dark:hover:bg-white/6",
      )}
    >
      <Icon name={item.icon} />
      {item.label}
    </Link>
  )
}
