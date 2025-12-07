import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader.jsx";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=500&fit=crop"
                    alt="Cybersecurity team"
                    className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
                    alt="Security monitoring"
                    className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=520&fit=crop"
                    alt="Security operations"
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-center text-sm leading-tight animate-rotate-slow hover:animate-none transition-all"
            >
              <span className="relative z-10">
                Get Free
                <br />
                Cyber Security
              </span>
            </Link>
          </div>

          <div>
            <SectionHeader
              subtitle="About Us"
              title="Your trusted partner in our"
              titleAccent="cyber security solutions"
              description="We provide reliable, cutting-edge cybersecurity solutions to protect your digital assets, ensuring safety and peace of mind."
            />

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-accent to-accent-light text-accent-foreground">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=80&fit=crop"
                  alt="Support"
                  className="w-24 h-20 rounded-xl object-cover shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    24/7 Security Assistance
                  </h4>
                  <p className="text-sm opacity-90">
                    Real-time support for all cybersecurity concerns, including
                    breach response, threat detection, guidance.
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span>Threat Detection and Monitoring</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span>Access Control Management</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span>Security Awareness Training</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <a
                  href="tel:+91123456789"
                  className="text-lg font-semibold hover:text-accent transition-colors"
                >
                  +91 123 456 789
                </a>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                More About
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
