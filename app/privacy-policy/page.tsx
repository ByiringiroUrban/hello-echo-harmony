import type { Metadata } from "next"
import PrivacyHero from "@/components/legal/privacy-hero"
import PrivacyContent from "@/components/legal/privacy-content"
import PrivacyCTA from "@/components/legal/privacy-cta"
import DefaultLayout from "@/components/layouts/DefaultLayout"

export const metadata: Metadata = {
  title: "Privacy Policy | HEALTHLINE RWANDA",
  description: "Our commitment to protecting your privacy and personal information at HEALTHLINE RWANDA.",
}

export default function PrivacyPolicyPage() {
  return (
    <DefaultLayout>
    <main className="flex flex-col min-h-screen">
      <PrivacyHero />
      <PrivacyContent />
      <PrivacyCTA />
    </main>
    </DefaultLayout>
  )
}
