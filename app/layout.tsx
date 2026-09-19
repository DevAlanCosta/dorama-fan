import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DoramaTVFlix — Maratone seus doramas favoritos sem limites',
  description:
    'Acesso vitalício a um catálogo completo de doramas, lançamentos e clássicos. Pagamento único, sem mensalidade. Assista onde e quando quiser.',
  generator: 'v0.app',
  keywords: ['doramas', 'dorama', 'k-drama', 'streaming de doramas', 'assistir doramas', 'DoramaTVFlix'],
  openGraph: {
    title: 'DoramaTVFlix — Maratone seus doramas favoritos sem limites',
    description:
      'Acesso vitalício a um catálogo completo de doramas. Pagamento único, sem mensalidade.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08080d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
