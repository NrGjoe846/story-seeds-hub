import { Mic, Video, Trophy } from "lucide-react";

const steps = [
  {
    icon: Mic,
    title: "Tell A Story",
    description: "Choose your favorite topic and let your imagination flow. Every story matters!",
  },
  {
    icon: Video,
    title: "Upload A Video",
    description: "Record yourself telling your story and upload it to our platform.",
  },
  {
    icon: Trophy,
    title: "Get Votes & Win Awards",
    description: "Share with friends and family. Top stories win exciting prizes and recognition!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-soft-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to share your story with the world
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-primary/20">
            <div className="h-full bg-primary w-0 animate-[width_2s_ease-in-out]" style={{animationFillMode: "forwards"}} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary transition-all hover-lift"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
