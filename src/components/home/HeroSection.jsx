import { Link } from "react-router-dom";
import { Shield, Play, ArrowRight, CheckCircle } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop"
          alt="Cybersecurity background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-6 animate-fade-up">
            <Shield className="w-5 h-5 text-accent" />
            <span>Welcome Cyber Security</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up delay-100">
            Secure your world,{" "}
            <span className="text-accent">effortlessly today!</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-up delay-200">
            Protect your digital world with seamless, cutting-edge cybersecurity
            solutions designed to safeguard your data, systems, and peace of mind.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-up delay-300">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-3 text-primary-foreground group">
              <span className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                <Play className="w-5 h-5 fill-current" />
              </span>
              <span className="font-semibold">Play Video</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-fade-up delay-400">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Access Control Management</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Security Awareness Training</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-primary-foreground/20" />

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`Customer ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-accent">23k</span>
                <span className="text-sm text-primary-foreground/70 leading-tight">
                  Our 19k+
                  <br />
                  Satisfied Customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};
