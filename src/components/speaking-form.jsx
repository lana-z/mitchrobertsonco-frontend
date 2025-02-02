import { Linkedin } from "lucide-react"

export function SpeakingForm() {
  return (
    <div className="w-full space-y-6 text-center">
      <h3 className="font-heading text-3xl text-white">Inquire About Speaking</h3>
      <p className="text-gray-300">
        Interested in having Mitch speak at your event? Reach out via LinkedIn.
      </p>
      <a
        href="https://www.linkedin.com/in/mitchellrobertson/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm hover:bg-white/5 transition-colors"
      >
        <Linkedin className="w-5 h-5" />
        Connect on LinkedIn
      </a>
    </div>
  )
}
