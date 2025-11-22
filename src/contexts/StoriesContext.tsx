import { createContext, useContext, useState, ReactNode } from 'react';

export interface Story {
  id: string;
  userId: string;
  childName: string;
  age: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  competitionId: string;
  votes: number;
  views: number;
  likes: number;
  shares: number;
  comments: Comment[];
  createdAt: Date;
  trending: boolean;
  featured: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  text: string;
  createdAt: Date;
  likes: number;
}

interface StoriesContextType {
  stories: Story[];
  addStory: (story: Omit<Story, 'id' | 'votes' | 'views' | 'likes' | 'shares' | 'comments' | 'createdAt'>) => void;
  voteStory: (storyId: string) => void;
  likeStory: (storyId: string) => void;
  shareStory: (storyId: string) => void;
  addComment: (storyId: string, text: string, user: any) => void;
  getStoryById: (id: string) => Story | undefined;
  getUserVotes: () => string[];
}

const StoriesContext = createContext<StoriesContextType | undefined>(undefined);

const initialStories: Story[] = [
  {
    id: '1',
    userId: '1',
    childName: 'Ananya Sharma',
    age: 8,
    title: 'The Magical Forest',
    description: 'A journey through an enchanted forest where trees tell stories',
    videoUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    competitionId: 'winter-tales',
    votes: 342,
    views: 1205,
    likes: 267,
    shares: 48,
    comments: [],
    createdAt: new Date('2024-11-15'),
    trending: true,
    featured: true,
  },
  {
    id: '2',
    userId: '2',
    childName: 'Rohan Patel',
    age: 10,
    title: 'Space Adventure',
    description: 'An intergalactic journey to discover new planets',
    videoUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    competitionId: 'winter-tales',
    votes: 298,
    views: 987,
    likes: 223,
    shares: 35,
    comments: [],
    createdAt: new Date('2024-11-14'),
    trending: false,
    featured: false,
  },
];

export const StoriesProvider = ({ children }: { children: ReactNode }) => {
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [userVotes, setUserVotes] = useState<string[]>(() => {
    const stored = localStorage.getItem('storyseeds_votes');
    return stored ? JSON.parse(stored) : [];
  });

  const addStory = (storyData: Omit<Story, 'id' | 'votes' | 'views' | 'likes' | 'shares' | 'comments' | 'createdAt'>) => {
    const newStory: Story = {
      ...storyData,
      id: Date.now().toString(),
      votes: 0,
      views: 0,
      likes: 0,
      shares: 0,
      comments: [],
      createdAt: new Date(),
    };
    setStories(prev => [newStory, ...prev]);
  };

  const voteStory = (storyId: string) => {
    if (userVotes.includes(storyId)) return;

    setStories(prev =>
      prev.map(story =>
        story.id === storyId ? { ...story, votes: story.votes + 1 } : story
      )
    );

    const newVotes = [...userVotes, storyId];
    setUserVotes(newVotes);
    localStorage.setItem('storyseeds_votes', JSON.stringify(newVotes));
  };

  const likeStory = (storyId: string) => {
    setStories(prev =>
      prev.map(story =>
        story.id === storyId ? { ...story, likes: story.likes + 1 } : story
      )
    );
  };

  const shareStory = (storyId: string) => {
    setStories(prev =>
      prev.map(story =>
        story.id === storyId ? { ...story, shares: story.shares + 1 } : story
      )
    );
  };

  const addComment = (storyId: string, text: string, user: any) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      userId: user.id,
      userName: user.name,
      userAvatar: user.avatar,
      text,
      createdAt: new Date(),
      likes: 0,
    };

    setStories(prev =>
      prev.map(story =>
        story.id === storyId
          ? { ...story, comments: [...story.comments, newComment] }
          : story
      )
    );
  };

  const getStoryById = (id: string) => stories.find(s => s.id === id);

  const getUserVotes = () => userVotes;

  return (
    <StoriesContext.Provider
      value={{
        stories,
        addStory,
        voteStory,
        likeStory,
        shareStory,
        addComment,
        getStoryById,
        getUserVotes,
      }}
    >
      {children}
    </StoriesContext.Provider>
  );
};

export const useStories = () => {
  const context = useContext(StoriesContext);
  if (!context) {
    throw new Error('useStories must be used within StoriesProvider');
  }
  return context;
};
