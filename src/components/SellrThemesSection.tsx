import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LazyImage from './LazyImage';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';

const themes = [
  {
    id: 1,
    name: "Fashion Store",
    image: "https://sellr.traversetec.co/images/Frame-1171274925.png?auto=format&fit=crop&w=800&q=80",
    category: "Fashion"
  },
  {
    id: 2,
    name: "Electronics Hub",
    image: "https://sellr.traversetec.co/images/Frame-1171274923.png?auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Niche Stores",
    image: "https://sellr.traversetec.co/images/Frame-1171274924.png?auto=format&fit=crop&w=800&q=80",
    category: "Niche"
  }
];

const SellrThemesSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-background" id="themes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold text-foreground mb-6`}>
            Bring Your Brand to Life with a Custom E-Commerce Theme
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground max-w-4xl mx-auto mb-8`}>
            Your brand deserves more than a one-size-fits-all solution. We create fully customized eCommerce store themes tailored to your vision, industry, and customer experience goals. Whether you're starting fresh or revamping your online presence — we build themes that convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <Card key={theme.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
              <div className="relative overflow-hidden">
                <LazyImage
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-64 group-hover:scale-105 transition-transform duration-300"
                  showToasts={false}
                  width={800}
                  height={600}
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{theme.category}</p>
                  <h3 className="text-lg font-semibold">{theme.name}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {theme.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  Perfect for {theme.category.toLowerCase()} businesses
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellrThemesSection;