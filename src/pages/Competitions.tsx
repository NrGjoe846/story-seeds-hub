import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CompetitionCard from "@/components/CompetitionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const competitions = [
  {
    title: "Winter Tales 2024",
    description: "Share your magical winter stories and win amazing prizes!",
    deadline: "December 31, 2024",
    participants: 342,
    prize: "₹50,000 Prize Pool",
    status: "active" as const,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
  },
  {
    title: "Mythological Adventures",
    description: "Retell your favorite Indian myths with your creative twist",
    deadline: "January 15, 2025",
    participants: 218,
    prize: "₹30,000 Prize Pool",
    status: "active" as const,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=400&fit=crop",
  },
  {
    title: "Future Innovators",
    description: "Imagine and narrate stories about the future of technology",
    deadline: "February 1, 2025",
    participants: 156,
    prize: "₹25,000 Prize Pool",
    status: "upcoming" as const,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    title: "Nature's Symphony",
    description: "Tell stories inspired by nature and the environment",
    deadline: "February 20, 2025",
    participants: 89,
    prize: "₹20,000 Prize Pool",
    status: "upcoming" as const,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
  },
  {
    title: "Diwali Stories 2024",
    description: "Share heartwarming stories from the festival of lights",
    deadline: "November 12, 2024",
    participants: 521,
    prize: "₹40,000 Prize Pool",
    status: "ended" as const,
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&h=400&fit=crop",
  },
  {
    title: "Friendship Chronicles",
    description: "Celebrate friendship through your creative narratives",
    deadline: "October 30, 2024",
    participants: 445,
    prize: "₹35,000 Prize Pool",
    status: "ended" as const,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  },
];

const Competitions = () => {
  const activeCompetitions = competitions.filter((c) => c.status === "active");
  const upcomingCompetitions = competitions.filter(
    (c) => c.status === "upcoming"
  );
  const endedCompetitions = competitions.filter((c) => c.status === "ended");

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Storytelling <span className="text-primary">Competitions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join exciting competitions and showcase your storytelling talent
            </p>
          </div>

          <Tabs defaultValue="active" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeCompetitions.map((competition, index) => (
                  <CompetitionCard key={index} {...competition} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingCompetitions.map((competition, index) => (
                  <CompetitionCard key={index} {...competition} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {endedCompetitions.map((competition, index) => (
                  <CompetitionCard key={index} {...competition} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Competitions;
