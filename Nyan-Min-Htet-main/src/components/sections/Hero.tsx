import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent animate-pulse-slow rounded-full blur-3xl" />
        <div className="absolute inset-12 bg-gradient-radial from-accent/15 via-accent/5 to-transparent animate-float rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 container text-center px-6">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up stagger-1">
            <span className="text-foreground">Full-Stack Developer</span>
            <br />
            <span className="text-gradient">Java & Modern Frontend</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up stagger-2">
            Hi, I'm{" "}
            <span className="text-foreground font-semibold">Nyan Min Htet</span>
            . I craft robust backend systems and beautiful user interfaces,
            bridging the gap between powerful Java applications and modern web
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5 opacity-0 animate-fade-up stagger-3">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up stagger-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nyanminhtet@example.com"
              className="w-12 h-12 glass flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-7 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up stagger-5">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
