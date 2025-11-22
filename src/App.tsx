import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { StoriesProvider } from "@/contexts/StoriesContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Voting from "./pages/Voting";
import Leaderboard from "./pages/Leaderboard";
import Competitions from "./pages/Competitions";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import UploadStory from "./pages/UploadStory";
import StoryDetails from "./pages/StoryDetails";
import CompetitionDetail from "./pages/CompetitionDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <StoriesProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/competition/:id" element={<CompetitionDetail />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/upload" element={<UploadStory />} />
              <Route path="/story/:id" element={<StoryDetails />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </StoriesProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
