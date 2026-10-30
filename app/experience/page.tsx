import type { Metadata } from "next"
import { ExperienceView } from "@/components/ExperienceView"

export const metadata: Metadata = {
  title: "Experience",
}

export default function ExperiencePage() {
  return <ExperienceView />
}
