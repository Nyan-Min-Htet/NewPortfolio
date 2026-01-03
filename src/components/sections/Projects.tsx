import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight, AirVent } from "lucide-react";
import { cn } from "@/lib/utils";
import eCommerceImage from "@/img/image.png";
import aIImage from "@/img/image copy.png";
import fashionImage from "@/img/image copy 2.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with secure payment integration, inventory management, and real-time order tracking. \n This is a full-stack e-commerce website built with HTML, CSS, and JavaScript are acts as a frontend and PHP is acts as a backend. It allows users to view and purchase flowers online.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "PHP"],
    category: "Full-Stack",
    image: eCommerceImage,
    github: "https://github.com/Nyan-Min-Htet/E-Commerce-Website",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Socket Program Quizz and Guess Application",
    description:
      "The Quizz and Guess Game is a dual-mode desktop application developed in Python using socket programming and a Tkinter GUI. The system features a multi-threaded server capable of handling multiple clients simultaneously, ensuring a smooth multiplayer experience. This project highlights core concepts in network programming, threading, and desktop application development, making it an ideal showcase of my practical Python skills.",
    technologies: ["Python", "Socket Programming", "Multi-threading"],
    category: "Full-Stack",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "AI voice-activated assistant",
    description:
      "This is an AI based application that using for voice assistant with using python programming language. It allows to hand-free commands, and more enhance interactive between AI. It can perform many actions by voice command and text command such as open youtube, social media, ask any questions, and also check the chat history.",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    category: "Backend",
    image: aIImage,
    github: "https://github.com/Nyan-Min-Htet/Jarvis_APP",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "Fashion Wesbite Design",
    description:
      "This project is a only design for fashion website and it can log in, log out, register, and view products such as shirts, shoes, suit, and trousers with price details.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    image: fashionImage,
    github: "https://github.com/Nyan-Min-Htet/Online-shopping-website",
    live: "https://example.com",
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
    <section id="projects" className="py-32 md:py-45 relative">
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
            A selection of projects that showcase my expertise in building
            scalable, user-centric applications with modern technologies.
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
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
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
                <p className="text-muted-foreground text-sm mb-4 line-clamp-6 whitespace-normal break-words">
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
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 ml-auto text-muted-foreground transition-all duration-300",
                      hoveredProject === project.id &&
                        "translate-x-1 text-primary"
                    )}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
