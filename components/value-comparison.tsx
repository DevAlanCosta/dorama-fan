import { Reveal } from "@/components/reveal"

export function ValueComparison() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Quanto você <span className="text-gradient">economiza?</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            Você paga uma vez e não precisa se preocupar com mensalidades recorrentes.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface/40 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Assinatura mensal
              </p>
              <p className="mt-3 text-3xl font-extrabold text-muted-foreground">
                R$ 19,90<span className="text-base font-medium">/mês</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Cobrança recorrente</p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">R$ 238,80 ao ano</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-surface/40 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Em 12 meses
              </p>
              <p className="mt-3 text-3xl font-extrabold text-muted-foreground">R$ 238,80</p>
              <p className="mt-2 text-sm text-muted-foreground">12 pagamentos de R$ 19,90</p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">Todo ano</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative overflow-hidden rounded-2xl border border-pink/40 bg-gradient-to-b from-surface to-[#14101a] p-6 text-center shadow-[0_0_50px_-15px_rgba(255,61,129,0.6)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-pink-light">
                DoramaTVFlix
              </p>
              <p className="mt-3 flex items-center justify-center gap-2">
                <span className="text-lg font-semibold text-muted-foreground line-through">R$ 29,90</span>
                <span className="text-3xl font-extrabold text-gradient">R$ 19,90</span>
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-pink-light">
                Pagamento único
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Acesso vitalício para sempre</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
