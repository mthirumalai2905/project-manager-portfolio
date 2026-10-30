import type { ExperienceItem } from "@/data/experience"

// TODO: add content — the calling platform chapter has no dates, status, tool list, or separate outcome line.

export type ProjectItem = {
  slug: string
  linkLabel: string
  kicker: string
  title: string
  role: string
  summary: string | null
  fact: string | null
  responsibilities: string[]
  tools: string[]
  relatedExperienceSlugs: string[]
  dates: string | null
  status: ExperienceItem["status"] | null
}

export const projects: ProjectItem[] = [
  {
    slug: "calling",
    linkLabel: "Calling platform",
    kicker: "Key project · AI calling platform",
    title: "Project delivery and the daily operation.",
    role: "Requirements, workflow, testing, deployment, and the optimisation after go-live",
    summary:
      "This is the calling platform behind the AI acquisition role, told as the project itself. The job was to get it from a business requirement to a workflow people could run every day, then keep improving it from what the calls actually did.",
    // TODO: add content
    fact: null,
    dates: null,
    status: null,
    responsibilities: [
      "Coordinated business requirements, workflow setup, testing, deployment, and ongoing optimisation.",
      "Worked with business and technical stakeholders to organise tasks, manage priorities, resolve issues, and improve the operational workflow.",
      "Supported operations handling up to 10,000 calls a day, monitoring performance and coordinating corrective action.",
      "Used call outcomes, quality checks, and feedback to find the process change that would make the next day better.",
    ],
    tools: [],
    relatedExperienceSlugs: ["ai"],
  },
]
