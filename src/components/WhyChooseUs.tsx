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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-primary">Story Seeds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to nurturing the next generation of storytellers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-all hover-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-red-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
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
