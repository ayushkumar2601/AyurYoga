import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AyurYoga - Ancient Wisdom, Modern Wellness",
  description: "Discover the perfect harmony of Yoga and Ayurveda for holistic wellness",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
