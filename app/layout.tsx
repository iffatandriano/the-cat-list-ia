import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/src/styles/globals.css';
import ClientOnly from '@/src/components/ClientOnly';
import Navbar from '@/src/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IA Cat List',
  description: 'A technical tech from Buana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div className="pt-20">
          {children}
        </div>
        </body>
    </html>
  )
}
