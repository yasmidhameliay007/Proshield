import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { TeamSection } from "@/components/home/TeamSection";
import { FaqSection } from "@/components/home/FaqSection";
import { BlogSection } from "@/components/home/BlogSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <SecuritySection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <TeamSection />
      <FaqSection />
      <BlogSection />
    </Layout>
  );
};

export default Index;
