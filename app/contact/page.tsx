import type { Metadata } from "next"
import { ContactView } from "@/components/ContactView"
import { contact } from "@/data/contact"

export const metadata: Metadata = {
  title: contact.eyebrow,
}

export default function ContactPage() {
  return <ContactView />
}
