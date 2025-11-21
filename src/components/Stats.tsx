import { Users, Video, Trophy, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Young Storytellers" },
  { icon: Video, value: "25,000+", label: "Stories Shared" },
  { icon: Trophy, value: "500+", label: "Winners Celebrated" },
  { icon: Star, value: "4.9/5", label: "Parent Rating" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-charcoal text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDE2em0wLTEwdjJIMjR2LTJoMTZ6bTAtMTB2MkgyNHYtMmgxNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4 animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
              <stat.icon className="h-12 w-12 mx-auto mb-4 group-hover:scale-125 transition-transform" strokeWidth={2.5} />
              <div className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight">
                {stat.value}
              </div>
              <div className="text-base md:text-lg font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
