import { Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "+5.000", label: "Doramas disponíveis" },
  { value: "Acesso", label: "Vitalício" },
  { value: "24/7", label: "Suporte" },
]

export function TrustBar() {
  return (
    <section className="relative border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Reveal className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-1" aria-label="Avaliação cinco estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-pink text-pink" />
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground sm:text-base">
              Milhares de apaixonados por doramas já fazem parte
            </p>
          </div>

          <div className="grid w-full grid-cols-3 gap-3 sm:gap-4 lg:w-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-surface/60 px-3 py-4 text-center backdrop-blur"
              >
                <p className="text-lg font-extrabold text-gradient sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
