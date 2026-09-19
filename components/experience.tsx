import Image from "next/image"
import { Check, ArrowRight, Search } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CHECKOUT_URL, posters } from "@/lib/site"

const points = [
  "Catálogo organizado",
  "Busca rápida",
  "Novos títulos",
  "Interface simples",
  "Acesso em diferentes dispositivos",
]

export function Experience() {
  const grid = posters.slice(0, 6)

  return (
    <section id="como-funciona" className="relative py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* phone mockup */}
        <Reveal className="order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,61,129,0.35), transparent 65%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.30), transparent 60%)",
              }}
            />
            <div className="relative mx-auto w-[260px] rounded-[2.5rem] border border-white/10 bg-[#0c0c14] p-3 shadow-2xl sm:w-[290px]">
              <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
              <div className="overflow-hidden rounded-[2rem] bg-background">
                {/* app header */}
                <div className="flex items-center justify-between px-4 pt-8 pb-3">
                  <span className="text-sm font-bold">
                    Dorama<span className="text-gradient">TVFlix</span>
                  </span>
                  <span className="h-7 w-7 rounded-full bg-gradient-to-br from-pink to-purple" />
                </div>
                {/* search */}
                <div className="mx-4 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">
                  <Search className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Buscar doramas...</span>
                </div>
                {/* featured */}
                <div className="relative mx-4 mt-3 aspect-[16/10] overflow-hidden rounded-xl">
                  <Image src={posters[2].src || "/placeholder.svg"} alt="Destaque do catálogo" fill sizes="290px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute bottom-2 left-2 rounded-full bg-pink px-2 py-0.5 text-[9px] font-bold text-white">
                    EM ALTA
                  </span>
                </div>
                {/* grid */}
                <div className="grid grid-cols-3 gap-2 p-4">
                  {grid.map((p) => (
                    <div key={p.title} className="relative aspect-[2/3] overflow-hidden rounded-lg">
                      <Image src={p.src || "/placeholder.svg"} alt={p.title} fill sizes="90px" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Uma experiência feita para quem ama <span className="text-gradient">maratonar</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
              Encontre seus próximos favoritos de forma simples, rápida e organizada.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green/15 ring-1 ring-green/30">
                    <Check className="h-3.5 w-3.5 text-green" />
                  </span>
                  <span className="text-sm font-medium sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={260}>
            <a
              href={CHECKOUT_URL}
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-purple px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_40px_-8px_rgba(255,61,129,0.7)] transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Quero experimentar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
