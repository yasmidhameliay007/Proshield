import { useState } from "react";
import { SectionHeader } from "../SectionHeader.jsx";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils.js";
const faqs = [
  { question: "What is cybersecurity?", answer: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks." },
  { question: "Why is cybersecurity important?", answer: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks." },
  { question: "What are the most common cyber threats?", answer: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks." },
  { question: "How can I protect my business from cyber threats?", answer: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks." },
];
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (<section className="py-20 lg:py-28 bg-background"><div className="container"><div className="grid lg:grid-cols-2 gap-12 items-start"><div className="rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=700&fit=crop" alt="FAQ" className="w-full h-[500px] object-cover" /></div><div><SectionHeader subtitle="FAQ" title="Cybersecurity questions" titleAccent="answered clearly" /><div className="mt-10 space-y-4">{faqs.map((faq, index) => (<div key={index} className={cn("border border-border rounded-xl overflow-hidden transition-all", openIndex === index && "border-accent/30 shadow-lg")}><button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-5 text-left"><span className="font-semibold pr-4">{faq.question}</span><ChevronDown className={cn("w-5 h-5 shrink-0 text-accent transition-transform", openIndex === index && "rotate-180")} /></button><div className={cn("overflow-hidden transition-all duration-300", openIndex === index ? "max-h-40" : "max-h-0")}><p className="px-5 pb-5 text-muted-foreground">{faq.answer}</p></div></div>))}</div></div></div></div></section>);
};
