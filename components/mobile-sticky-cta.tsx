"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { CHECKOUT_URL } from "@/lib/site"

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 p-3 backdrop-blur-xl transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <a
        href={CHECKOUT_URL}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-purple px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_30px_-8px_rgba(255,61,129,0.8)] active:scale-95"
      >
        Quero meu acesso • R$ 10,90
      </a>
    </div>
  )
}
