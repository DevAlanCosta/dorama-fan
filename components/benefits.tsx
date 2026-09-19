import { Clapperboard, Infinity as InfinityIcon, Sparkles, Smartphone, Ban, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"

const benefits = [
  {
    icon: Clapperboard,
    title: "Catálogo completo",
    text: "Tenha acesso a milhares de títulos em um só lugar.",
  },
  {
    icon: InfinityIcon,
    title: "Acesso vitalício",
    text: "Pague uma única vez e continue aproveitando seu acesso.",
  },
  {
    icon: Sparkles,
    title: "Atualizações",
    text: "Novos conteúdos adicionados regularmente.",
  },
  {
    icon: Smartphone,
    title: "Assista onde quiser",
    text: "Experiência pensada para celular, tablet, computador e outros dispositivos compatíveis.",
  },
  {
    icon: Ban,
    title: "Sem mensalidade",
    text: "Nada de cobrança recorrente todos os meses.",
  },
  {
    icon: MessageCircle,
    title: "Suporte",
    text: "Conte com atendimento para ajudar sempre que precisar.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Por que escolher o <span className="text-gradient">DoramaTVFlix?</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink/40 hover:bg-surface">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink/20 to-purple/20 ring-1 ring-pink/20">
                  <b.icon className="h-6 w-6 text-pink-light" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
