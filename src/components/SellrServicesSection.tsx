import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ShoppingCart, Smartphone, Database, Users, Building, GraduationCap, Code, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Medusa Development",
    description: "Custom e-commerce solutions built with Medusa.js for maximum flexibility and performance."
  },
  {
    icon: ShoppingCart,
    title: "B2C E-Commerce Development",
    description: "Direct-to-consumer platforms that drive sales and enhance customer experience."
  },
  {
    icon: Smartphone,
    title: "DTC E-Commerce Development",
    description: "Direct-to-consumer mobile-first solutions for modern retail businesses."
  },
  {
    icon: Database,
    title: "Migration to Medusa js",
    description: "Seamless migration services to move your existing store to Medusa.js platform."
  },
  {
    icon: Users,
    title: "Multi Vendor Marketplace",
    description: "Build comprehensive marketplaces that connect multiple vendors with customers."
  },
  {
    icon: Building,
    title: "Multi Store E-Commerce",
    description: "Manage multiple stores from a single dashboard with centralized control."
  },
  {
    icon: Users,
    title: "Multi Tenant E-Commerce",
    description: "Scalable multi-tenant architecture for enterprise-level e-commerce solutions."
  },
  {
    icon: GraduationCap,
    title: "Subscription Based E-Commerce",
    description: "Recurring revenue models with automated subscription management systems."
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce",
    description: "Native mobile applications that provide seamless shopping experiences."
  }
];

const SellrServicesSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold text-foreground mb-6`}>
            Our Services
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground max-w-3xl mx-auto`}>
            Comprehensive e-commerce solutions tailored to your business needs. From development to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 inline-flex items-center gap-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started with Our Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SellrServicesSection;