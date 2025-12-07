import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader.jsx";
const team = [
  { name: "Michael Johnson", role: "Security Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" },
  { name: "Sophia Carter", role: "Cybersecurity Analyst", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face" },
  { name: "Michael Brown", role: "Incident Response", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face" },
  { name: "Isabella Moore", role: "Security Awareness", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face" },
];
export const TeamSection = () => (
  <section className="py-20 lg:py-28 bg-secondary"><div className="container"><SectionHeader subtitle="Expert Team" title="Our expert team" titleAccent="member" centered /><div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{team.map((member) => (<Link key={member.name} to="/team" className="group relative rounded-2xl overflow-hidden"><div className="relative h-[350px] overflow-hidden"><img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></div><div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary to-transparent"><h3 className="text-lg font-semibold text-primary-foreground capitalize">{member.name}</h3><p className="text-sm text-primary-foreground/70 capitalize">{member.role}</p></div></Link>))}</div></div></section>
);
