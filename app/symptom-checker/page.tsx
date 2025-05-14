import SymptomCheckerHero from "@/components/symptom-checker/symptom-checker-hero"
import SymptomCheckerIntro from "@/components/symptom-checker/symptom-checker-intro"
import SymptomCheckerForm from "@/components/symptom-checker/symptom-checker-form"
import SymptomCheckerFaq from "@/components/symptom-checker/symptom-checker-faq"
import SymptomCheckerCta from "@/components/symptom-checker/symptom-checker-cta"

export const metadata = {
  title: "Symptom Checker | HEALTHLINE RWANDA",
  description:
    "Check your symptoms and get preliminary health insights with HEALTHLINE RWANDA's interactive symptom checker tool.",
}

export default function SymptomCheckerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SymptomCheckerHero />
      <SymptomCheckerIntro />
      <SymptomCheckerForm />
      <SymptomCheckerFaq />
      <SymptomCheckerCta />
    </main>
  )
}
