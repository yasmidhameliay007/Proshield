import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader.jsx";
import { ArrowRight, Shield, Lock, Wifi, Database, Cloud, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils.js";

const services = [
  {
    icon: Shield,
    title: "Threat Detection and Prevention",
    description: "Real-time monitoring and proactive measures to identify and neutralize threats.",
  },
  {
    icon: Lock,
    title: "Endpoint Security Solutions",
    description: "Comprehensive protection for all devices connected to your network.",
    featured: true,
  },
  {
    icon: Wifi,
    title: "Network Defense and Firewalls",
    description: "Robust network security with advanced firewall configurations.",
  },
  {
    icon: Database,
    title: "Data Encryption and Privacy",
    description: "Secure your sensitive data with military-grade encryption protocols.",
  },
  {
    icon: Cloud,
    title: "Cloud Security and Compliance",
    description: "Protect your cloud infrastructure and ensure regulatory compliance.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response and Management",
    description: "Rapid response and recovery services for security incidents.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive cybersecurity"
          titleAccent="services for protection"
          centered
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative p-8 rounded-2xl transition-all duration-500",
                service.featured
                  ? "bg-gradient-to-br from-accent to-[hsl(200_80%_50%)] text-primary-foreground"
                  : "bg-card border border-border hover:border-accent/30 hover:shadow-xl"
              )}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                  service.featured
                    ? "bg-primary-foreground/20"
                    : "bg-accent/10 group-hover:bg-accent/20"
                )}
              >
                <service.icon
                  className={cn(
                    "w-8 h-8",
                    service.featured ? "text-primary-foreground" : "text-accent"
                  )}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className={cn(
                      "text-xl font-semibold mb-3",
                      service.featured ? "text-primary-foreground" : "text-foreground"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      service.featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    )}
                  >
                    {service.description}
                  </p>
                </div>

                <Link
                  to="/services"
                  className={cn(
                    "shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    service.featured
                      ? "bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground"
                      : "bg-muted group-hover:bg-accent group-hover:text-accent-foreground"
                  )}
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
