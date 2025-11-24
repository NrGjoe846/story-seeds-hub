import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for subscribing! Check your email for confirmation.");
      setEmail("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-charcoal text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-background/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background/10 backdrop-blur-sm mb-6 animate-bounce">
            <Mail className="h-10 w-10" />
          </div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Stay Updated with <span className="text-brand-yellow">Story Seeds</span>
          </h2>

          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for competition updates, storytelling tips, and exclusive content delivered to your inbox!
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 text-lg px-6 bg-background/10 backdrop-blur-sm border-2 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-background hover-3d"
              />
              <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                className="h-14 px-8 bg-background text-primary hover:bg-background/90 font-bold text-lg gap-2 hover:scale-110 hover-3d shadow-2xl"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <p className="text-sm opacity-75 pt-4">
            🔒 We respect your privacy. Unsubscribe at any time. No spam, guaranteed!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { number: "5000+", label: "Newsletter Subscribers" },
              { number: "Weekly", label: "Updates & Tips" },
              { number: "Exclusive", label: "Early Access to Events" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl card-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-heading font-bold text-brand-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
