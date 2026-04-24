"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

export function ToasterProvider() {
  const { theme } = useTheme()

  return (
    <Sonner 
      position="bottom-right" 
      theme={theme as "light" | "dark" | "system" | undefined} 
    />
  )
}