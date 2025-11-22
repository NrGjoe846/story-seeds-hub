import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, TrendingUp, Medal, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Contestant {
  id: number;
  name: string;
  votes: number;
  trending: boolean;
}

interface LiveLeaderboardProps {
  contestants: Contestant[];
}

const LiveLeaderboard = ({ contestants }: LiveLeaderboardProps) => {
  const topThree = contestants.slice(0, 3);

  const getMedalIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Crown className="h-6 w-6 text-brand-yellow" />;
      case 1:
        return <Medal className="h-6 w-6 text-muted-foreground" />;
      case 2:
        return <Medal className="h-6 w-6 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <Card className="border-2 border-border hover-lift bg-gradient-to-br from-card to-soft-grey">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          <CardTitle className="font-heading">Live Leaderboard</CardTitle>
          <Badge className="ml-auto bg-primary text-primary-foreground">
            <span className="animate-pulse mr-1">●</span> LIVE
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {topThree.map((contestant, index) => (
          <div
            key={contestant.id}
            className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
              index === 0
                ? "bg-gradient-to-r from-brand-yellow/20 to-transparent border-2 border-brand-yellow/40"
                : "bg-card border border-border"
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10">
              {getMedalIcon(index)}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-heading font-bold">{contestant.name}</h4>
                {contestant.trending && (
                  <Badge variant="outline" className="text-xs gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Rank #{index + 1}
              </p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{contestant.votes}</p>
              <p className="text-xs text-muted-foreground">votes</p>
            </div>
          </div>
        ))}

        <div className="text-center pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Updates every 30 seconds • Next refresh in{" "}
            <span className="text-primary font-semibold">12s</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveLeaderboard;
