import Image from "next/image"
import { ArrowRight, ChevronDown, Check, Play } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CHECKOUT_URL, posters } from "@/lib/site"

const trustPoints = [
  "Canal VIP no Telegram",
  "Download para assistir offline",
  "Catálogo organizado por busca",
  "Zero anúncios",
  "Atualizações diárias",
]

export function Hero() {
  const [center, ...rest] = posters
  const left = rest.slice(0, 2)
  const right = rest.slice(2, 4)

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(255,61,129,0.35), transparent 60%), radial-gradient(circle at 70% 50%, rgba(139,92,246,0.30), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-pink" />Comunidade VIP de doramas no Telegram
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Sua comunidade VIP de doramas{" "}
              <span className="text-gradient">no Telegram.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Entre no nosso Canal VIP no Telegram e tenha um catálogo completo de doramas organizado
              por busca, com download para assistir offline, sem anúncios e com novos títulos todos os
              dias.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:justify-start justify-center">
              <a
                href={CHECKOUT_URL}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-purple px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_40px_-8px_rgba(255,61,129,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                Quero meu acesso agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-pink/50 hover:text-pink-light"
              >
                Ver como funciona
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Vídeo do Vimeo inserido logo abaixo dos benefícios (Ajustado para formato vertical) */}
          <Reveal delay={380}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface/40 p-2 shadow-xl backdrop-blur max-w-[280px] mx-auto lg:mx-0">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/1226000802?h=9095436085"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* poster composition */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto flex max-w-md items-center justify-center gap-3 sm:max-w-lg lg:max-w-none">
            {/* left stack */}
            <div className="hidden flex-col gap-4 sm:flex">
              {left.map((p) => (
                <PosterCard key={p.title} p={p} className="w-28 opacity-70 lg:w-32" />
              ))}
            </div>

            {/* center */}
            <div className="relative">
              <PosterCard p={center} featured className="w-48 sm:w-52 lg:w-60" />
              <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold shadow-lg ring-1 ring-border backdrop-blur">
                <Play className="h-3.5 w-3.5 fill-pink text-pink" /> +5.000 títulos
              </span>
            </div>

            {/* right stack */}
            <div className="hidden flex-col gap-4 sm:flex">
              {right.map((p) => (
                <PosterCard key={p.title} p={p} className="w-28 opacity-70 lg:w-32" />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PosterCard({
  p,
  className,
  featured,
}: {
  p: { src: string; title: string; genre: string }
  className?: string
  featured?: boolean
}) {
  return (
    <div
      className={`relative aspect-[2/3] overflow-hidden rounded-2xl ring-1 ring-border ${
        featured ? "glow-pink shadow-2xl" : "shadow-xl"
      } ${className ?? ""}`}
    >
      <Image
        src={p.src || "/placeholder.svg"}
        alt={`Capa do dorama ${p.title}`}
        fill
        sizes="240px"
        priority={featured}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="text-[10px] font-medium uppercase tracking-wider text-pink-light">{p.genre}</p>
        <p className="text-sm font-bold leading-tight text-white">{p.title}</p>
      </div>
    </div>
  )
}
