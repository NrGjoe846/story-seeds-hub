import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              <span className="text-xl font-heading font-bold">Story Seeds</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empowering young voices through the art of storytelling.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/voting" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Voting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/register" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>contact@storyseeds.in</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Story Seeds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
