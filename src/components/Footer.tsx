import { Sparkles, Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-background border-t-4 border-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-heading font-extrabold">Story Seed Studio</span>
            </div>
            <p className="text-base leading-relaxed max-w-xs">
              Nurturing young storytellers across India. Building confidence, creativity, and communication skills through the magic of storytelling.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 hover-3d glow-hover" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 hover-3d glow-hover" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 hover-3d glow-hover" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 hover-3d glow-hover" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-extrabold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/" className="hover:text-primary transition-colors hover:translate-x-2 inline-block transition-transform font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/competitions" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  Competitions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/voting" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  Voting
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-extrabold mb-6 text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/register" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  Register Now
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  Storytelling Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  Video Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-extrabold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@storyseeds.in" className="hover:opacity-80 transition-opacity">
                  hello@storyseeds.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919876543210" className="hover:opacity-80 transition-opacity">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">
                  123 Story Lane<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-primary/20 mt-12 pt-8 text-center">
          <p className="text-base font-medium animate-fade-in">
            &copy; 2025 Story Seed Studio. All rights reserved. Made with <span className="text-primary animate-pulse">❤️</span> for young storytellers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
