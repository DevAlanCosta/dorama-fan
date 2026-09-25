import { Check, Flame, Lock, Zap, CreditCard } from "lucide-react"
import { Reveal } from "@/components/reveal"

// Substitui com os teus links reais de checkout da Cactus
const CHECKOUT_URL_MENSAL = "https://pay.cactus.com.br/teu-link-mensal"
const CHECKOUT_URL_VITALICIO = "https://pay.cactus.com.br/teu-link-vitalicio"

const benefits = [
  "Catálogo completo de doramas no Telegram",
  "Lançamentos e novos episódios atualizados",
  "Opções de episódios dublados e legendados",
  "Assista no celular, computador ou Smart TV",
  "Download para assistir offline sem vírus",
  "Suporte VIP para dúvidas de acesso",
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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Garanta seu <span className="text-gradient">acesso</span>
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">Escolha o plano ideal e comece a maratonar agora.</p>
        </Reveal>

        {/* Grelha com os dois planos */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          
          {/* PLANO MENSAL */}
          <Reveal className="w-full">
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-pink/20 bg-gradient-to-b from-surface to-[#14101a] p-7 sm:p-9">
              <div>
                <div className="text-center">
                  <span className="inline-block rounded-full bg-pink/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-pink-light">
                    Flexível
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">
                    Plano Mensal
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Para quem quer testar o canal com total liberdade
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold sm:text-6xl">R$ 12,90</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Renovação mensal • Cancele quando quiser</p>
                </div>

                <ul className="mt-8 grid gap-3">
                  {benefits.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-green" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={CHECKOUT_URL_MENSAL}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-pink/40 bg-pink/10 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-pink/20 active:scale-95"
                >
                  Assinar Plano Mensal <span aria-hidden>&#8594;</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* PLANO VITALÍCIO (DESTAQUE) */}
          <Reveal className="w-full">
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-pink/50 bg-gradient-to-b from-surface to-[#14101a] p-7 shadow-[0_0_60px_-15px_rgba(255,61,129,0.6)] sm:p-9">
              <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-pink to-purple px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                <Flame className="h-3.5 w-3.5" /> Mais Popular &bull; Melhor Oferta
              </span>

              <div>
                <div className="mt-2 text-center">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Acesso Completo &amp; Vitalício
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Acesso imediato e eterno a todos os doramas no Canal VIP
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-sm text-muted-foreground">
                    De <span className="line-through">R$ 59,90</span> por apenas
                  </span>
                  <div className="mt-1 flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold sm:text-6xl text-gradient">R$ 29,90</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Pagamento único • Sem mensalidades nunca mais</p>
                </div>

                <ul className="mt-8 grid gap-3">
                  {benefits.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-green" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={CHECKOUT_URL_VITALICIO}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-purple px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_40px_-8px_rgba(255,61,129,0.8)] transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                >
                  Garantir Acesso Vitalício <span aria-hidden>&#8594;</span>
                </a>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-green" /> Compra 100% segura
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-green" /> Liberação imediata
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="h-3.5 w-3.5 text-green" /> PIX e cartão
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
