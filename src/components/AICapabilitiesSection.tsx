import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Image as ImageIcon, Tag, ListChecks, ScanEye } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const aiCapabilities = [
  {
    icon: ListChecks,
    title: 'Auto-filled Titles & Descriptions',
    description: 'Upload an image, and our AI instantly generates relevant product names, highlights, and rich descriptions tailored to your category.'
  },
  {
    icon: ScanEye,
    title: 'Smart Attribute Extraction',
    description: 'Detects color, size, shape, material, and other key attributes from product visuals with high accuracy.'
  },
  {
    icon: Tag,
    title: 'Suggested Categories & Tags',
    description: 'Classifies products into the right category, and recommends tags for better search and discoverability.'
  },
  {
    icon: ImageIcon,
    title: 'Generate Studio Quality Product Images',
    description: 'COMING SOON: Generate professional quality images of your beloved products in one-click.'
  }
];

const AICapabilitiesSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-secondary/20" id="ai-capabilities">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold text-foreground mb-6 flex items-center justify-center gap-2`}>
            <Sparkles className="inline w-8 h-8 text-primary" />
            Powering Commerce with AI
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground max-w-3xl mx-auto`}>
            At Sellr, AI isn’t just a buzzword — it’s your personal assistant. From cataloging to conversion, our AI tools help you move faster, sell better, and scale without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiCapabilities.map((cap, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground">
                  {cap.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Perfect for Sellers With:</h3>
          <ul className="text-muted-foreground text-lg list-disc list-inside space-y-2">
            <li>Large or fast-changing catalogs</li>
            <li>Low content availability (e.g., sourcing from vendors)</li>
            <li>Marketplace listings with strict metadata requirements</li>
            <li>Small teams needing scale without extra headcount</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AICapabilitiesSection; 