import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Philosophy } from "@/components/sections/Philosophy";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Philosophy />
      <CTASection />
    </>
  );
}
