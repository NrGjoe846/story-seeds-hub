import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2, Trophy } from "lucide-react";
import { toast } from "sonner";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  contestant: {
    name: string;
    age: number;
    story: string;
    votes: number;
    thumbnail: string;
  };
}

const VideoPlayerModal = ({ isOpen, onClose, contestant }: VideoPlayerModalProps) => {
  const handleVote = () => {
    toast.success(`Vote cast for ${contestant.name}!`, {
      description: "Your support means the world to young storytellers!"
    });
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold">
            {contestant.story}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Video Player */}
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden group">
            <img
              src={contestant.thumbnail}
              alt={contestant.story}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/80 transition-colors flex items-center justify-center cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover-lift">
                <Play className="h-10 w-10 text-primary ml-2" />
              </div>
            </div>
          </div>

          {/* Contestant Info */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold">{contestant.name}</h3>
              <p className="text-muted-foreground">Age {contestant.age} • {contestant.votes} votes</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleShare} variant="outline" size="lg">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button onClick={handleVote} size="lg" className="bg-primary hover:bg-primary/90">
                <Heart className="h-4 w-4 mr-2" />
                Vote Now
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-soft-grey rounded-lg">
              <Trophy className="h-6 w-6 text-brand-yellow mx-auto mb-2" />
              <p className="text-2xl font-bold">{contestant.votes}</p>
              <p className="text-sm text-muted-foreground">Total Votes</p>
            </div>
            <div className="text-center p-4 bg-soft-grey rounded-lg">
              <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">127</p>
              <p className="text-sm text-muted-foreground">Likes</p>
            </div>
            <div className="text-center p-4 bg-soft-grey rounded-lg">
              <Share2 className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">48</p>
              <p className="text-sm text-muted-foreground">Shares</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerModal;
