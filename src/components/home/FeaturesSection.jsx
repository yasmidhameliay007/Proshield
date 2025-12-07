import { SectionHeader } from "../SectionHeader.jsx";
import { Shield, Bug, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Real-Time Threat Detection",
    description:
      "Real-Time Threat Detection provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure.",
  },
  {
    icon: Bug,
    title: "Malware and Virus Prevention",
    description:
      "Malware and virus prevention provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring and Support",
    description:
      "24/7 monitoring and support provides instant monitoring & response to cyber threats, ensuring your devices and data remain secure.",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=500&fit=crop"
                  alt="Security team"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop"
                  alt="Security monitoring"
                  className="w-full h-[340px] object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">25+</div>
                <div className="text-sm text-primary-foreground/70">
                  Years of experience
                  <br />
                  in cyber security
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="flex -space-x-2">
                  {avatars.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-primary object-cover"
                    />
                  ))}
                </div>
                <span className="ml-3 text-sm font-semibold text-accent">25k</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              subtitle="Our Features"
              title="Comprehensive protection"
              titleAccent="simplified security"
            />

            <div className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-5 p-5 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
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
