import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader.jsx";
import { Calendar, ArrowRight } from "lucide-react";
const posts = [
  { image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop", date: "Dec 5, 2024", title: "The Linux Threat You Need to Know" },
  { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop", date: "Dec 3, 2024", title: "Closing Security Gaps with Innovation" },
  { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop", date: "Nov 28, 2024", title: "BianLian Focuses on Data Extortion" },
];
export const BlogSection = () => (<section className="py-20 lg:py-28 bg-secondary"><div className="container"><SectionHeader subtitle="Latest Post" title="Our latest insight" titleAccent="blog" centered /><div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{posts.map((post, index) => (<Link key={index} to="/blog" className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"><div className="relative h-56 overflow-hidden"><img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></div><div className="p-6"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-3"><Calendar className="w-4 h-4" /><span>{post.date}</span></div><h3 className="text-xl font-semibold group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3><div className="mt-4 flex items-center gap-2 text-accent font-medium"><span>Read More</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></div></div></Link>))}</div></div></section>);
