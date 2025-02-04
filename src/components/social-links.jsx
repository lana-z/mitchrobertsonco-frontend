"use client"

import Link from "next/link"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import { TwitterIcon } from "./icons/twitter"
import { ThreadsIcon } from "./icons/threads"

export function SocialLinks() {
  return (
    <div className="flex gap-4 text-white/70">
      <Link
        href="https://www.instagram.com/mitchrobertson.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <Instagram className="w-8 h-8 md:w-10 md:h-10" />
        <span className="sr-only">Instagram</span>
      </Link>

      <Link
        href="https://www.linkedin.com/in/mitchellrobertson/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
        <span className="sr-only">LinkedIn</span>
      </Link>

      <Link
        href="https://x.com/mrobertsonco"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <TwitterIcon className="w-8 h-8 md:w-10 md:h-10" />
        <span className="sr-only">X (Twitter)</span>
      </Link>

      <Link
        href="https://www.threads.net/@mitchrobertson.co"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <ThreadsIcon className="w-8 h-8 md:w-10 md:h-10" />
        <span className="sr-only">Threads</span>
      </Link>

      <Link
        href="https://www.facebook.com/mitchellrobertson.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <Facebook className="w-8 h-8 md:w-10 md:h-10" />
        <span className="sr-only">Facebook</span>
      </Link>
    </div>
  )
}
