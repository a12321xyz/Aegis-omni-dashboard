import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "accent";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-zinc-100 text-zinc-900 shadow hover:bg-zinc-100/80": variant === "default",
          "border-transparent bg-zinc-800 text-zinc-100 hover:bg-zinc-800/80": variant === "secondary",
          "border-zinc-800 text-zinc-400": variant === "outline",
          "border-transparent bg-emerald-500/10 text-emerald-400": variant === "success",
          "border-transparent bg-cyan-500/10 text-cyan-400": variant === "accent",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
