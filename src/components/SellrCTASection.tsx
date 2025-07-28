import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Rocket, TrendingUp, Shield, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: "Launch Fast",
    description: "Get your store live in days"
  },
  {
    icon: TrendingUp,
    title: "Scale Smart",
    description: "Grow your business efficiently"
  },
  {
    icon: Shield,
    title: "Stay Secure",
    description: "Enterprise-grade security"
  },
  {
    icon: Zap,
    title: "Automate Everything",
    description: "Focus on what matters most"
  }
];

const SellrCTASection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5" id="cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold text-foreground mb-6`}>
            Supercharge Your Business
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground mb-4`}>
            Discover the Future of Digital commerce with Sellr!
          </p>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground mb-8 max-w-2xl mx-auto`}>
            Take control of your business with Sellr's Digital commerce and embedded finance platform. Start Growing today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-4 text-lg"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellrCTASection;