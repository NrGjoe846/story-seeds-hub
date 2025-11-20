import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login successful!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16 bg-soft-grey">
        <div className="w-full max-w-md px-4">
          <div className="bg-card rounded-2xl border-2 border-border p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red-light mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Login to access your Story Seeds account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="border-input focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="border-input focus:border-primary"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Login
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/register" className="text-primary hover:underline font-medium">
                Register here
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
