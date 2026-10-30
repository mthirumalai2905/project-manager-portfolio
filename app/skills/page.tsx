import type { Metadata } from "next"
import { SkillsView } from "@/components/SkillsView"
import { skillsIntro } from "@/data/skills"

export const metadata: Metadata = {
  title: skillsIntro.eyebrow,
}

export default function SkillsPage() {
  return <SkillsView />
}
