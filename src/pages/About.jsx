import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { AboutSection } from "../components/home/AboutSection";
import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";
import { TeamSection } from "../components/home/TeamSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="relative py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">About us</h1>
          <div className="flex items-center gap-2 text-primary-foreground/70">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-accent">About Us</span>
          </div>
        </div>
      </section>

      <AboutSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default About;
