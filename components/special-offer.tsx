import { Flame, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CHECKOUT_URL } from "@/lib/site"

export function SpecialOffer() {
  return (
    <section className="relative px-4 py-8 sm:px-6">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-pink/30 bg-gradient-to-r from-[#1a0f1a] via-[#14101f] to-[#150f1c] p-8 text-center sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(255,61,129,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.30), transparent 45%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-pink-light ring-1 ring-pink/30">
              <Flame className="h-3.5 w-3.5" /> Oferta especial
            </span>
            <h2 className="mt-5 text-balance font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Garanta seu acesso por apenas <span className="text-gradient">R$ 12,90</span>
            </h2>
            <p className="mt-3 text-sm font-medium text-muted-foreground sm:text-base">
              Pagamento único • Acesso vitalício
            </p>
            <a
              href={CHECKOUT_URL}
              className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-purple px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_40px_-8px_rgba(255,61,129,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Quero aproveitar a oferta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
