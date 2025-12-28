import { Code2, Database, Globe, Palette, Server, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "Spring Cloud", "REST APIs", "Microservices"],
    color: "primary",
  },
  {
    category: "Frontend",
    icon: Palette,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
    color: "accent",
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Hibernate"],
    color: "primary",
  },
  {
    category: "DevOps & Tools",
    icon: Zap,
    items: ["Docker", "Git", "CI/CD", "Linux", "AWS"],
    color: "accent",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <div className="space-y-6 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-medium">full-stack developer</span> based 
              in Myanmar, with a strong foundation in Java backend development and modern frontend technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey began at Info Myanmar College where I discovered my love for creating 
              efficient, scalable systems. Now, as I continue my studies at Dagon University, 
              I'm constantly expanding my knowledge in software architecture and system design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that 
              are both functional and delightful. When I'm not coding, you'll find me exploring 
              new technologies and contributing to open-source projects.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "15+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.category}
                  className={cn(
                    "glass p-6 group hover:border-primary/30 transition-all duration-300",
                    "opacity-0 animate-fade-up"
                  )}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    skill.color === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
