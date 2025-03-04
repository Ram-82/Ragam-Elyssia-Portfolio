import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Package, Palette, Monitor, MessageSquare, Plus } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: <Paintbrush className="h-12 w-12 text-primary" />,
    title: "Luxury Logo Design",
    price: "₹25,000",
    features: [
      "AI-enhanced, bespoke logo creation",
      "Multiple high-end design variations",
      "Full ownership & brand identity integration"
    ]
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "Brand Identity Package",
    price: "₹50,000",
    features: [
      "Custom logo, color palette & typography",
      "Brand guidelines for consistency",
      "AI-generated business cards & marketing assets"
    ]
  },
  {
    icon: <Package className="h-12 w-12 text-primary" />,
    title: "Premium Packaging Design",
    price: "₹60,000",
    features: [
      "Elegant, AI-crafted luxury packaging",
      "3D mockups for realistic presentation",
      "Print-ready files for production"
    ]
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
    title: "Social Media Content Strategy",
    price: "₹40,000",
    features: [
      "AI-generated high-end visuals & templates",
      "Instagram, LinkedIn & Behance optimization",
      "Content strategy for luxury audience"
    ]
  },
  {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "AI-Powered Website Mockups",
    price: "₹75,000",
    features: [
      "Custom-designed, luxury website mockups",
      "AI-enhanced UI/UX with premium aesthetics",
      "Responsive layouts for seamless experience"
    ]
  }
];

const addons = [
  {
    title: "Luxury Branding Consultation",
    price: "₹10,000/hr"
  },
  {
    title: "Elite Brand Storytelling & Messaging",
    price: "₹20,000"
  },
  {
    title: "Interactive AI-Generated Mood Boards",
    price: "₹15,000"
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif text-primary mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exclusive AI-powered luxury branding services tailored for high-end businesses.
              We blend artistry with technology to create timeless, sophisticated brand experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="font-serif">{service.title}</CardTitle>
                    <p className="text-2xl font-medium text-primary mt-2">{service.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <Plus className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-serif text-primary mb-6 text-center">
              Exclusive Add-ons
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">{addon.title}</h3>
                    <p className="text-primary">{addon.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
