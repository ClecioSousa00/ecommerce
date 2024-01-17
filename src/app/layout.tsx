import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Providers } from '@/providers/provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'FSW Store',
  description: 'ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} `}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
