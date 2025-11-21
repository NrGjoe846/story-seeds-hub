import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of Ananya, Age 8",
    content: "Story Seeds has transformed my daughter's confidence! She used to be shy, but now she loves telling stories to everyone.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Rajesh Kumar",
    role: "Father of Arjun, Age 10",
    content: "The competitions are brilliantly organized. My son won his first award and it boosted his creativity tremendously!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Meera Reddy",
    role: "Parent & Teacher",
    content: "As both a parent and educator, I love how Story Seeds combines entertainment with learning. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="accent-divider mb-16" />
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 text-foreground">
            What <span className="text-primary">Parents Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Hear from families who've experienced the magic of Story Seed Studio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-premium hover-lift bg-background group"
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-brand-yellow text-brand-yellow"
                    />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t-2 border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-foreground text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="accent-divider mt-16" />
      </div>
    </section>
  );
};

export default Testimonials;
