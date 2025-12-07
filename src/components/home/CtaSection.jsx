import { Phone, Mail } from "lucide-react";
export const CtaSection = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-accent-light/20 via-accent/10 to-background relative overflow-hidden">
    <div className="container relative z-10"><div className="max-w-4xl mx-auto text-center"><h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8">Protect business, cyber security solution today!</h2><div className="flex flex-wrap justify-center gap-6 md:gap-12">
      <div className="flex items-center gap-4 bg-card p-4 pr-8 rounded-2xl shadow-lg"><div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center"><Phone className="w-6 h-6 text-accent-foreground" /></div><div className="text-left"><p className="text-sm text-muted-foreground">Get contact now</p><a href="tel:+123456789" className="text-lg font-semibold hover:text-accent transition-colors">+123 456 789</a></div></div>
      <div className="flex items-center gap-4 bg-card p-4 pr-8 rounded-2xl shadow-lg"><div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center"><Mail className="w-6 h-6 text-accent-foreground" /></div><div className="text-left"><p className="text-sm text-muted-foreground">Send e-mail</p><a href="mailto:info@domainname.com" className="text-lg font-semibold hover:text-accent transition-colors">info@domainname.com</a></div></div>
    </div></div></div>
  </section>
);
