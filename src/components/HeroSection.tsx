import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-brand-red-light to-background">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Small Voices.{" "}
              <span className="text-primary">Big Dreams.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              India's most joyful storytelling platform for children. Share your stories, compete with peers, and win exciting awards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Register Now
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-brand-red-light">
                  View Competitions
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-float">
            <img
              src={heroIllustration}
              alt="Story Seeds - Book transforming into stars"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;
