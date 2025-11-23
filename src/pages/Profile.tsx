import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { Play, Upload, Trophy, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("stories");

  const myStories = [
    {
      id: 1,
      title: "My Adventure Story",
      votes: 234,
      views: 1204,
      status: "Active",
    },
  ];

  const votedStories = [
    {
      id: 2,
      title: "Space Explorer",
      creator: "John Doe",
      votedAt: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback className="text-2xl">
                    {user?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{user?.name}</h1>
                  <p className="text-muted-foreground mb-4">{user?.email}</p>
                  <div className="flex gap-6 mb-4">
                    <div>
                      <p className="text-2xl font-bold">5</p>
                      <p className="text-sm text-muted-foreground">Stories</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">234</p>
                      <p className="text-sm text-muted-foreground">Total Votes</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">Voted On</p>
                    </div>
                  </div>
                  <Link to="/upload">
                    <Button className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload New Story
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="stories">My Stories</TabsTrigger>
              <TabsTrigger value="voted">Voted Stories</TabsTrigger>
            </TabsList>

            <TabsContent value="stories" className="mt-6">
              <div className="grid gap-4">
                {myStories.map((story) => (
                  <Card key={story.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {story.title}
                          </CardTitle>
                          <Badge variant="secondary">{story.status}</Badge>
                        </div>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Play className="h-4 w-4" />
                          View
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-primary" />
                          <span>{story.votes} votes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Play className="h-4 w-4 text-primary" />
                          <span>{story.views} views</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="voted" className="mt-6">
              <div className="grid gap-4">
                {votedStories.map((story) => (
                  <Card key={story.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold mb-1">{story.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            by {story.creator}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Heart className="h-4 w-4 fill-primary text-primary" />
                            <span>Voted {story.votedAt}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            View Story
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default Profile;
