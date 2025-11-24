import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EventsCarousel from "@/components/EventsCarousel";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import ParallaxSection from "@/components/ParallaxSection";
import Testimonials from "@/components/Testimonials";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <EventsCarousel />
        <Stats />
        <HowItWorks />
        <WhyChooseUs />
        <ParallaxSection />
        <Testimonials />
        <NewsletterSection />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
