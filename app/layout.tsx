import type { Metadata } from "next"
import { Caveat, Nunito, Pacifico } from "next/font/google"
import { AppShell } from "@/components/AppShell"
import { site } from "@/data/site"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], display: "swap" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" })
const script = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap" })

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s · ${site.title}`,
  },
  description: site.description,
}

const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${nunito.className} ${caveat.variable} ${script.variable} min-h-screen text-zinc-900 antialiased dark:text-[#f6f1ea]`} suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
