import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Story Seeds?",
    answer:
      "Story Seeds is India's premier storytelling platform for children. We provide a safe, supportive environment where kids can share their creative stories through video, participate in competitions, and win exciting awards.",
  },
  {
    question: "What age group can participate?",
    answer:
      "Children aged 4-14 years can participate in our storytelling competitions. We have different categories based on age groups to ensure fair competition.",
  },
  {
    question: "How do I register my child?",
    answer:
      "Registration is simple! Click on 'Register Now', fill in your details, upload your child's story video, and submit. You'll receive a confirmation email once registered.",
  },
  {
    question: "What kind of stories can children share?",
    answer:
      "Children can share any original stories - fairy tales, adventure stories, moral stories, personal experiences, or completely imaginary tales. We encourage creativity and originality!",
  },
  {
    question: "How does the voting system work?",
    answer:
      "Registered users can vote for their favorite stories. Each user gets one vote per competition. Voting is transparent and fair, with real-time leaderboards showing current standings.",
  },
  {
    question: "What are the prizes?",
    answer:
      "We offer various prizes including cash rewards, certificates, trophies, books, and educational subscriptions. Prize details vary by competition and are announced beforehand.",
  },
  {
    question: "Is the platform safe for children?",
    answer:
      "Absolutely! We prioritize child safety with moderated content, secure data handling, and parental control. All videos are reviewed before publication, and we maintain strict privacy policies.",
  },
  {
    question: "How long should the video be?",
    answer:
      "Videos should be between 2-5 minutes long. This duration is perfect for maintaining audience engagement while giving children enough time to tell their complete story.",
  },
  {
    question: "Can I upload multiple stories?",
    answer:
      "Yes! Children can participate in multiple competitions and upload different stories. However, each competition allows only one entry per child.",
  },
  {
    question: "What video format should I use?",
    answer:
      "We accept MP4, MOV, and AVI formats. Ensure good lighting and clear audio for the best viewer experience. Videos should be filmed horizontally (landscape mode).",
  },
  {
    question: "When are winners announced?",
    answer:
      "Winners are announced within 7 days after each competition's deadline. All participants receive email notifications, and results are published on our website and social media.",
  },
  {
    question: "Is there a participation fee?",
    answer:
      "Currently, all competitions are free to enter! We believe in making storytelling accessible to all children regardless of their economic background.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Story Seeds
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border rounded-lg px-6 hover:border-primary transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center bg-soft-grey rounded-2xl p-8 border-2 border-border">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help you with any queries
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
