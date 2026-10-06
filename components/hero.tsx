import Image from "next/image"
import { ArrowRight, ChevronDown, Check, Play } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CHECKOUT_URL, posters } from "@/lib/site"

const trustPoints = [
  "+5.000 títulos disponíveis",
  "Zero anúncios irritantes",
  "Dublados e legendados",
  "Download para assistir offline",
  "Acesso vitalício",
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
        {/* copy (Coluna da Esquerda) */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-pink" /> Para quem ama doramas 💗
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Todos os seus doramas em um{" "}
              <span className="text-gradient">só lugar.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Pare de pagar várias plataformas para acompanhar as histórias que você ama. Tenha acesso completo a milhares de títulos, lançamentos e episódios organizados para assistir quando e onde quiser.
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
        </div>

        {/* Vídeo do Vimeo em destaque na Coluna da Direita (substituindo a imagem estática) */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-2 ring-pink/50 shadow-[0_0_40px_-5px_rgba(255,61,129,0.4)] bg-black">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1226000802?autoplay=1&muted=1&api=1&loop=1&title=0&byline=0&portrait=0"
                className="absolute inset-0 h-full w-full border-0 object-cover"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            </div>
            <span className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold shadow-lg ring-1 ring-border backdrop-blur z-10">
              <Play className="h-3.5 w-3.5 fill-pink text-pink" /> Demonstração Prática da Plataforma
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
