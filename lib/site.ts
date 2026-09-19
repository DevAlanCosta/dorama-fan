export const CHECKOUT_URL = "#planos"
export const WHATSAPP_URL = "#"

export const posters = [
  { src: "/posters/poster-romance.png", title: "Luz da Madrugada", genre: "Romance" },
  { src: "/posters/poster-drama.png", title: "Estações do Coração", genre: "Drama" },
  { src: "/posters/poster-launch.png", title: "Sob as Luzes de Seul", genre: "Lançamento" },
  { src: "/posters/poster-classic.png", title: "Primavera Perdida", genre: "Clássico" },
  { src: "/posters/poster-kdrama.png", title: "Nossos Dias de Outono", genre: "K-Drama" },
  { src: "/posters/poster-suspense.png", title: "O Último Corredor", genre: "Suspense" },
  { src: "/posters/poster-favorite.png", title: "Primeira Neve", genre: "Favorito" },
]

export const categories = [
  { emoji: "❤️", label: "Romance", poster: "/posters/poster-romance.png" },
  { emoji: "🎭", label: "Drama", poster: "/posters/poster-drama.png" },
  { emoji: "🔥", label: "Lançamentos", poster: "/posters/poster-launch.png" },
  { emoji: "✨", label: "Clássicos", poster: "/posters/poster-classic.png" },
  { emoji: "🇰🇷", label: "K-Dramas", poster: "/posters/poster-kdrama.png" },
  { emoji: "🌸", label: "Favoritos", poster: "/posters/poster-favorite.png" },
]

// ---------------------------------------------------------------------------
// DEPOIMENTOS
// Substitua os textos abaixo pelos depoimentos REAIS dos seus clientes.
// Mantenha o formato: nome + inicial do sobrenome (ex.: "Mariana S.").
// O campo `avatar` pode receber a URL de uma foto real; se ficar vazio,
// as iniciais do nome são exibidas automaticamente.
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    text: "Eu já tinha assinado várias plataformas só pra assistir K-drama e vivia frustrada porque sumiam do catálogo. Aqui achei todos os meus favoritos num lugar só e ainda paguei uma vez só. Maratonei 'Pousando no Amor' em um fim de semana chorando litros!",
    name: "Mariana S.",
    role: "São Paulo, SP",
    avatar: "/testimonials/mariana.png",
  },
  {
    text: "Confesso que fiquei com o pé atrás por ser pagamento único, mas caí de amores. A legenda é ótima, carrega rápido no celular e tem dorama que eu procurava há anos. Virei fã e já indiquei pra todas as amigas do meu grupo de doramaníacas.",
    name: "Juliana P.",
    role: "Curitiba, PR",
    avatar: "/testimonials/juliana.png",
  },
  {
    text: "Assisto no celular no trânsito e na TV da sala quando chego em casa, sem travar. Terminei 'Descendentes do Sol' e emendei em 'Goblin' na mesma semana. Melhor investimento que fiz esse ano pra minha paz mental, sério.",
    name: "Camila R.",
    role: "Salvador, BA",
    avatar: "/testimonials/camila.png",
  },
  {
    text: "Sou apaixonada por dorama desde 'Playful Kiss' e achei que já tinha visto tudo. Que nada! Descobri clássicos e lançamentos que nem sabiam que existiam. O catálogo é atualizado direitinho e o suporte no WhatsApp respondeu na hora.",
    name: "Patrícia L.",
    role: "Belo Horizonte, MG",
    avatar: "/testimonials/patricia.png",
  },
  {
    text: "Minha mãe e eu viramos o clube das duas: fazemos pipoca e maratonamos juntas todo sábado. 'Rei dos Porcos' e 'Crash Landing on You' foram as nossas favoritas até agora. Valeu cada centavo, a gente ri e chora junto.",
    name: "Beatriz M.",
    role: "Fortaleza, CE",
    avatar: "/testimonials/beatriz.png",
  },
  {
    text: "O que me conquistou foi não ter mensalidade pesando no orçamento todo mês. Paguei uma vez e pronto, assisto quando quero. Já estou no meu terceiro dorama coreano e não largo mais. Recomendo de olhos fechados pra quem ama a cultura.",
    name: "Renata A.",
    role: "Porto Alegre, RS",
    avatar: "/testimonials/renata.png",
  },
]

// ---------------------------------------------------------------------------
// CONVERSAS REAIS (prints de WhatsApp / Instagram)
// Cole a URL da imagem do print no campo `src` de cada item abaixo.
// Enquanto estiver vazio, um placeholder elegante é exibido.
// ---------------------------------------------------------------------------
export const conversationShots: { src: string; alt: string }[] = [
  { src: "/prints/print-1.png", alt: "Cliente elogiando o catálogo e o preço do DoramaTVFlix" },
  { src: "/prints/print-2.png", alt: "Cliente agradecendo e dizendo que achou tudo o que procurava" },
  { src: "/prints/print-3.png", alt: "Cliente que assinou e já começou a assistir" },
  { src: "/prints/print-4.png", alt: "Cliente elogiando o suporte do DoramaTVFlix" },
  ]

export const faqs = [
  {
    q: "O acesso é vitalício?",
    a: "Sim. Você paga uma única vez e mantém o seu acesso, sem novas cobranças.",
  },
  {
    q: "Existe mensalidade?",
    a: "Não. O DoramaTVFlix é pagamento único, sem qualquer cobrança recorrente.",
  },
  {
    q: "Como recebo meu acesso?",
    a: "Após a confirmação do pagamento, o acesso é liberado rapidamente para você começar a maratonar.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. A experiência foi pensada primeiro para o celular, com navegação simples e rápida.",
  },
  {
    q: "Posso acessar pelo computador?",
    a: "Sim. Você pode acessar por computador, tablet e outros dispositivos compatíveis.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Você pode pagar via PIX ou cartão de crédito, de forma segura.",
  },
  {
    q: "O catálogo recebe atualizações?",
    a: "Sim. Novos conteúdos são adicionados regularmente ao catálogo.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Você conta com atendimento via WhatsApp para ajudar sempre que precisar.",
  },
]
