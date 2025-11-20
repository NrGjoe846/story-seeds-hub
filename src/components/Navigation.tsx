import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-heading font-bold text-foreground">
              Story Seeds
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/voting"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Voting
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
