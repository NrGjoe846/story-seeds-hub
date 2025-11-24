import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const events = [
  {
    id: 1,
    title: "Summer Storytelling Championship 2025",
    description: "Join thousands of young storytellers in our biggest competition yet!",
    date: "June 15 - July 30, 2025",
    prize: "₹50,000",
    participants: "2,500+",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    id: 2,
    title: "Monsoon Tales Festival",
    description: "Share your rainy day adventures and magical monsoon stories",
    date: "August 1 - September 15, 2025",
    prize: "₹35,000",
    participants: "1,800+",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Diwali Story Sparkle",
    description: "Illuminate the world with your festive stories and celebrations",
    date: "October 10 - November 5, 2025",
    prize: "₹75,000",
    participants: "3,200+",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Winter Wonder Stories",
    description: "Cozy up and share heartwarming tales from around the world",
    date: "December 1 - January 15, 2026",
    prize: "₹45,000",
    participants: "2,100+",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const EventsCarousel = () => {
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
    <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4 gradient-text">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these exciting storytelling competitions and events
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 transform hover:scale-[1.02] hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-bold text-primary">
                        Live Now
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-4 py-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Trophy className="h-4 w-4 text-brand-yellow" />
                          <span className="font-bold text-brand-yellow">{event.prize}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="font-medium">{event.participants}</span>
                        </div>
                      </div>

                      <Link to="/competitions">
                        <Button className="w-full btn-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                          Join Competition
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover-3d" />
          <CarouselNext className="hover-3d" />
        </Carousel>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
