import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with secure payment integration, inventory management, and real-time order tracking.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Redis"],
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Enterprise-grade project management tool with team collaboration, Kanban boards, and automated workflow features.",
    technologies: ["Java", "Spring", "TypeScript", "React", "MongoDB"],
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    description: "Interactive data visualization platform processing millions of events with real-time charts and custom reporting.",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "Banking API Microservices",
    description: "Secure microservices architecture for financial transactions with OAuth2, rate limiting, and audit logging.",
    technologies: ["Java", "Spring Cloud", "Docker", "Kubernetes", "MySQL"],
    category: "Backend",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    github: "https://github.com",
    live: null,
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Backend"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my expertise in building scalable, 
            user-centric applications with modern technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "glass"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group glass glass-hover overflow-hidden",
                "opacity-0 animate-fade-up"
              )}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <ChevronRight className={cn(
                    "w-4 h-4 ml-auto text-muted-foreground transition-all duration-300",
                    hoveredProject === project.id && "translate-x-1 text-primary"
                  )} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
