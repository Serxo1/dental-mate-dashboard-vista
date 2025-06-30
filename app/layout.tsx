import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dental Mate - Sistema de Gestão Odontológica',
  description: 'O sistema de gestão mais completo para clínicas odontológicas modernas com IA integrada.',
  keywords: 'dental, dentista, clínica, gestão, odontologia, sistema',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 