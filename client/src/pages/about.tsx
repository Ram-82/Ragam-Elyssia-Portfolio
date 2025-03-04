import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Stars, Crown } from "lucide-react";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-primary mb-8 text-center">About Ragam Elyssia</h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground mb-6">
              Ragam Elyssia began with a vision—to merge the timeless elegance of luxury branding with the precision of AI. 
              Born from a passion for artistry and innovation, we craft identities that exude sophistication, exclusivity, and prestige.
            </p>
            <p className="text-muted-foreground">
              Every design, from bespoke logos to immersive brand experiences, is meticulously curated to reflect the essence of high-end elegance. 
              At Ragam Elyssia, we don't just build brands—we create legacies of luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif text-primary mb-4">Mission</h2>
                <p className="text-muted-foreground">
                  Our mission is to redefine luxury branding through AI-driven innovation, 
                  crafting exquisite brand identities, premium packaging, and high-end digital 
                  experiences that elevate elite businesses.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif text-primary mb-4">Vision</h2>
                <p className="text-muted-foreground">
                  To become the leading AI-powered luxury branding studio, setting new standards 
                  in prestige, elegance, and innovation for high-end brands worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center"
            >
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">AI Innovation</h3>
              <p className="text-muted-foreground">
                Cutting-edge AI technology for precision in luxury design
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center"
            >
              <Stars className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Uncompromising attention to detail in every project
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center"
            >
              <Crown className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Luxury Focus</h3>
              <p className="text-muted-foreground">
                Specialized in high-end branding solutions
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
