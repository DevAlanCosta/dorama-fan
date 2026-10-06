import { Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "+5.000", label: "Doramas disponíveis" },
  { value: "Acesso", label: "Vitalício" },
  { value: "24/7", label: "Suporte" },
]

export function TrustBar() {
  return (
    <section className="relative border-y border-border/60 bg-gradient-to-r from-surface/60 via-surface/80 to-surface/60 py-8 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-1.5" aria-label="Avaliação cinco estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-pink text-pink drop-shadow-[0_0_8px_rgba(255,61,129,0.5)]" />
              ))}
            </div>
            <p className="text-sm font-semibold tracking-wide text-foreground sm:text-base">
              Milhares de apaixonados por doramas já fazem parte
            </p>
          </div>

          <div className="grid w-full grid-cols-3 gap-3 sm:gap-4 lg:w-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-pink/30 bg-surface/80 px-4 py-4 text-center shadow-[0_0_20px_-5px_rgba(255,61,129,0.2)] transition-all duration-300 hover:border-pink/60 hover:shadow-[0_0_25px_-3px_rgba(255,61,129,0.4)] backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-pink/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="relative z-10 text-xl font-extrabold text-gradient sm:text-3xl">{s.value}</p>
                <p className="relative z-10 mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
