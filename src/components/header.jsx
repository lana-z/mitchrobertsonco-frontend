"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-12 space-y-6">
      <div className="relative w-full aspect-[3/1]">
        <Image
          src="/mitch-robertson-co-logo.png"
          fill
          alt="Mitch Robertson Co."
          className="object-cover scale-120 px-8"
          priority
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-heading text-2xl md:text-3xl tracking-widest">ENTREPRENEUR—WRITER—SPEAKER</p>
        <Link
          href="#my-story"
          className="mt-8 p-2 rounded-full hover:bg-white/5 transition-colors"
          scroll={true}
          aria-label="Scroll to My Story section"
        >
          <ChevronDown className="w-8 h-8" />
        </Link>
      </div>
    </header>
  )
}
