import type { WorkStatus } from "@/data/types"

// TODO: add content — no role names a tool, a priority, or a progress percent.
// Platforms stay in data/skills.ts. Status below is taken from the date line:
// a line that says Present is in progress, and an ended range is completed.

export type ExperienceItem = {
  slug: string
  linkLabel: string
  kicker: string
  title: string
  role: string
  company: string
  location: string
  dates: string
  status: WorkStatus
  summary: string | null
  fact: string | null
  responsibilities: string[]
  tools: string[]
  relatedProjectSlugs: string[]
}

export const experience: ExperienceItem[] = [
  {
    slug: "windows",
    linkLabel: "Windows & Doors",
    kicker: "Trusted Home Reports · San Francisco · May 2025 – Present",
    title: "Windows & Doors.",
    role: "Project Manager & Partnerships Manager — Home improvement",
    company: "Trusted Home Reports",
    location: "San Francisco",
    dates: "May 2025 – Present",
    status: "in-progress",
    fact: "$130K approximate profit from a line built through partner development, partner acquisition, and lead generation.",
    summary:
      "I support the initiative from planning through execution and launch: requirements, timelines, deliverables, partner communication, and performance reviews. A team of ten, including design, stays on the same priorities and deadlines.",
    responsibilities: [
      "Coordinate advertisers, affiliates, and lead buyers so requirements line up and offer launches get through operational issues.",
      "Watch performance, name the process gaps, and put improvements in place so the work can grow without getting messy.",
      "Hold several priorities at once across internal teams and external partners, and keep stakeholders current on progress and what is still owed.",
      "Keep creative, delivery, and partner dates on one record so the line does not split into separate conversations.",
    ],
    tools: [],
    relatedProjectSlugs: [],
  },
  {
    slug: "ai",
    linkLabel: "AI acquisition",
    kicker: "Trusted Home Reports · San Francisco · January 2025 – Present",
    title: "AI customer acquisition.",
    role: "VP, AI Customer Acquisition / Project Manager",
    company: "Trusted Home Reports",
    location: "San Francisco",
    dates: "January 2025 – Present",
    status: "in-progress",
    fact: "10,000 calls a day at the top end of the operation I support. Key metrics on initiatives I contributed to improved by more than 200%.",
    summary:
      "AI-powered acquisition, from the first business requirements and the plan, through workflow setup, testing, deployment, and the improvement that follows.",
    responsibilities: [
      "Break the work into tasks the team can finish. Prioritise, track, and change the plan when the business changes.",
      "Sit between business and technical stakeholders. Clear dependencies, resolve delivery issues, and keep the work on the agreed timeline.",
      "Support calling operations of up to 10,000 calls a day. Monitor performance, find workflow issues, and coordinate the fix.",
      "Write and tighten the workflows and documentation so execution stays consistent, responsibilities stay clear, and the process can scale.",
      "Use results and feedback from the 200% improvement work to decide what gets optimised next.",
    ],
    tools: [],
    relatedProjectSlugs: ["calling"],
  },
  {
    slug: "growth",
    linkLabel: "Partner growth",
    kicker: "Trusted Home Reports · San Francisco · August 2023 – Present",
    title: "Partner growth.",
    role: "Affiliate Manager / Growth Executive",
    company: "Trusted Home Reports",
    location: "San Francisco",
    dates: "August 2023 – Present",
    status: "in-progress",
    // TODO: add content — this chapter has no separate outcome line.
    fact: null,
    summary:
      "This is the thread that started in 2023, before the Windows & Doors line and the AI role. Customer acquisition with internal teams and outside partners, in service of the same business.",
    responsibilities: [
      "Coordinate campaign and offer launches. Align deliverables, track performance, and follow up when something in the execution slips.",
      "Run partner onboarding, performance reporting, and the ongoing conversation that keeps operations smooth.",
      "Read campaign results and partner performance, then name the improvement that can support revenue.",
      "Balance partner work with the project deadlines that sit on the same calendar.",
    ],
    tools: [],
    relatedProjectSlugs: [],
  },
  {
    slug: "advertics",
    linkLabel: "Adverticssoft",
    kicker: "Adverticssoft IT Systems · Pune · August 2020 – July 2023",
    title: "SaaS and affiliate delivery.",
    role: "Affiliate Manager / Project Manager",
    company: "Adverticssoft IT Systems",
    location: "Pune",
    dates: "August 2020 – July 2023",
    status: "completed",
    // TODO: add content — this chapter has no separate outcome line.
    fact: null,
    summary:
      "Three years of software and SaaS projects for the US market, with affiliate campaigns running beside the project work. Planning, requirements, execution, testing, launch, and the update that keeps stakeholders honest.",
    responsibilities: [
      "Worked with business and technical teams to clarify requirements, organise tasks, manage priorities, and track progress against the timeline.",
      "Followed dependencies, open issues, and deliverables so the work kept moving and delays were caught early.",
      "Used an iterative loop: take the feedback, change the requirement, and improve the workflow.",
      "Supported new offer launches through preparation, testing, deployment, and the first look at performance.",
      "Managed affiliate campaigns and partner onboarding alongside the projects, so operational tasks and project deadlines shared one schedule.",
      "Kept partner communication and performance reports in good enough shape to support a real decision.",
    ],
    tools: [],
    relatedProjectSlugs: [],
  },
  {
    slug: "mirror",
    linkLabel: "Mirror Review",
    kicker: "Mirror Review · Pune · 2019 – 2020",
    title: "Client delivery, at volume.",
    role: "Business Development Specialist",
    company: "Mirror Review",
    location: "Pune",
    dates: "2019 – 2020",
    status: "completed",
    fact: "100+ client relationships. Requirements, deliverables, and deadlines, held so the operation stayed smooth.",
    // TODO: add content — this chapter has no separate summary paragraph.
    summary: null,
    responsibilities: [
      "Worked with internal teams to understand what a client actually needed, communicate it, and support delivery on time.",
      "Researched market trends and customer requirements, then turned that into a business opportunity or a recommended change.",
      "Supported business development by reading the market and pointing at where growth was available.",
    ],
    tools: [],
    relatedProjectSlugs: [],
  },
]
