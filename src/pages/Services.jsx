import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqSection } from "@/components/home/FaqSection";

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="relative py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Our services</h1>
          <div className="flex items-center gap-2 text-primary-foreground/70">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-accent">Services</span>
          </div>
        </div>
      </section>

      <ServicesSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
    </Layout>
  );
};

export default Services;
