import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader.jsx";
import { Check, Gift, CreditCard, X } from "lucide-react";
import { cn } from "@/lib/utils.js";

const plans = [
  { name: "Basic Plan", price: 29, description: "Essential protection for digital safety.", features: ["Anti-virus protection service", "Reliable personal data protection", "Advertisements blocking", "1 device using"] },
  { name: "Standard Plan", price: 39, description: "Essential protection for digital safety.", features: ["Anti-virus protection service", "Reliable personal data protection", "Advertisements blocking", "3 devices using"], featured: true },
  { name: "Premium Plan", price: 49, description: "Essential protection for digital safety.", features: ["Anti-virus protection service", "Reliable personal data protection", "Advertisements blocking", "Unlimited devices"] },
];

const benefits = [{ icon: Gift, text: "Get 30 day free trial" }, { icon: CreditCard, text: "No any hidden fees pay" }, { icon: X, text: "You can cancel anytime" }];

export const PricingSection = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container">
      <SectionHeader subtitle="Pricing Plan" title="Affordable cyber security plans" titleAccent="for every need" centered />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={cn("relative rounded-2xl p-8 transition-all duration-300", plan.featured ? "bg-gradient-to-br from-accent to-[hsl(200_80%_50%)] text-primary-foreground shadow-2xl shadow-accent/20 scale-105" : "bg-card border border-border hover:border-accent/30 hover:shadow-xl")}>
            <div className="mb-6">
              <span className={cn("text-sm font-semibold uppercase tracking-wider", plan.featured ? "text-primary-foreground/80" : "text-accent")}>{plan.name}</span>
              <div className="mt-4 flex items-baseline gap-1"><span className={cn("text-4xl font-bold", plan.featured ? "text-primary-foreground" : "text-foreground")}>${plan.price}</span><span className={cn("text-sm", plan.featured ? "text-primary-foreground/70" : "text-muted-foreground")}>/per month</span></div>
              <p className={cn("mt-2 text-sm", plan.featured ? "text-primary-foreground/80" : "text-muted-foreground")}>{plan.description}</p>
            </div>
            <div className={cn("h-px my-6", plan.featured ? "bg-primary-foreground/20" : "bg-border")} />
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3"><div className={cn("w-5 h-5 rounded-full flex items-center justify-center", plan.featured ? "bg-primary-foreground/20" : "bg-accent/10")}><Check className={cn("w-3 h-3", plan.featured ? "text-primary-foreground" : "text-accent")} /></div><span className={cn("text-sm", plan.featured ? "text-primary-foreground" : "text-foreground")}>{feature}</span></li>
              ))}
            </ul>
            <Link to="/contact" className={cn("block w-full py-4 text-center font-semibold rounded-full transition-all duration-300", plan.featured ? "bg-primary-foreground text-primary hover:shadow-lg" : "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30")}>Get Started</Link>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-8">{benefits.map((benefit, index) => (<div key={index} className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><benefit.icon className="w-5 h-5 text-accent" /></div><span className="font-medium">{benefit.text}</span></div>))}</div>
    </div>
  </section>
);
