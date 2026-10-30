"use client"

import { useState } from "react"

export function Portrait({ caption, src }: { caption: string; src: string | null }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(src) && !failed

  return (
    <figure className="relative mx-auto mt-6 w-[11.5rem] rotate-[-6deg] bg-white px-3 pb-8 pt-3 shadow-[0_14px_30px_rgba(0,0,0,0.14)] dark:bg-[#2a2724]">
      <span className="tape -top-3 left-8 -rotate-3" aria-hidden="true" />
      {showPhoto ? (
        <img src={src ?? ""} alt="Bhupen Patel" className="h-52 w-full object-cover object-[center_18%]" onError={() => setFailed(true)} />
      ) : (
        <span className="script grid h-44 w-full place-items-center bg-[#f4efe4] text-6xl text-[#1d4e89] dark:bg-[#3a342c] dark:text-[#d7e6f8]">B</span>
      )}
      <figcaption className="hand mt-2 text-center text-2xl text-zinc-700 dark:text-zinc-200">{caption}</figcaption>
    </figure>
  )
}
