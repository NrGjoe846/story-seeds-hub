import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStories } from "@/contexts/StoriesContext";
import { Calendar, Users, Trophy, Video, Play, Heart, Clock, Gift } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const CompetitionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { stories } = useStories();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const competitionData = {
    'winter-tales': {
      title: 'Winter Tales 2024',
      description: 'Share your magical winter stories and win amazing prizes! Let your imagination flow with tales of snow, warmth, and wonder.',
      deadline: 'December 31, 2024',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&h=600&fit=crop',
      status: 'active',
      participants: 342,
      prizePool: '₹50,000',
      prizes: [
        { place: '1st', amount: '₹20,000', description: 'Trophy + Certificate' },
        { place: '2nd', amount: '₹15,000', description: 'Trophy + Certificate' },
        { place: '3rd', amount: '₹10,000', description: 'Trophy + Certificate' },
        { place: 'Participation', amount: 'Certificate', description: 'All participants' },
      ],
      categories: ['All', 'Fantasy', 'Adventure', 'Comedy'],
      rules: [
        'Story must be original and created by the child',
        'Video length: 2-5 minutes',
        'Age group: 5-16 years',
        'One entry per child',
        'Submit before deadline',
      ],
      daysLeft: 45,
    },
  };

  const competition = competitionData[id as keyof typeof competitionData];
  const competitionStories = stories.filter(s => s.competitionId === id);
  const topStories = [...competitionStories].sort((a, b) => b.votes - a.votes).slice(0, 10);

  if (!competition) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Competition not found</p>
      </div>
    );
  }

  const progressPercentage = ((competition.participants / 500) * 100);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="relative h-80 overflow-hidden mb-8">
          <img
            src={competition.image}
            alt={competition.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Badge className="bg-primary text-primary-foreground mb-4">
                {competition.status === 'active' ? 'Active Now' : 'Upcoming'}
              </Badge>
              <h1 className="text-5xl font-heading font-bold text-white mb-4">
                {competition.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {competition.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_360px] gap-8">
            <div className="space-y-8">
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="border-2 border-border hover-lift">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold">{competition.participants}</p>
                    <p className="text-sm text-muted-foreground">Participants</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover-lift">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-8 w-8 text-brand-yellow mx-auto mb-2" />
                    <p className="text-3xl font-bold">{competition.prizePool}</p>
                    <p className="text-sm text-muted-foreground">Prize Pool</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover-lift">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold">{competition.daysLeft}</p>
                    <p className="text-sm text-muted-foreground">Days Left</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover-lift">
                  <CardContent className="p-6 text-center">
                    <Video className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold">{competitionStories.length}</p>
                    <p className="text-sm text-muted-foreground">Entries</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold">Registration Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {competition.participants} / 500 spots
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                    <p className="text-sm text-muted-foreground">
                      {Math.round(100 - progressPercentage)}% spots remaining
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="entries" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="entries">Entries</TabsTrigger>
                  <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                  <TabsTrigger value="rules">Rules</TabsTrigger>
                </TabsList>

                <TabsContent value="entries" className="space-y-4">
                  <div className="flex gap-2 flex-wrap mb-4">
                    {competition.categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category.toLowerCase() ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category.toLowerCase())}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {competitionStories.map((story) => (
                      <Link key={story.id} to={`/story/${story.id}`}>
                        <Card className="border-2 border-border hover:border-primary hover-lift group">
                          <div className="relative aspect-video overflow-hidden rounded-t-lg">
                            <img
                              src={story.thumbnail}
                              alt={story.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/80 transition-colors flex items-center justify-center">
                              <Play className="h-12 w-12 text-white" />
                            </div>
                            {story.trending && (
                              <Badge className="absolute top-2 right-2 bg-brand-yellow text-black">
                                🔥 Trending
                              </Badge>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                              {story.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                              {story.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{story.childName}</span>
                              <div className="flex items-center gap-1 text-primary">
                                <Heart className="h-4 w-4" />
                                <span className="text-sm font-bold">{story.votes}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="leaderboard">
                  <Card className="border-2 border-border">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {topStories.map((story, index) => (
                          <Link key={story.id} to={`/story/${story.id}`}>
                            <div className="flex items-center gap-4 p-4 bg-soft-grey rounded-lg hover:bg-border transition-colors">
                              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                                #{index + 1}
                              </div>
                              <img
                                src={story.thumbnail}
                                alt={story.title}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <p className="font-bold">{story.title}</p>
                                <p className="text-sm text-muted-foreground">{story.childName}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-primary">{story.votes}</p>
                                <p className="text-xs text-muted-foreground">votes</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="rules">
                  <Card className="border-2 border-border">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-heading font-bold">Competition Rules</h3>
                      <ul className="space-y-3">
                        {competition.rules.map((rule, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary font-bold text-sm">{index + 1}</span>
                            </div>
                            <span className="text-muted-foreground">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Important Dates
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium">Deadline</p>
                      <p className="text-lg font-bold text-primary">{competition.deadline}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Winner Announcement</p>
                      <p className="text-lg font-bold">January 5, 2025</p>
                    </div>
                  </div>
                  <Link to="/upload">
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Video className="h-5 w-5 mr-2" />
                      Participate Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-gradient-to-br from-brand-yellow/20 to-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-brand-yellow" />
                    Prizes
                  </h3>
                  <div className="space-y-3">
                    {competition.prizes.map((prize, index) => (
                      <div key={index} className="p-3 bg-white rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold">{prize.place} Place</span>
                          <span className="font-bold text-primary">{prize.amount}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{prize.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompetitionDetail;
