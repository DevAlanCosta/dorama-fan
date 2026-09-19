export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <span className="text-lg font-bold">
              Dorama<span className="text-gradient">TVFlix</span>
            </span>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Seu universo de doramas em um só lugar, com acesso vitalício.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#catalogo" className="transition-colors hover:text-foreground">Catálogo</a>
            <a href="#beneficios" className="transition-colors hover:text-foreground">Benefícios</a>
            <a href="#planos" className="transition-colors hover:text-foreground">Planos</a>
            <a href="#faq" className="transition-colors hover:text-foreground">Dúvidas</a>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs leading-relaxed text-muted-foreground/70">
            © {new Date().getFullYear()} DoramaTVFlix. Todos os direitos reservados. Este site não é
            afiliado, associado ou endossado por Netflix ou qualquer outra plataforma de streaming.
            As imagens de capa são ilustrativas.
          </p>
        </div>
      </div>
    </footer>
  )
}
