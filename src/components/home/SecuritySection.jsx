import { useState } from "react";
import { SectionHeader } from "../SectionHeader.jsx";
import { Monitor, FileCheck, Network } from "lucide-react";
import { cn } from "@/lib/utils.js";

const tabs = [
  { id: "monitoring", title: "Real-Time Threat Monitoring", content: "Real-Time Threat Monitoring continuously analyzes network traffic, user behavior, and system activity to detect and respond to potential security threats as they occur." },
  { id: "compliance", title: "Compliance and Risk Management", content: "Compliance & Risk Management continuously analyzes network traffic, user behavior, and system activity to detect and respond to potential security threats as they occur." },
  { id: "identity", title: "Identity and Access Management", content: "Identity and Access Management continuously analyzes network traffic, user behavior, and system activity to detect and respond to potential security threats as they occur." },
];

const features = [
  { icon: Monitor, title: "Computer Security", description: "Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities." },
  { icon: FileCheck, title: "File Duplication & Access", description: "Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities." },
  { icon: Network, title: "Network Protections", description: "Protecting systems and data from unauthorized access, cyber threats digital vulnerabilities." },
];

export const SecuritySection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <SectionHeader subtitle="Our Security" title="Securing your digital" titleAccent="world together" centered light />
        <div className="mt-14 grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("w-full text-left p-6 rounded-xl transition-all duration-300", activeTab === tab.id ? "bg-accent text-accent-foreground" : "bg-primary-foreground/5 hover:bg-primary-foreground/10")}>
                <h4 className="font-semibold mb-2">{tab.title}</h4>
                {activeTab === tab.id && <p className="text-sm opacity-90">{tab.content}</p>}
              </button>
            ))}
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=700&fit=crop" alt="Security" className="w-full h-[500px] object-cover" /></div>
          </div>
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4 p-5 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div><h4 className="font-semibold mb-1">{feature.title}</h4><p className="text-sm text-primary-foreground/70">{feature.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
