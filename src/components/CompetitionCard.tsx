import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface CompetitionCardProps {
  title: string;
  description: string;
  deadline: string;
  participants: number;
  prize: string;
  status: "active" | "upcoming" | "ended";
  image: string;
}

const CompetitionCard = ({
  title,
  description,
  deadline,
  participants,
  prize,
  status,
  image,
}: CompetitionCardProps) => {
  const statusColors = {
    active: "bg-green-500",
    upcoming: "bg-blue-500",
    ended: "bg-gray-500",
  };

  return (
    <Card className="overflow-hidden hover-lift border-2 border-border group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge
          className={`absolute top-4 right-4 ${statusColors[status]} text-white`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-heading font-bold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Deadline: {deadline}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{participants} Participants</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Trophy className="h-4 w-4 text-primary" />
            <span>{prize}</span>
          </div>
        </div>

        <Link to="/register" className="block">
          <Button className="w-full bg-primary hover:bg-primary/90">
            Participate Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CompetitionCard;
