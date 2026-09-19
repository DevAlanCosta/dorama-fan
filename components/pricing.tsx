import { Check, Flame, Lock, Zap, CreditCard } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CHECKOUT_URL } from "@/lib/site"

const basic = [
  "Catálogo de doramas",
  "Atualizações",
  "Acesso vitalício",
  "Qualidade Full HD",
  "Suporte via WhatsApp",
]

const premium = [
  "Catálogo completo",
  "+5.000 doramas",
  "Acesso vitalício",
  "Atualizações frequentes",
  "Lançamentos",
  "Qualidade Full HD",
  "Suporte via WhatsApp",
  "Atendimento prioritário",
]

export function Pricing() {
  return (
    <section id="planos" className="relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,61,129,0.3), transparent 60%), radial-gradient(circle at 65% 40%, rgba(139,92,246,0.28), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Escolha seu <span className="text-gradient">acesso</span>
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">Pagamento único. Sem mensalidade.</p>
        </Reveal>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-2">
          {/* Basic */}
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-surface/50 p-7 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Plano Básico</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold">R$ 10,90</span>
                <span className="pb-1 text-sm text-muted-foreground">pagamento único</span>
              </div>
              <ul className="mt-7 space-y-3">
                {basic.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-green" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CHECKOUT_URL}
                className="mt-8 flex w-full items-center justify-center rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors hover:border-pink/50 hover:text-pink-light"
              >
                Quero o básico
              </a>
            </div>
          </Reveal>

          {/* Premium */}
          <Reveal delay={120}>
            <div className="relative h-full rounded-3xl border border-pink/40 bg-gradient-to-b from-surface to-[#14101a] p-7 shadow-[0_0_60px_-15px_rgba(255,61,129,0.6)] sm:p-8">
              <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-pink to-purple px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                <Flame className="h-3.5 w-3.5" /> Mais popular
              </span>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-pink-light">Plano Premium</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold sm:text-5xl">R$ 19,90</span>
                <span className="pb-1 text-sm text-muted-foreground line-through">R$ 29,90</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">pagamento único • acesso vitalício</p>

              <ul className="mt-7 grid gap-3">
                {premium.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-green" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_URL}
                className="mt-8 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink to-purple px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_40px_-8px_rgba(255,61,129,0.8)] transition-transform duration-200 hover:scale-[1.02] active:scale-95"
              >
                Quero meu acesso Premium
              </a>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-green" /> Compra segura
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-green" /> Liberação rápida
                </span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="h-3.5 w-3.5 text-green" /> PIX e cartão
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
