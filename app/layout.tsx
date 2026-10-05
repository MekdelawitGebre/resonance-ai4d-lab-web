import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from "@/components/layout/navigation"
import { FooterSection } from "@/components/layout/footer"
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'RESONANCE AI4D Lab — Artificial Intelligence for Development',
  description: 'Responsible AI Solutions and Networks for Sustainable Development at Addis Ababa University. Harnessing AI for sustainable and inclusive development in Ethiopia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        <div className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col justify-between">
          <Navigation />
          <main className="flex-1">{children}</main>
          <FooterSection />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
