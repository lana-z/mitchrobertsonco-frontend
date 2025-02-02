"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export function ExpandableSection({ title, image, content, children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (isExpanded) {
      const element = document.getElementById(`content-${title}`)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [isExpanded, title])

  return (
    <div>
      <div className={cn(
        "relative flex flex-col",
        image ? "h-[90vh] min-h-[800px]" : "min-h-[40vh]"
      )}>
        {image ? (
          <>
            <Image
              src={image}
              fill
              alt={title}
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </>
        ) : (
          <div className="absolute inset-0 bg-black" />
        )}
        <div className="relative flex-1 flex flex-col items-center justify-center gap-8 py-20">
          <h2 className={cn(
            "font-heading font-bold text-center leading-none px-4",
            image ? "text-[15vw] md:text-[10vw]" : "text-[10vw] md:text-[8vw]"
          )}>{title}</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:opacity-75 transition-opacity"
            aria-expanded={isExpanded}
            aria-controls={`content-${title}`}
          >
            {isExpanded ? (
              <Minus className="w-12 h-12 text-white" />
            ) : (
              <Plus className="w-12 h-12 text-white" />
            )}
            <span className="sr-only">
              {isExpanded ? "Collapse" : "Expand"} {title} section
            </span>
          </button>
        </div>
      </div>

      <div
        id={`content-${title}`}
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="py-12 px-4 w-full text-sm font-light text-gray-400 font-poppins">
            {children || content}
          </div>
        </div>
      </div>
    </div>
  )
}
