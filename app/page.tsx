import { Hero } from "@/components/sections/Hero";
import { ShowcaseScroll } from "@/components/sections/ShowcaseScroll";
import { Philosophy } from "@/components/sections/Philosophy";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShowcaseScroll />
      <Philosophy />
      <CTASection />
    </>
  );
}
