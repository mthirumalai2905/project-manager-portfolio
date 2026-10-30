export const skillsIntro = {
  eyebrow: "Skills",
  title: "What I actually practice.",
  lead: "Grouped the way the work arrives. Not a flat list of tools.",
  platformsTitle: "Platforms",
} as const

export const skillGroups = [
  {
    id: "project-and-program",
    title: "Project & program",
    items: [
      "End-to-end project delivery",
      "Project planning",
      "Project governance",
      "Milestone tracking",
      "Timeline management",
      "Dependency management",
      "Risk and issue management, RAID",
      "Project prioritisation",
      "Delivery tracking",
    ],
  },
  {
    id: "agile-and-execution",
    title: "Agile & execution",
    items: [
      "Agile methodologies",
      "Sprint planning",
      "Backlog prioritisation",
      "Jira",
      "Task tracking",
      "Iterative delivery",
      "Progress reviews",
      "Continuous improvement",
    ],
  },
  {
    id: "operations",
    title: "Operations",
    items: [
      "Business requirements",
      "Workflow optimisation",
      "Process documentation",
      "SOP development",
      "Operational efficiency",
      "Business transformation",
      "AI-enabled automation",
      "Change management",
    ],
  },
  {
    id: "stakeholders",
    title: "Stakeholders",
    items: [
      "Stakeholder alignment",
      "Cross-functional coordination",
      "Client management",
      "Vendor coordination",
      "Team leadership",
      "Status reporting",
      "Presentation",
    ],
  },
  {
    id: "systems",
    title: "Systems",
    items: [
      "SaaS projects",
      "AI calling platforms",
      "CRM systems",
      "Customer acquisition",
      "Business applications",
      "Testing coordination",
      "Deployment readiness",
      "Performance tracking",
      "Data management",
    ],
  },
] as const

export const platforms = [
  { label: "Project", tools: "Jira, Asana, Trello, Slack" },
  { label: "CRM & partnerships", tools: "Freshsales, HubSpot, Everflow, CAKE, HasOffers" },
  { label: "Analysis", tools: "Excel, Google Analytics, Cursor" },
  { label: "AI & workflow", tools: "Thoughtly AI, Lovable" },
] as const
