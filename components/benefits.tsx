import { Clapperboard, Infinity as InfinityIcon, Sparkles, Smartphone, ShieldCheck, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"

const benefits = [
  {
    icon: Clapperboard,
    title: "Catálogo completo",
    text: "Tenha acesso a milhares de títulos em um só lugar.",
  },
  {
    icon: InfinityIcon,
    title: "Acesso vitalício ou mensal",
    text: "Escolha a opção ideal para o seu ritmo e bolso, com total liberdade.",
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
    icon: ShieldCheck,
    title: "Seguro e Prático",
    text: "Plataforma estável, rápida e com acesso imediato após a confirmação.",
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
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Tudo o que você precisa para maratonar sem complicações e com máxima qualidade.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink/50 hover:bg-surface hover:shadow-[0_0_25px_rgba(255,61,129,0.15)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink/20 to-purple/20 ring-1 ring-pink/20 transition-transform duration-300 group-hover:scale-110">
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
