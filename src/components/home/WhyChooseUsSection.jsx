import { SectionHeader } from "../SectionHeader.jsx";
import { Award, Users, Star, Trophy, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expertise and Experience",
    description:
      "A team of seasoned cybersecurity professionals with extensive industry knowledge.",
  },
  {
    icon: Users,
    title: "Proactive Security Approach",
    description:
      "Focused on preventing threats before they impact your system, not just reacting after the fact.",
  },
  {
    icon: Star,
    title: "Tailored Training Programs",
    description:
      "Educating your team on security best practices to reduce human error and enhance vigilance.",
  },
];

const stats = [
  { icon: Trophy, value: "25+", label: "Years Experience" },
  { icon: CheckCircle, value: "15K", label: "Project Complete" },
  { icon: Users, value: "16K", label: "Customer Happy" },
  { icon: Award, value: "120", label: "Winning Awards" },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Security team working"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-4 lg:-right-12 grid grid-cols-2 gap-3 w-64">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-primary text-primary-foreground p-4 rounded-xl text-center shadow-xl"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <SectionHeader
              subtitle="Why Choose Us"
              title="Reliable solutions for"
              titleAccent="cybersecurity excellence"
            />

            <div className="mt-10 space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-5 p-5 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
