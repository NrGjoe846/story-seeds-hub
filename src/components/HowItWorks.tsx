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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="accent-divider mb-16" />
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Three simple steps to share your story with the world
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-2 bg-border rounded-full">
            <div className="h-full bg-gradient-to-r from-primary to-brand-yellow w-0 animate-[width_2s_ease-in-out] rounded-full" style={{animationFillMode: "forwards"}} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card-premium p-10 hover:border-primary hover-lift bg-background group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto shadow-[0_8px_24px_-4px_hsl(356_92%_47%/0.4)] group-hover:scale-110 transition-transform">
                    <step.icon className="h-10 w-10 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-brand-yellow text-black flex items-center justify-center text-lg font-extrabold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-center text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="accent-divider mt-16" />
      </div>
    </section>
  );
};

export default HowItWorks;
