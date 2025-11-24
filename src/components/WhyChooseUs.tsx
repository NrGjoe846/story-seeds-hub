import { Shield, Lightbulb, Award, Users, Clock, Mic2, GraduationCap, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Builds Confidence",
    description: "Help children develop public speaking skills and self-assurance through creative expression.",
  },
  {
    icon: Award,
    title: "Enhances Creativity",
    description: "Nurture imagination and storytelling abilities in a supportive, engaging environment.",
  },
  {
    icon: Clock,
    title: "Reduces Screen Time",
    description: "Encourage productive, creative activities that inspire rather than just entertain.",
  },
  {
    icon: Shield,
    title: "Safe & Supportive",
    description: "A moderated platform where every child's voice is valued and protected.",
  },
  {
    icon: Trophy,
    title: "Competitions & Awards",
    description: "Regular contests with exciting prizes and certificates to celebrate young talent.",
  },
  {
    icon: Mic2,
    title: "Professional Recordings",
    description: "High-quality video submissions that children can cherish forever.",
  },
  {
    icon: GraduationCap,
    title: "School & Parent Friendly",
    description: "Designed with educators and parents to support holistic child development.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-soft-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 text-foreground">
            Why Choose <span className="text-primary">Story Seed Studio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            We're committed to nurturing the next generation of storytellers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-premium p-8 hover:border-primary hover-lift group bg-background card-3d animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg glow-hover">
                <benefit.icon className="h-8 w-8 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-heading font-extrabold mb-3 text-foreground group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
