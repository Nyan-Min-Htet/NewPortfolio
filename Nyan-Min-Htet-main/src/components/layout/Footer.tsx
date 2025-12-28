import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2026 Nyan Min Htet.</span>
          </div>
          <div className="text-muted-foreground text-sm">
            <span className="text-gradient font-medium">
              Full-Stack Developer
            </span>{" "}
            • Java & React
          </div>
        </div>
      </div>
    </footer>
  );
}
