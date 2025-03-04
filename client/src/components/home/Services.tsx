import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Paintbrush, Package, Palette, Monitor, MessageSquare } from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "Luxury Logo Design",
    description: "AI-enhanced, bespoke logo creation with premium aesthetics",
    price: "₹25,000"
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Brand Identity Package",
    description: "Complete brand guidelines with AI-generated assets",
    price: "₹50,000"
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: "Premium Packaging",
    description: "Elegant, AI-crafted luxury packaging design",
    price: "₹60,000"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Social Media Strategy",
    description: "AI-powered content strategy for luxury brands",
    price: "₹40,000"
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Website Mockups",
    description: "Custom-designed, luxury website concepts",
    price: "₹75,000"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exclusive AI-powered luxury branding services tailored for high-end businesses
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-card hover:bg-card/80 transition-colors">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="font-serif">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <p className="text-primary font-medium mt-2">{service.price}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
