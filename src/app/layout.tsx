import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/Header'
import { Providers } from '@/providers/provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

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
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
