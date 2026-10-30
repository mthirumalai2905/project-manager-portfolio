"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"

type ShellContextValue = {
  query: string
  setQuery: (query: string) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const ShellContext = createContext<ShellContextValue | null>(null)

export function ShellProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const value = useMemo(() => ({ query, setQuery, menuOpen, setMenuOpen }), [query, menuOpen])
  return <ShellContext.Provider value={value}>{children}</ShellContext.Provider>
}

export function useShell() {
  const context = useContext(ShellContext)
  if (!context) {
    throw new Error("useShell must be used within ShellProvider")
  }
  return context
}
