import { Star, ImageIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { testimonials, conversationShots } from "@/lib/site"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials() {
  return (
    <section className="relative bg-[#08080D] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-pretty text-3xl font-extrabold tracking-tight sm:text-4xl">
            O que os apaixonados por doramas estão dizendo <span className="text-pink">❤️</span>
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Experiências reais de quem já começou suas próximas maratonas.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-[#11111A] p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-colors hover:border-pink/25 sm:p-7">
                <div className="flex items-center gap-1" aria-label="Cinco estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-pink text-pink" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                  {"\u201C"}
                  {t.text}
                  {"\u201D"}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {t.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.avatar || "/placeholder.svg"}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink/15 text-xs font-semibold text-pink">
                      {getInitials(t.name)}
                    </span>
                  )}
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-20 max-w-2xl text-center">
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-pink">💬</span> Conversas reais com nossos clientes
          </h3>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            Prints de conversas no WhatsApp e Instagram de quem já faz parte do DoramaTVFlix.
          </p>
        </Reveal>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {conversationShots.map((shot, i) => (
            <div key={i} className="w-[240px] flex-none snap-center sm:w-[260px]">
              {shot.src ? (
                <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#11111A] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src || "/placeholder.svg"} alt={shot.alt} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="flex aspect-[9/16] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 bg-[#11111A] p-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink/10 text-pink">
                    <ImageIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-foreground/80">INSIRA AQUI UM PRINT REAL</span>
                  <span className="text-xs text-muted-foreground">Proporção de conversa (WhatsApp / Instagram)</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-1 text-center text-xs text-muted-foreground sm:hidden">Arraste para o lado para ver mais →</p>
      </div>
    </section>
  )
}
