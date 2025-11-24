import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

const heroImages = [
  {
    id: 1,
    image: heroIllustration,
    alt: "Story Seeds - Book transforming into stars",
    gradient: "from-primary/30 to-brand-yellow/30",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    alt: "Children reading and storytelling",
    gradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
    alt: "Creative storytelling competition",
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    alt: "Young storytellers celebrating",
    gradient: "from-orange-500/30 to-pink-500/30",
  },
];

const HeroSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

          <div className="relative animate-float">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {heroImages.map((item) => (
                  <CarouselItem key={item.id}>
                    <div className="relative group">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${item.gradient} rounded-3xl blur-2xl animate-pulse group-hover:blur-3xl transition-all duration-500`}></div>
                      <div className="relative overflow-hidden rounded-3xl">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="relative w-full h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 glow-hover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover-3d -left-12 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary" />
              <CarouselNext className="hover-3d -right-12 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary" />
            </Carousel>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-primary shadow-[0_0_10px_2px_hsl(var(--primary)/0.5)]"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
