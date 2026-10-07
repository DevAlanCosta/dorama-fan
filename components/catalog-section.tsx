"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { categories } from "@/lib/site"

export function CatalogSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let intervalId: NodeJS.Timeout

    const startScrolling = () => {
      intervalId = setInterval(() => {
        if (!container) return
        // Se chegou ao fim, volta ao início; senão, avança 200 pixéis
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          container.scrollBy({ left: 220, behavior: "smooth" })
        }
      }, 3000) // Passa a cada 3 segundos
    }

    startScrolling()

    // Para o auto-scroll quando o utilizador passa o rato por cima
    const handleMouseEnter = () => clearInterval(intervalId)
    const handleMouseLeave = () => startScrolling()

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(intervalId)
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section id="catalogo" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Seu próximo dorama favorito está <span className="text-gradient">aqui.</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Explore um catálogo pensado para quem ama histórias envolventes, romances, dramas,
            suspense e os grandes lançamentos.
          </p>
        </Reveal>

        {/* Carrossel com Auto-Scroll */}
        <Reveal delay={150} className="mt-12">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className="group relative min-w-[160px] sm:min-w-[200px] flex-shrink-0 aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-border transition-all duration-300 hover:scale-105 hover:border-pink/50 hover:shadow-[0_0_25px_rgba(255,61,129,0.3)]"
              >
                <Image
                  src={cat.poster || "/placeholder.svg"}
                  alt={`Categoria ${cat.label}`}
                  fill
                  sizes="(max-width: 640px) 160px, 200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, rgba(255,61,129,0.35), transparent 55%)" }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3">
                  <span aria-hidden className="text-lg">{cat.emoji}</span>
                  <span className="text-sm font-bold text-white">{cat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
