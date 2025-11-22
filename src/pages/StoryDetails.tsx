import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useStories } from "@/contexts/StoriesContext";
import { Heart, Share2, MessageCircle, Play, Eye, Trophy, ThumbsUp, Send } from "lucide-react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";

const StoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { getStoryById, voteStory, likeStory, shareStory, addComment, getUserVotes, stories } = useStories();
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(true);

  const story = getStoryById(id || '');
  const userVotes = getUserVotes();
  const hasVoted = userVotes.includes(id || '');

  const relatedStories = stories
    .filter(s => s.id !== id && s.competitionId === story?.competitionId)
    .slice(0, 3);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Story not found</p>
      </div>
    );
  }

  const handleVote = () => {
    if (!user) {
      toast.error("Please login to vote");
      return;
    }
    if (hasVoted) {
      toast.error("You've already voted for this story");
      return;
    }
    voteStory(story.id);
    toast.success("Vote cast successfully!");
  };

  const handleLike = () => {
    if (!user) {
      toast.error("Please login to like");
      return;
    }
    likeStory(story.id);
    toast.success("Story liked!");
  };

  const handleShare = async () => {
    shareStory(story.id);
    await navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleComment = () => {
    if (!user) {
      toast.error("Please login to comment");
      return;
    }
    if (!commentText.trim()) return;

    addComment(story.id, commentText, user);
    setCommentText('');
    toast.success("Comment added!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_380px] gap-8">
              <div className="space-y-6">
                <Card className="border-2 border-border overflow-hidden">
                  <div className="relative aspect-video bg-black group">
                    <img
                      src={story.thumbnail}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/80 transition-colors flex items-center justify-center cursor-pointer">
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover-lift">
                        <Play className="h-10 w-10 text-primary ml-2" />
                      </div>
                    </div>
                    {story.trending && (
                      <Badge className="absolute top-4 right-4 bg-brand-yellow text-black">
                        🔥 Trending
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h1 className="text-3xl font-heading font-bold mb-2">{story.title}</h1>
                      <p className="text-muted-foreground">{story.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12 border-2 border-primary">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${story.childName}`} />
                          <AvatarFallback>{story.childName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{story.childName}</p>
                          <p className="text-sm text-muted-foreground">Age {story.age}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Eye className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">{story.views} views</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <Button
                        onClick={handleVote}
                        disabled={hasVoted}
                        className={`flex-1 ${hasVoted ? 'bg-gray-400' : 'bg-primary hover:bg-primary/90'}`}
                        size="lg"
                      >
                        <Heart className="h-5 w-5 mr-2" />
                        {hasVoted ? 'Voted' : 'Vote'}
                        <Badge className="ml-2 bg-white text-primary">{story.votes}</Badge>
                      </Button>

                      <Button
                        onClick={handleLike}
                        variant="outline"
                        size="lg"
                      >
                        <ThumbsUp className="h-5 w-5 mr-2" />
                        Like
                        <Badge variant="outline" className="ml-2">{story.likes}</Badge>
                      </Button>

                      <Button
                        onClick={handleShare}
                        variant="outline"
                        size="lg"
                      >
                        <Share2 className="h-5 w-5 mr-2" />
                        Share
                        <Badge variant="outline" className="ml-2">{story.shares}</Badge>
                      </Button>
                    </div>

                    <div className="p-4 bg-soft-grey rounded-lg">
                      <h3 className="font-heading font-bold mb-2">Competition</h3>
                      <p className="text-sm text-muted-foreground">
                        {story.competitionId === 'winter-tales' && 'Winter Tales 2024'}
                        {story.competitionId === 'mythological' && 'Mythological Adventures'}
                        {story.competitionId === 'future' && 'Future Innovators'}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-heading font-bold flex items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        Comments ({story.comments.length})
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowComments(!showComments)}
                      >
                        {showComments ? 'Hide' : 'Show'}
                      </Button>
                    </div>

                    {user && (
                      <div className="mb-6 space-y-3">
                        <Textarea
                          placeholder="Add a comment..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          rows={3}
                        />
                        <Button onClick={handleComment} disabled={!commentText.trim()}>
                          <Send className="h-4 w-4 mr-2" />
                          Post Comment
                        </Button>
                      </div>
                    )}

                    {showComments && (
                      <div className="space-y-4">
                        {story.comments.length > 0 ? (
                          story.comments.map((comment) => (
                            <div key={comment.id} className="flex gap-4 p-4 bg-soft-grey rounded-lg">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={comment.userAvatar} />
                                <AvatarFallback>{comment.userName.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="font-bold text-sm">{comment.userName}</p>
                                  <span className="text-xs text-muted-foreground">
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                  </span>
                                </div>
                                <p className="text-sm">{comment.text}</p>
                                <Button variant="ghost" size="sm" className="mt-2 h-8 px-2">
                                  <ThumbsUp className="h-3 w-3 mr-1" />
                                  {comment.likes}
                                </Button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-center text-muted-foreground py-8">
                            No comments yet. Be the first to comment!
                          </p>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold mb-4 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      Story Stats
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Total Votes</span>
                        <span className="text-2xl font-bold text-primary">{story.votes}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Views</span>
                        <span className="text-xl font-bold">{story.views}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Likes</span>
                        <span className="text-xl font-bold">{story.likes}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Shares</span>
                        <span className="text-xl font-bold">{story.shares}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold mb-4">Related Stories</h3>
                    <div className="space-y-4">
                      {relatedStories.map((relatedStory) => (
                        <Link key={relatedStory.id} to={`/story/${relatedStory.id}`}>
                          <div className="group cursor-pointer">
                            <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                              <img
                                src={relatedStory.thumbnail}
                                alt={relatedStory.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                              <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/80 transition-colors flex items-center justify-center">
                                <Play className="h-8 w-8 text-white" />
                              </div>
                            </div>
                            <h4 className="font-bold text-sm group-hover:text-primary transition-colors">
                              {relatedStory.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {relatedStory.childName} • {relatedStory.votes} votes
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoryDetails;
