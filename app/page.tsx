import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { CatalogSection } from "@/components/catalog-section"
import { Benefits } from "@/components/benefits"
import { Experience } from "@/components/experience"
import { Pricing } from "@/components/pricing"
import { ValueComparison } from "@/components/value-comparison"
import { SpecialOffer } from "@/components/special-offer"
import { Testimonials } from "@/components/testimonials"
import { Guarantee } from "@/components/guarantee"
import { FAQ } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <CatalogSection />
      <Benefits />
      <Experience />
      <Pricing />
      <ValueComparison />
      <SpecialOffer />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <FinalCta />
      <SiteFooter />
      <MobileStickyCta />
    </main>
  )
}
