import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Smartphone, Globe, DollarSign, Package, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "Tailored for Your Business",
    description: "Scale effortlessly with custom mobile apps, premium support, and flexible hosting options to match your growth needs."
  },
  {
    icon: Globe,
    title: "Sell Everywhere, Effortlessly",
    description: "Expand your reach by selling on ONDC, Amazon, Flipkart, and your online store - all from a single, easy-to-use platform."
  },
  {
    icon: DollarSign,
    title: "More Sales, Less Cost",
    description: "Avoid high marketplace commissions and own your customer relationships while scaling profitably."
  },
  {
    icon: Package,
    title: "Easy Logistics & Payments",
    description: "Enjoy pre-integrated shipping, payments, and reconciliation tools to streamline operations and reduce complexity."
  },
  {
    icon: Zap,
    title: "Launch Faster, Sell Smarter",
    description: "Get your store live in days, not months, with intuitive product cataloging, integrated payments, and automated order management."
  },
  {
    icon: BarChart3,
    title: "Effortless Inventory & Orders",
    description: "Keep stock levels updated across all platforms and manage orders seamlessly from one dashboard—no manual work needed."
  }
];

const SellrFeaturesSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-secondary/20" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold text-foreground mb-6`}>
            Why Us?
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground max-w-3xl mx-auto`}>
            Discover what makes Sellr the perfect choice for your e-commerce business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellrFeaturesSection;