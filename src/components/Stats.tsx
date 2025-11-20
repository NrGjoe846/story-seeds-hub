import { Users, Video, Trophy, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Young Storytellers" },
  { icon: Video, value: "12,000+", label: "Stories Shared" },
  { icon: Trophy, value: "500+", label: "Awards Given" },
  { icon: Star, value: "50+", label: "Competitions Held" },
];

const Stats = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 hover:scale-105 transition-transform"
            >
              <div className="flex justify-center">
                <stat.icon className="h-10 w-10 md:h-12 md:w-12" />
              </div>
              <p className="text-3xl md:text-4xl font-heading font-bold">
                {stat.value}
              </p>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
