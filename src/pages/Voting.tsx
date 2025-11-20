import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Play } from "lucide-react";
import { toast } from "sonner";

const contestants = [
  { id: 1, name: "Ananya Sharma", age: 8, story: "The Magical Forest", votes: 342, thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" },
  { id: 2, name: "Rohan Patel", age: 10, story: "Space Adventure", votes: 298, thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
  { id: 3, name: "Priya Kumar", age: 7, story: "The Kind Princess", votes: 275, thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop" },
  { id: 4, name: "Arjun Singh", age: 9, story: "Robot Friend", votes: 264, thumbnail: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop" },
];

const maxVotes = Math.max(...contestants.map(c => c.votes));

const Voting = () => {
  const handleVote = (name: string) => {
    toast.success(`Vote cast for ${name}!`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Vote for Your <span className="text-primary">Favorite Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Support young storytellers by casting your vote
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {contestants.map((contestant, index) => (
              <div
                key={contestant.id}
                className="bg-card rounded-xl border-2 border-border hover:border-primary transition-all hover-lift p-6"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                    <img
                      src={contestant.thumbnail}
                      alt={contestant.story}
                      className="w-full h-full object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/80 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="h-6 w-6 text-primary ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          #{index + 1}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-xl">{contestant.name}</h3>
                          <p className="text-sm text-muted-foreground">Age {contestant.age} • {contestant.story}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Current Votes</span>
                        <span className="font-semibold">{contestant.votes}</span>
                      </div>
                      <Progress value={(contestant.votes / maxVotes) * 100} className="h-2" />
                    </div>

                    <Button
                      onClick={() => handleVote(contestant.name)}
                      className="w-full md:w-auto bg-primary hover:bg-primary/90"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Vote Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto bg-soft-grey rounded-xl p-6">
            <h3 className="font-heading font-bold text-lg mb-4">Voting Rules</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                One vote per user per day
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Login required to cast votes
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Voting closes on December 31, 2024
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Winners announced on January 5, 2025
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Voting;
