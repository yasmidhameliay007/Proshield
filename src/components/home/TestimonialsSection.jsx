import { useState } from "react";
import { SectionHeader } from "../SectionHeader.jsx";
import { Play, Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
const testimonials = [
  { id: 1, content: "This cybersecurity service has been a game-changer for my business. The Basic Plan keeps my data secure, and I no longer worry about online threats.", subContent: "I love how easy it is to use this service. A must-have for anyone who values their online safety!", author: "Alex J.", role: "IT Manager", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", rating: 5 },
  { id: 2, content: "Outstanding protection and incredible customer service. Our company has been using their enterprise solution for 2 years now.", subContent: "The real-time monitoring and instant alerts have saved us countless times.", author: "Sarah Mitchell", role: "Cloud Manager", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", rating: 5 },
];
export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container"><div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop" alt="Team" className="w-full h-[450px] object-cover" /><div className="absolute inset-0 bg-primary/40 flex items-center justify-center"><button className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:scale-110 transition-transform animate-pulse-glow"><Play className="w-8 h-8 fill-current ml-1" /></button></div></div>
        <div>
          <SectionHeader subtitle="Testimonials" title="Our clients are" titleAccent="saying" />
          <div className="mt-10 relative"><Quote className="w-12 h-12 text-accent/20 absolute -top-4 -left-2" /><div className="flex gap-1 mb-4">{[...Array(current.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />))}</div><blockquote className="text-lg leading-relaxed mb-4">"{current.content}"</blockquote><p className="text-muted-foreground mb-6">"{current.subContent}"</p><div className="flex items-center gap-4"><img src={current.avatar} alt={current.author} className="w-14 h-14 rounded-full object-cover" /><div><h4 className="font-semibold">{current.author}</h4><p className="text-sm text-muted-foreground">{current.role}</p></div></div><div className="flex gap-3 mt-8"><button onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)} className="w-12 h-12 rounded-full border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"><ChevronLeft className="w-5 h-5" /></button><button onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)} className="w-12 h-12 rounded-full border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"><ChevronRight className="w-5 h-5" /></button></div></div>
        </div>
      </div></div>
    </section>
  );
};
