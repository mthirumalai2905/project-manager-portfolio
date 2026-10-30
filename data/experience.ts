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
      "Managed end-to-end projects and business operations, overseeing project planning, execution, stakeholder coordination, and delivery of business objectives.",
    responsibilities: [
      "Led projects from initiation to completion, managing project scope, priorities, timelines, resources, and deliverables to ensure successful execution.",
      "Coordinated cross-functional teams, including operations, creative, and business development, ensuring effective task allocation, team collaboration, and timely delivery.",
      "Managed relationships with 100+ clients and business partners, handling requirements, stakeholder communication, expectations, and issue resolution.",
      "Developed and implemented workflows and Standard Operating Procedures (SOPs) to streamline operations, improve team productivity, and ensure consistent project delivery.",
      "Monitored project progress, performance metrics, and KPIs, identifying risks, resolving operational challenges, and implementing process improvements.",
      "Supported business expansion initiatives through research, strategic planning, stakeholder collaboration, and execution of new projects.",
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
      "Managed AI-powered customer acquisition and automation projects, overseeing end-to-end project planning, execution, team coordination, and delivery while ensuring alignment with business objectives.",
    responsibilities: [
      "Led AI-driven projects from initial planning to execution, managing project scope, timelines, priorities, resources, and deliverables.",
      "Applied Agile project management practices to break projects into manageable tasks, track progress, prioritize activities, and adapt to changing requirements.",
      "Coordinated cross-functional teams, including technical and business stakeholders, to ensure effective collaboration, resolve issues, and maintain project timelines.",
      "Monitored project performance, tracked key metrics, and identified opportunities to improve workflows, operational efficiency, and project outcomes.",
      "Managed project challenges, changing requirements, and stakeholder expectations to ensure smooth execution and timely delivery.",
      "Contributed to AI-powered initiatives that achieved over 200% improvement across key performance metrics, aligning project outcomes with business goals.",
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
      "Managed multiple client-facing projects and operational activities, ensuring effective coordination between internal teams, external partners, and business stakeholders.",
    responsibilities: [
      "Oversaw day-to-day project activities, coordinated task assignments, monitored progress, and ensured deliverables were completed within agreed timelines.",
      "Gathered client and partner requirements, translated them into actionable tasks, and coordinated with relevant teams to ensure proper execution.",
      "Maintained project trackers, monitored milestones, documented updates, and prepared regular reports to provide visibility into project progress.",
      "Coordinated client onboarding and implementation activities, managing communication, dependencies, and deliverables throughout the process.",
      "Identified workflow gaps, followed up on pending tasks, and worked with teams to resolve operational issues and avoid project delays.",
      "Supported continuous improvement by reviewing project performance, optimizing existing processes, and implementing changes to improve delivery efficiency.",
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
