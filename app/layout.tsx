import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"
import BackToTop from "@/components/back-to-top"
// import AccessibilityWidget from "@/components/accessibility-widget"

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
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
          {children}
          <CookieConsent />
          <BackToTop />
          {/* <AccessibilityWidget /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
