import { ArrowRight, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CHECKOUT_URL } from "@/lib/site"

const points = ["Pagamento único", "Acesso vitalício", "Sem mensalidade"]

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,61,129,0.35), transparent 60%), radial-gradient(circle at 60% 40%, rgba(139,92,246,0.3), transparent 60%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          Sua próxima maratona <span className="text-gradient">começa agora.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground sm:text-lg">
          Garanta seu acesso ao DoramaTVFlix e tenha seus doramas favoritos sempre à mão.
        </p>

        <div className="mt-9 flex justify-center">
          <a
            href={CHECKOUT_URL}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-purple px-9 py-5 text-base font-bold uppercase tracking-wide text-white shadow-[0_0_50px_-8px_rgba(255,61,129,0.85)] transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Quero meu acesso agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-green" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
