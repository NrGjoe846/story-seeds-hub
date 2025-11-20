import { Sparkles, Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
            <p className="text-sm opacity-90">
              Nurturing young storytellers across India. Building confidence, creativity, and communication skills through the magic of storytelling.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity hover:scale-110 transition-transform">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity hover:scale-110 transition-transform">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity hover:scale-110 transition-transform">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity hover:scale-110 transition-transform">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:opacity-80 transition-opacity hover:translate-x-1 inline-block transition-transform">
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
            <h3 className="font-heading font-bold mb-4">Resources</h3>
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
            <h3 className="font-heading font-bold mb-4">Contact Us</h3>
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

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            &copy; 2024 Story Seeds. All rights reserved. Made with ❤️ for young storytellers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
