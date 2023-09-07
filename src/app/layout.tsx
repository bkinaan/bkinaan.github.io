import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { Coming_Soon } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// const coming_soon = Coming_Soon({ weight:'400' })


export const metadata: Metadata = {
  title: 'Brandon Kinaan',
  description: "Brandon Kinaan's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
