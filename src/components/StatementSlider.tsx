
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import ServicesSection from './ServicesSection';

interface Statement {
  id: number;
  text: string;
  author: string;
  company: string;
}

const statements: Statement[] = [
  {
    id: 1,
    text: "I have used the page localizer today to update hundreds of element titles in common elements. Without this great tool this would take a week. Thanks for making our work easier!",
    author: "Peter Schinck",
    company: "Scuba Schools International"
  },
  {
    id: 2,
    text: "Apart from the very individual and professional service from the team, the experienced practice experts provided us with great support during the concept development phase.",
    author: "Ruediger Maass",
    company: "Managing Director, Media Production Association f:mp."
  },
  {
    id: 3,
    text: "I'm just happy to see that your team has adapted to the ever-present challenges with short response times and good feedback. It's much appreciated.",
    author: "Colin Davidson",
    company: "Director Product Development, SSI"
  }
];

const StatementSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || statements.length <= 1) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 8000); // 8 seconds per statement

    return () => clearInterval(interval);
  }, [api]);

  if (statements.length === 0) return null;

  return (
    <>
      <section className="py-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-dark mb-4">What our customers say</h2>
            <p className="text-gray max-w-2xl mx-auto">
              See how our solutions help optimize business workflows.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {statements.map((statement) => (
                  <CarouselItem key={statement.id}>
                    <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg">
                      <CardContent className="p-8 md:p-12">
                        <div className="text-center">
                          <blockquote className="text-lg md:text-xl text-gray-dark leading-relaxed mb-8 italic">
                            "{statement.text}"
                          </blockquote>
                          
                          <div className="space-y-2">
                            <p className="font-semibold text-gray-dark text-lg">
                              {statement.author}
                            </p>
                            <p className="text-blue font-medium">
                              {statement.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {statements.length > 1 && (
                <>
                  <CarouselPrevious className="-left-16 bg-white hover:bg-gray-50 border-gray-300 shadow-md" />
                  <CarouselNext className="-right-16 bg-white hover:bg-gray-50 border-gray-300 shadow-md" />
                </>
              )}
            </Carousel>

            {statements.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {statements.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === current ? 'bg-blue' : 'bg-gray-300'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      <ServicesSection />
    </>
  );
};

export default StatementSlider;
