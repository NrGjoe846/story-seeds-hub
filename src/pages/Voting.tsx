import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Play, Award, Clock, Users, Info } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import VideoPlayerModal from "@/components/VideoPlayerModal";
import FilterBar from "@/components/FilterBar";
import LiveLeaderboard from "@/components/LiveLeaderboard";
import { Badge } from "@/components/ui/badge";

const contestants = [
  { id: 1, name: "Ananya Sharma", age: 8, story: "The Magical Forest", votes: 342, thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop", trending: true },
  { id: 2, name: "Rohan Patel", age: 10, story: "Space Adventure", votes: 298, thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", trending: false },
  { id: 3, name: "Priya Kumar", age: 7, story: "The Kind Princess", votes: 275, thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop", trending: true },
  { id: 4, name: "Arjun Singh", age: 9, story: "Robot Friend", votes: 264, thumbnail: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop", trending: false },
  { id: 5, name: "Meera Reddy", age: 11, story: "Ocean Mystery", votes: 251, thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop", trending: false },
  { id: 6, name: "Kabir Mehta", age: 8, story: "Time Traveler", votes: 243, thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop", trending: true },
];

const maxVotes = Math.max(...contestants.map(c => c.votes));

const Voting = () => {
  const [selectedContestant, setSelectedContestant] = useState<typeof contestants[0] | null>(null);
  const [filteredContestants, setFilteredContestants] = useState(contestants);
  const [searchTerm, setSearchTerm] = useState("");

  const handleVote = (name: string) => {
    toast.success(`Vote cast for ${name}!`, {
      description: "Your support means the world! 🌟"
    });
  };

  const handleSort = (sortBy: string) => {
    let sorted = [...filteredContestants];
    if (sortBy === "votes") {
      sorted.sort((a, b) => b.votes - a.votes);
    } else if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredContestants(sorted);
  };

  const handleAgeFilter = (ageRange: string) => {
    if (ageRange === "all") {
      setFilteredContestants(contestants);
    } else {
      const [min, max] = ageRange.split("-").map(Number);
      const filtered = contestants.filter(c => c.age >= min && c.age <= max);
      setFilteredContestants(filtered);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = contestants.filter(
      c => c.name.toLowerCase().includes(term.toLowerCase()) ||
           c.story.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredContestants(filtered);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
              <span className="animate-pulse mr-2">●</span>
              Competition Ends in 3 Days
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4">
              Vote for Your <span className="text-primary">Favorite Story</span>
              <span className="text-brand-yellow">!</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Support young storytellers by casting your vote
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="text-center p-6 bg-card rounded-xl border-2 border-border hover-lift">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">{contestants.length}</p>
              <p className="text-sm text-muted-foreground">Contestants</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border-2 border-border hover-lift">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">1,275</p>
              <p className="text-sm text-muted-foreground">Total Votes</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border-2 border-border hover-lift">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">72h</p>
              <p className="text-sm text-muted-foreground">Time Left</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Filters */}
              <FilterBar
                onSortChange={handleSort}
                onAgeFilterChange={handleAgeFilter}
                onSearchChange={handleSearch}
              />

              {/* Contestants */}
              {filteredContestants.map((contestant, index) => (
                <div
                  key={contestant.id}
                  className="bg-card rounded-xl border-2 border-border hover:border-primary transition-all hover-lift p-6 relative overflow-hidden"
                >
                  {contestant.trending && (
                    <Badge className="absolute top-4 right-4 bg-brand-yellow text-black gap-1">
                      🔥 Trending
                    </Badge>
                  )}
                  
                  <div className="grid md:grid-cols-[240px_1fr] gap-6">
                    <div 
                      className="relative group cursor-pointer rounded-lg overflow-hidden"
                      onClick={() => setSelectedContestant(contestant)}
                    >
                      <img
                        src={contestant.thumbnail}
                        alt={contestant.story}
                        className="w-full h-full object-cover aspect-video"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/80 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover-lift">
                          <Play className="h-8 w-8 text-primary ml-2" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        2:34
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          {index < 3 && (
                            <div className="flex items-center gap-1">
                              <Award className={`h-6 w-6 ${
                                index === 0 ? "text-brand-yellow" : 
                                index === 1 ? "text-muted-foreground" : 
                                "text-amber-700"
                              }`} />
                            </div>
                          )}
                          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            #{index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading font-bold text-xl">{contestant.name}</h3>
                            <p className="text-sm text-muted-foreground">Age {contestant.age} • {contestant.story}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Current Votes</span>
                          <span className="font-bold text-lg text-primary">{contestant.votes}</span>
                        </div>
                        <Progress value={(contestant.votes / maxVotes) * 100} className="h-3" />
                        <p className="text-xs text-muted-foreground">
                          {Math.round((contestant.votes / maxVotes) * 100)}% of top votes
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleVote(contestant.name)}
                          className="flex-1 bg-primary hover:bg-primary/90"
                          size="lg"
                        >
                          <Heart className="h-4 w-4 mr-2" />
                          Vote Now
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => setSelectedContestant(contestant)}
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <LiveLeaderboard contestants={contestants} />

              <div className="bg-card rounded-xl border-2 border-border p-6">
                <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Voting Rules
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">1</span>
                    </div>
                    <span className="text-muted-foreground">One vote per user per day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">2</span>
                    </div>
                    <span className="text-muted-foreground">Login required to cast votes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">3</span>
                    </div>
                    <span className="text-muted-foreground">Voting closes Dec 31, 2024</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">4</span>
                    </div>
                    <span className="text-muted-foreground">Winners announced Jan 5, 2025</span>
                  </li>
                </ul>
              </div>

              {/* Prize Pool */}
              <div className="bg-gradient-to-br from-brand-yellow/20 to-primary/20 rounded-xl border-2 border-brand-yellow/40 p-6">
                <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-yellow" />
                  Prize Pool
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🥇 1st Place</span>
                    <span className="font-bold">₹10,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🥈 2nd Place</span>
                    <span className="font-bold">₹5,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🥉 3rd Place</span>
                    <span className="font-bold">₹2,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <VideoPlayerModal
        isOpen={!!selectedContestant}
        onClose={() => setSelectedContestant(null)}
        contestant={selectedContestant || contestants[0]}
      />

      <Footer />
    </div>
  );
};

export default Voting;
