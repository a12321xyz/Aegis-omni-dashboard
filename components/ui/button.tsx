import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "accent" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-zinc-50 text-zinc-900 shadow hover:bg-zinc-200": variant === "default",
            "bg-transparent border border-zinc-700 text-zinc-100 hover:bg-zinc-800": variant === "outline",
            "hover:bg-zinc-800 text-zinc-100": variant === "ghost",
            "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20": variant === "accent",
            "text-zinc-50 underline-offset-4 hover:underline": variant === "link",
            "bg-red-500 text-white hover:bg-red-600 shadow-sm": variant === "destructive",
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
