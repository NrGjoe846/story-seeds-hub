import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.1] tracking-tight text-foreground">
              Small Voices.{" "}
              <span className="text-primary">Big Dreams</span>
              <span className="text-brand-yellow">!</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-medium leading-relaxed">
              India's most joyful storytelling platform for children. Share your stories, compete with peers, and win exciting awards.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/register">
                <Button size="lg" className="btn-primary text-lg h-14 shadow-[0_4px_16px_-4px_hsl(356_92%_47%/0.4)] hover:shadow-[0_8px_24px_-4px_hsl(356_92%_47%/0.6)] animate-bounce">
                  Register Now
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold rounded-full transition-all hover:scale-110 hover-3d">
                  View Competitions
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-float float-3d">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-brand-yellow/20 rounded-3xl blur-2xl animate-pulse"></div>
            <img
              src={heroIllustration}
              alt="Story Seeds - Book transforming into stars"
              className="relative w-full h-auto drop-shadow-2xl glow-hover"
            />
          </div>
        </div>
      </div>

      {/* Decorative leaf elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="accent-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default HeroSection;
