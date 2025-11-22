import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Trophy, Medal, Crown, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const leaderboard = [
  { rank: 1, name: "Ananya Sharma", age: 8, story: "The Magical Forest", votes: 342, change: "+12", avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop" },
  { rank: 2, name: "Rohan Patel", age: 10, story: "Space Adventure", votes: 298, change: "+8", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop" },
  { rank: 3, name: "Priya Kumar", age: 7, story: "The Kind Princess", votes: 275, change: "+15", avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop" },
  { rank: 4, name: "Arjun Singh", age: 9, story: "Robot Friend", votes: 264, change: "-2", avatar: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=100&h=100&fit=crop" },
  { rank: 5, name: "Meera Reddy", age: 11, story: "Ocean Mystery", votes: 251, change: "+5", avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop" },
  { rank: 6, name: "Kabir Mehta", age: 8, story: "Time Traveler", votes: 243, change: "+18", avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop" },
];

const Leaderboard = () => {
  const maxVotes = Math.max(...leaderboard.map(l => l.votes));

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-10 w-10 text-brand-yellow" />;
      case 2:
        return <Medal className="h-10 w-10 text-muted-foreground" />;
      case 3:
        return <Medal className="h-10 w-10 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4">
              Live <span className="text-primary">Leaderboard</span>
              <span className="text-brand-yellow">!</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See who's leading the competition in real-time
            </p>
            <Badge className="mt-4 bg-primary text-primary-foreground px-4 py-2">
              <span className="animate-pulse mr-2">●</span>
              Updated 2 minutes ago
            </Badge>
          </div>

          {/* Top 3 Podium */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-end">
              {/* 2nd Place */}
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-muted/50 to-card rounded-xl border-2 border-border p-6 text-center hover-lift">
                  <Medal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <img
                    src={leaderboard[1].avatar}
                    alt={leaderboard[1].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-border object-cover"
                  />
                  <h3 className="font-heading font-bold text-lg mb-1">{leaderboard[1].name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{leaderboard[1].story}</p>
                  <div className="text-3xl font-bold text-primary mb-2">{leaderboard[1].votes}</div>
                  <p className="text-xs text-muted-foreground">votes</p>
                  <Badge variant="outline" className="mt-4">
                    2nd Place
                  </Badge>
                </div>
              </div>

              {/* 1st Place */}
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-brand-yellow/30 to-primary/20 rounded-xl border-4 border-brand-yellow p-8 text-center hover-lift transform md:scale-110">
                  <Crown className="h-16 w-16 text-brand-yellow mx-auto mb-4 animate-pulse" />
                  <img
                    src={leaderboard[0].avatar}
                    alt={leaderboard[0].name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-yellow object-cover"
                  />
                  <h3 className="font-heading font-bold text-2xl mb-1">{leaderboard[0].name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{leaderboard[0].story}</p>
                  <div className="text-4xl font-bold text-primary mb-2">{leaderboard[0].votes}</div>
                  <p className="text-sm text-muted-foreground">votes</p>
                  <Badge className="mt-4 bg-brand-yellow text-black">
                    🏆 Champion
                  </Badge>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="order-3">
                <div className="bg-gradient-to-br from-amber-900/20 to-card rounded-xl border-2 border-border p-6 text-center hover-lift">
                  <Medal className="h-12 w-12 text-amber-700 mx-auto mb-4" />
                  <img
                    src={leaderboard[2].avatar}
                    alt={leaderboard[2].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-border object-cover"
                  />
                  <h3 className="font-heading font-bold text-lg mb-1">{leaderboard[2].name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{leaderboard[2].story}</p>
                  <div className="text-3xl font-bold text-primary mb-2">{leaderboard[2].votes}</div>
                  <p className="text-xs text-muted-foreground">votes</p>
                  <Badge variant="outline" className="mt-4">
                    3rd Place
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Full Leaderboard */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Full Rankings
            </h2>
            
            <div className="space-y-4">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`bg-card rounded-xl border-2 p-6 hover-lift transition-all ${
                    entry.rank <= 3 ? "border-primary" : "border-border hover:border-primary"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    {/* Rank */}
                    <div className="flex flex-col items-center gap-2">
                      {entry.rank <= 3 ? (
                        getMedalIcon(entry.rank)
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-soft-grey flex items-center justify-center">
                          <span className="text-xl font-bold text-muted-foreground">#{entry.rank}</span>
                        </div>
                      )}
                    </div>

                    {/* Avatar & Info */}
                    <img
                      src={entry.avatar}
                      alt={entry.name}
                      className="w-16 h-16 rounded-full border-2 border-border object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg mb-1">{entry.name}</h3>
                      <p className="text-sm text-muted-foreground">Age {entry.age} • {entry.story}</p>
                      <div className="mt-3">
                        <Progress value={(entry.votes / maxVotes) * 100} className="h-2" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary mb-1">{entry.votes}</div>
                      <p className="text-xs text-muted-foreground mb-2">votes</p>
                      <Badge 
                        variant="outline" 
                        className={entry.change.startsWith("+") ? "text-green-600" : "text-red-600"}
                      >
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {entry.change}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
