import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Award, Users } from "lucide-react";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-brand-yellow/20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-32 left-[15%]"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <Sparkles className="w-12 h-12 text-brand-yellow animate-spin-slow" />
      </div>

      <div
        className="absolute bottom-32 right-[15%]"
        style={{
          transform: `translateY(${-scrollY * 0.15}px)`,
        }}
      >
        <Award className="w-16 h-16 text-primary animate-bounce" />
      </div>

      <div
        className="absolute top-1/2 right-[20%]"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <Users className="w-14 h-14 text-primary/50 animate-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
            Ready to Share Your
            <span className="gradient-text block mt-2">Amazing Story?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of young storytellers and showcase your creativity to the world. Win exciting prizes and recognition!
          </p>
          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <Link to="/register">
              <Button size="lg" className="btn-primary text-xl h-16 px-12 hover:scale-110 shadow-2xl shadow-primary/40">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/competitions">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-xl h-16 px-12 border-2 hover:bg-foreground hover:text-background hover:scale-110 transition-all"
              >
                Explore Competitions
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {[
              { number: "10,000+", label: "Young Storytellers" },
              { number: "500+", label: "Competitions Held" },
              { number: "₹50L+", label: "Prizes Awarded" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl card-3d hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
