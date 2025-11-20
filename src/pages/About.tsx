import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                About <span className="text-primary">Story Seeds</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Nurturing young storytellers across India
              </p>
            </div>

            <div className="space-y-16">
              <section className="bg-card rounded-2xl border-2 border-border p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-red-light flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Our Story</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Story Seeds was born from a simple belief: every child has a unique story to tell. 
                      In a world dominated by passive screen time, we created a platform that encourages 
                      children to become active creators, confident speakers, and imaginative storytellers.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border-2 border-border p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-red-light flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To become India's leading platform for nurturing young voices, where every child 
                      feels empowered to share their creativity and build confidence through the art of storytelling.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl border-2 border-border p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-red-light flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        We are committed to:
                      </p>
                      <ul className="space-y-3 list-disc list-inside">
                        <li>Providing a safe, supportive environment for children to express themselves</li>
                        <li>Encouraging creativity and imagination through storytelling competitions</li>
                        <li>Building confidence and public speaking skills in young minds</li>
                        <li>Reducing passive screen time with productive, creative activities</li>
                        <li>Celebrating every child's unique voice and perspective</li>
                        <li>Creating memorable experiences that children and families cherish</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-soft-grey rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold mb-6 text-center">
                  Story Seed Studio
                </h2>
                <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                  Our professional studio environment ensures high-quality recordings for every child. 
                  With expert guidance and state-of-the-art equipment, we help young storytellers 
                  present their best selves while maintaining a fun, encouraging atmosphere.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
