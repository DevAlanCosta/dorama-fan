import { Flame, ArrowRight, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

// Podes substituir estes links pelos links reais de checkout da Cactus para cada plano
const CHECKOUT_URL_MENSAL = "https://pay.cactus.com.br/teu-link-mensal"
const CHECKOUT_URL_VITRALICIO = "https://pay.cactus.com.br/teu-link-vitalicio"

export function SpecialOffer() {
  return (
    <section className="relative px-4 py-8 sm:px-6">
      <Reveal className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* PLANO MENSAL */}
          <div className="relative overflow-hidden rounded-3xl border border-pink/20 bg-gradient-to-r from-[#1a0f1a] to-[#14101f] p-6 text-center sm:p-8 flex flex-col justify-between">
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-pink/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-light ring-1 ring-pink/20">
                Flexível
              </span>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                Plano Mensal
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-3xl font-extrabold text-gradient">R$ 12,90</span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                Acesso completo renovado mensalmente. Cancele quando quiser.
              </p>
            </div>
            
            <div className="mt-6">
              <a
                href={CHECKOUT_URL_MENSAL}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-pink/40 bg-pink/10 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-pink/20 active:scale-95"
              >
                Assinar Mensal
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* PLANO VITALÍCIO (DESTAQUE) */}
          <div className="relative overflow-hidden rounded-3xl border border-pink/50 bg-gradient-to-r from-[#1a0f1a] via-[#1b1028] to-[#150f1c] p-6 text-center sm:p-8 shadow-[0_0_30px_-5px_rgba(255,61,129,0.3)] flex flex-col justify-between">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, rgba(255,61,129,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.30), transparent 45%)",
              }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-pink/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-pink-light ring-1 ring-pink/40">
                <Flame className="h-3.5 w-3.5" /> Mais Popular &bull; Economize
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight">
                Acesso Vitalício
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-extrabold text-gradient">R$ 29,90</span>
              </div>
              <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                Pagamento único &bull; Acesso para sempre sem mensalidades
              </p>
            </div>

            <div className="relative mt-6">
              <a
                href={CHECKOUT_URL_VITRALICIO}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-purple px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_0_25px_-5px_rgba(255,61,129,0.8)] transition-transform duration-200 hover:scale-[1.02] active:scale-95"
              >
                Garantir Acesso Vitalício
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  )
}
