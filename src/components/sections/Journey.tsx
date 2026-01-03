import { cn } from "@/lib/utils";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const timeline = [
  {
    year: "2026 - Present",
    title: "Junior Service Technician",
    institution: "Golden Power Technology Co., Ltd",
    description:
      "Building custom web applications and APIs for clients, specializing in Java backend and React frontend.",
    type: "work",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Higher National Diploma in Computing",
    institution: "Info Myanmar College",
    description:
      "Pursuing advanced studies in computer science, focusing on software engineering and system design.",
    type: "education",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Certificate in Java Programming",
    institution: "Java Developer Class (JDC)",
    description:
      "Comprehensive computing education covering programming fundamentals, database management, and web development.",
    type: "education",
    icon: Award,
  },
  {
    year: "2022",
    title: "Certification in Web Development Course",
    institution: "Advanced Institute Of Mechanics & Technology (AIMT)",
    description:
      "Advanced certification in enterprise Java development using Spring ecosystem.",
    type: "certification",
    icon: Award,
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-22 md:py-35 relative">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            My Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The <span className="text-gradient-accent">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From academic foundations to professional experience, here's how my
            developer journey has evolved.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={cn(
                  "relative flex gap-8 mb-12 last:mb-0",
                  "md:flex-row",
                  !isEven && "md:flex-row-reverse",
                  "opacity-0 animate-fade-up"
                )}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10">
                  <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                </div>

                {/* Content Card */}
                <div
                  className={cn(
                    "flex-1 ml-16 md:ml-0",
                    isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12",
                    "md:w-[calc(50%-2rem)]"
                  )}
                >
                  <div className="glass p-6 group hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                          item.type === "education" &&
                            "bg-primary/20 text-primary",
                          item.type === "certification" &&
                            "bg-accent/20 text-accent",
                          item.type === "work" && "bg-muted text-foreground"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground font-medium block mb-1">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-primary/80 mb-2">
                          {item.institution}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
