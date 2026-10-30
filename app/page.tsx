import { existsSync } from "fs"
import path from "path"
import { OverviewView } from "@/components/OverviewView"

export default function HomePage() {
  const portrait = existsSync(path.join(process.cwd(), "public", "portrait.jpg"))
  return <OverviewView portrait={portrait} />
}
