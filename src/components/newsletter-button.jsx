import Link from "next/link"
import { Newspaper } from "lucide-react"

export function NewsletterButton() {
  return (
    <Link
      href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7287228839636676609"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-white/80 px-6 py-3 text-sm hover:bg-white/5 transition-colors"
    >
      <Newspaper className="w-5 h-5" />
      Newsletter
    </Link>
  )
}
