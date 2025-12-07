import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader.jsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    category: "Authentication",
    title: "IoT Security Enhancement for Smart Devices",
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    category: "Authentication",
    title: "Enterprise Network Security Overhaul",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    category: "Authentication",
    title: "Cloud Infrastructure Protection System",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    category: "Authentication",
    title: "Data Center Security Implementation",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeader
            subtitle="Our Projects"
            title="Showcasing our cybersecurity"
            titleAccent="latest projects"
          />
          <div className="max-w-sm">
            <p className="text-muted-foreground mb-4">
              Cybersecurity Innovations Explore All Our Projects Safeguarding
              Digital Futures Against Evolving Threats.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/projects"
              className="group relative rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-primary-foreground leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
