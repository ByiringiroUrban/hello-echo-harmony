
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import CookieConsent from "@/components/cookie-consent"
import BackToTop from "@/components/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ONE HEALTHLINE CONNECT - Your Healthcare Partner",
  description:
    "Access healthcare services virtually including teleconsultation, appointment booking, emergency services, medication ordering, and AI health monitoring.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <CookieConsent />
          <BackToTop />
        </AuthProvider>
      </body>
    </html>
  )
}
