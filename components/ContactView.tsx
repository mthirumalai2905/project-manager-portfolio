"use client"

import { useShell } from "@/components/shell-context"
import { contact } from "@/data/contact"
import { matchesQuery } from "@/lib/search"
import { muted } from "@/lib/styles"

export function ContactView() {
  const { query } = useShell()
  const parts = [contact.eyebrow, contact.heading, contact.email, contact.phone, contact.linkedinLabel, contact.location]
  if (!matchesQuery(query, parts)) return <p className={`text-sm ${muted}`}>No matches</p>

  return (
    <div>
      <p className="text-sm font-medium text-[#8c3b24] dark:text-[#e7c4b8]">{contact.eyebrow}</p>
      <h1 className="hand mt-1 text-5xl">{contact.heading}</h1>
      <a href={contact.emailHref} className="hand mt-4 inline-block text-3xl underline decoration-black/30 underline-offset-4 md:text-5xl">
        {contact.email}
      </a>
      <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a href={contact.phoneHref}>{contact.phone}</a>
        <a href={contact.linkedinHref} target="_blank" rel="noopener noreferrer">
          {contact.linkedinLabel}
        </a>
        <span className={muted}>{contact.location}</span>
      </p>
    </div>
  )
}
