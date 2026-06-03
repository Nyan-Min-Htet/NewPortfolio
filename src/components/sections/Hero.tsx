import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profilePic from "@/img/pf.jpg"; // Correct relative path

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[130vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[850px] md:h-[850px]">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent animate-pulse-slow rounded-full blur-3xl" />
        <div className="absolute inset-12 bg-gradient-radial from-accent/15 via-accent/5 to-transparent animate-float rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 container text-center px-10">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Profile Photo */}
          <div className="relative mb-8 opacity-0 animate-fade-up stagger-1">
            <img
              src={profilePic}
              alt="Profile"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary/20 shadow-lg object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute -inset-1 rounded-full border-2 border-primary/10 animate-ping-slow"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up stagger-2">
            <span className="text-foreground">Full-Stack Developer</span>
            <br />
            <span className="text-gradient">&</span>
            <br />
            <span className="text-gradient">Modern Frontend</span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-12 space-y-6 opacity-0 animate-fade-up stagger-1">
            {/* Core Bio */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm{" "}
                <span className="text-foreground font-semibold">
                  Nyan Min Htet
                </span>
                , a Full-Stack Engineer dedicated to architecting
                <span className="text-foreground">
                  {" "}
                  scalable digital ecosystems
                </span>
                . I specialize in transforming complex user journeys into
                seamless, high-performance interfaces powered by robust,
                optimized server-side logic.
              </p>

              {/* Skill Badges - Much cleaner than a list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "PHP",
                  "MySQL",
                  "NoSQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Process Subtext */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 italic">
              <div className="mt-1 text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground/80">
                Integrating AI-driven development workflows to accelerate
                delivery without compromising architectural integrity or code
                quality.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 opacity-10 animate-fade-up stagger-4">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 opacity-0 animate-fade-up stagger-5">
            <a
              href="https://github.com/Nyan-Min-Htet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nyan-min-htet-2699703a2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nhtet9968@gmail.com"
              className="w-12 h-12 glass flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
