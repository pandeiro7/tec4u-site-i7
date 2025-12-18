import type React from "react"
import { cn } from "@/lib/utils"

interface FloatingBadgeProps {
  children: React.ReactNode
  className?: string
}

export function FloatingBadge({ children, className }: FloatingBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg",
        className,
      )}
    >
      {children}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
        <path d="M2 6L6 2L10 6M6 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
