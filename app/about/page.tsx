import type { Metadata } from "next"
import { AboutView } from "@/components/AboutView"
import { about } from "@/data/about"

export const metadata: Metadata = {
  title: about.heading,
}

export default function AboutPage() {
  return <AboutView />
}
