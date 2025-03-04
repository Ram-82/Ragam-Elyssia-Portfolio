import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Newsletter from "@/components/home/Newsletter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Hero />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-primary mb-6">
              AI-Powered Luxury Branding
            </h2>
            <p className="text-muted-foreground mb-8">
              Ragam Elyssia leverages artificial intelligence to create high-end logos,
              brand identities, packaging, and marketing visuals with precision,
              speed, and exclusivity, ensuring a unique and premium brand presence.
            </p>
          </div>
        </div>
      </motion.section>

      <Services />
      <Newsletter />
    </div>
  );
};

export default Home;
