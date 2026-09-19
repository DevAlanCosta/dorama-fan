import { ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Guarantee() {
  return (
    <section className="relative px-4 py-8 sm:px-6">
      <Reveal className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-green/25 bg-green/5 p-8 text-center sm:flex-row sm:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green/15 ring-1 ring-green/30">
            <ShieldCheck className="h-8 w-8 text-green" />
          </div>
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Compra 100% segura</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Seu pagamento é processado em ambiente seguro. Após a confirmação, o acesso é liberado
              rapidamente para você começar a maratonar.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
