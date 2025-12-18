import type React from "react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function StatCard({ title, children, className }: StatCardProps) {
  return (
    <div className={cn("rounded-2xl bg-white p-6 shadow-xl", className)}>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900">{title}</h3>
      {children}
    </div>
  )
}
