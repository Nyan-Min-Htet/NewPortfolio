import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Briefcase, User, Mail, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "journey", label: "Journey", icon: Award },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Left Sidebar */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2 glass p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary rounded-full" />
              )}
              <span className="absolute left-full ml-3 px-2 py-1 bg-card text-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Navigation - Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300",
          scrolled ? "glass py-3" : "py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          <span className="text-lg font-bold text-gradient">NMH</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-4 text-2xl font-medium transition-all duration-300",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  isOpen ? "animate-fade-up opacity-100" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-6 h-6" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
