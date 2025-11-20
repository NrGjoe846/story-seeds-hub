import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

const galleryItems = [
  { id: 1, title: "The Magical Forest", child: "Ananya, 8", thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" },
  { id: 2, title: "Space Adventure", child: "Rohan, 10", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
  { id: 3, title: "The Kind Princess", child: "Priya, 7", thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop" },
  { id: 4, title: "Robot Friend", child: "Arjun, 9", thumbnail: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop" },
  { id: 5, title: "Ocean Mystery", child: "Diya, 11", thumbnail: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8e0?w=400&h=300&fit=crop" },
  { id: 6, title: "The Brave Knight", child: "Aarav, 12", thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Story <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch amazing stories from our talented young storytellers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-card rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-all hover-lift cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/80 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">By {item.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
