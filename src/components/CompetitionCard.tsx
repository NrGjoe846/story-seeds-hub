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
    <Card className="overflow-hidden card-premium hover-lift group bg-background">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge
          className={`absolute top-4 right-4 ${statusColors[status]} text-white font-bold px-4 py-2 text-sm rounded-full shadow-lg`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <CardContent className="p-8 space-y-6">
        <h3 className="text-2xl font-heading font-extrabold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-base line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 text-base">
          <div className="flex items-center gap-3 text-foreground font-medium">
            <Calendar className="h-5 w-5 text-primary" strokeWidth={2.5} />
            <span>Deadline: <strong>{deadline}</strong></span>
          </div>
          <div className="flex items-center gap-3 text-foreground font-medium">
            <Users className="h-5 w-5 text-primary" strokeWidth={2.5} />
            <span><strong>{participants}</strong> Participants</span>
          </div>
          <div className="flex items-center gap-3 text-foreground font-medium">
            <Trophy className="h-5 w-5 text-brand-yellow" strokeWidth={2.5} />
            <span>{prize}</span>
          </div>
        </div>

        <Link to="/register" className="block pt-2">
          <Button className="w-full btn-primary h-12 text-base">
            Participate Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CompetitionCard;
