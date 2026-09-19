import { Check, Flame, Lock, Zap, CreditCard } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CHECKOUT_URL_BASIC } from "@/lib/site"

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

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Garanta seu <span className="text-gradient">acesso</span>
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">Pagamento único. Sem mensalidade.</p>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Reveal className="w-full max-w-lg">
            <div className="relative h-full rounded-3xl border border-pink/40 bg-gradient-to-b from-surface to-[#14101a] p-7 shadow-[0_0_60px_-15px_rgba(255,61,129,0.6)] sm:p-9">
              <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-pink to-purple px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                <Flame className="h-3.5 w-3.5" /> Oferta por tempo limitado
              </span>

              <div className="mt-4 text-center">
                <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Acesso Completo &amp; Vitalício
                </h3>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  Acesso imediato a todos os doramas no Canal VIP do Telegram
                </p>
              </div>

              <div className="mt-7 flex flex-col items-center">
                <span className="text-sm text-muted-foreground">
                  De <span className="line-through">R$ 29,90</span> por apenas
                </span>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-5xl font-extrabold sm:text-6xl">R$ 10,90</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Pagamento único • Sem mensalidades</p>
              </div>

              <ul className="mt-8 grid gap-3">
                {benefits.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-green" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_URL_BASIC}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-purple px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_40px_-8px_rgba(255,61,129,0.8)] transition-transform duration-200 hover:scale-[1.02] active:scale-95"
              >
                Quero meu acesso agora <span aria-hidden>&#8594;</span>
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}
