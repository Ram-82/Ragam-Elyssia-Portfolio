import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioItem } from "@shared/schema";

const Portfolio = () => {
  const { data: portfolioItems, isLoading } = useQuery<PortfolioItem[]>({ 
    queryKey: ["/api/portfolio"]
  });

  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif text-primary mb-4">Our Portfolio</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how we've transformed brands through AI-powered luxury design
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-48 bg-muted rounded-lg mb-4" />
                    <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems?.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-serif text-primary mb-4">{item.title}</h2>
                      <p className="text-muted-foreground mb-6">{item.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Before</h3>
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={item.beforeAfter.before[0]} 
                              alt="Before"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-2">After</h3>
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={item.beforeAfter.after[0]} 
                              alt="After"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
