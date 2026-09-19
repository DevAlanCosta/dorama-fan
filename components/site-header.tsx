"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { CHECKOUT_URL } from "@/lib/site"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight sm:text-xl">
            Dorama<span className="text-gradient">TVFlix</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#catalogo" className="transition-colors hover:text-foreground">
            Catálogo
          </a>
          <a href="#beneficios" className="transition-colors hover:text-foreground">
            Benefícios
          </a>
          <a href="#planos" className="transition-colors hover:text-foreground">
            Planos
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            Dúvidas
          </a>
        </nav>

        <a
          href={CHECKOUT_URL}
          className="rounded-full bg-pink px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(255,61,129,0.7)] transition-transform duration-200 hover:scale-[1.03] active:scale-95 sm:px-5"
        >
          Quero meu acesso
        </a>
      </div>
    </header>
  )
}
