
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, NewspaperIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { newsItems } from "@/data/newsData";

const LatestNewsSection = () => {
  const isMobile = useIsMobile();
  
  // Nur die ersten 3 News anzeigen
  const latestNews = newsItems.slice(0, 3);
  
  return (
    <section id="neuigkeiten" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-dark mb-4">Aktuelle Neuigkeiten</h2>
          <p className="text-gray max-w-2xl mx-auto">
            Bleiben Sie informiert über unsere neuesten Entwicklungen, Veranstaltungen und Erfolgsgeschichten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <Card key={news.id} className="flex flex-col h-full hover-lift">
              {news.imageUrl && (
                <div className="h-48 overflow-hidden rounded-t-lg relative">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-gray">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <CardDescription>{news.date}</CardDescription>
                  </div>
                  {news.category && (
                    <span className="text-xs font-medium text-blue bg-blue/10 px-2 py-1 rounded">
                      {news.category}
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl">{news.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700">{news.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2" asChild>
                  <Link to={`/news/${news.id}`}>
                    <NewspaperIcon className="w-4 h-4" />
                    Weiterlesen
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <Button variant="default" className="bg-blue hover:bg-blue-dark text-white px-6" asChild>
            <Link to="/news">Alle Neuigkeiten</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
