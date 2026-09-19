import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { categories } from "@/lib/site"

export function CatalogSection() {
  return (
    <section id="catalogo" className="relative py-20 sm:py-24">
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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 60}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-border transition-transform duration-300 hover:-translate-y-1.5">
                <Image
                  src={cat.poster || "/placeholder.svg"}
                  alt={`Categoria ${cat.label}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, rgba(255,61,129,0.35), transparent 55%)" }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3">
                  <span aria-hidden className="text-lg">{cat.emoji}</span>
                  <span className="text-sm font-bold text-white">{cat.label}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
