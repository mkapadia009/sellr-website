
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Globe, Camera, TrendingUp, Lightbulb, Users, Settings, Package, Code, HeadphonesIcon, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Webseiten",
      description: "Wir gestalten und programmieren Ihre maßgeschneiderte Webseite auf der Basis neuester Technologien und Standards und bieten Ihnen individuelle Lösungen für Ihren Auftritt im Internet.",
      icon: Globe,
      image: "/lovable-uploads/18d4f88e-946b-4fcb-a62b-c32352372351.png"
    },
    {
      id: 2,
      title: "Webanwendungen",
      description: "Mehr als eine Webseite? Komplexe, browserbasierte Webanwendungen für Desktop und mobile Geräte sind unsere Spezialität. Bauen Sie auf unsere langjährige Erfahrung in diesem Bereich!",
      icon: Monitor,
      image: "/lovable-uploads/212af9c6-6d38-40f2-89e2-d669d9c615a9.png"
    },
    {
      id: 3,
      title: "Medienproduktion",
      description: "Wir bieten Ihnen Cross-Media-Konzepte an, durch die Ihr Unternehmen auf allen Kanälen einen konsistenten Auftritt hat. So schaffen Sie Vertrauen durch Wiedererkennbarkeit und Beständigkeit.",
      icon: Camera,
      image: "/lovable-uploads/308b81c5-1815-420e-b75e-3bce1855fc81.png"
    },
    {
      id: 4,
      title: "Marketing & Promotion",
      description: "Als Ansprechpartner für professionelle Absatzförderung für technische Produkte bieten wir Ihnen Full-Service-Leistungen entlang der gesamten Wertschöpfungskette.",
      icon: TrendingUp,
      image: "/lovable-uploads/325f03d8-bccf-406b-9c2c-55604d942890.png"
    }
  ];

  const additionalServices = [
    {
      id: 1,
      title: "Full Service",
      description: "CCDS wickelt für Sie Full-Service-Projekte ab und begleitet Sie von der Beratung und Konzeption über die Umsetzung der Idee bis hin zur Markteinführung und Verbreitung.",
      icon: Users
    },
    {
      id: 2,
      title: "Individualisierung",
      description: "Bei der Konzeption, Entwicklung und Implementierung setzt CCDS auf individuelle Lösungen, deren Funktionalität an Ihre firmenspezifischen Workflows angepasst ist.",
      icon: Settings
    },
    {
      id: 3,
      title: "Flexible Features",
      description: "Wir schnüren immer das passende Paket für Ihre Bedürfnisse, denn als unabhängiger Berater ist CCDS keinem Hersteller und keiner Technologie verpflichtet.",
      icon: Package
    },
    {
      id: 4,
      title: "Professionelle Entwicklung",
      description: "CCDS verfügt über ein hervorragendes Expertennetzwerk professioneller Fachleute mit langjähriger Erfahrung bei der Abwicklung großer und internationaler Projekte.",
      icon: Code
    },
    {
      id: 5,
      title: "Qualitäts-Support",
      description: "Unser professionelles Supportteam von Ingenieuren und Technikern zeichnet sich durch hohe Transparenz und Authentizität in der Kundenkommunikation aus.",
      icon: HeadphonesIcon
    },
    {
      id: 6,
      title: "Innovative Tools",
      description: "CCDS entwickelt für Sie E-Learning-Lösungen, Webseiten, Webanwendungen, Datenbanken, Systeme für die Produktverwaltung, Wettbewerbsplattformen und Hybrid-Lösungen.",
      icon: Wrench
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-dark mb-6">Die Schwerpunkte</h2>
          <p className="text-gray max-w-4xl mx-auto text-lg leading-relaxed">
            Die Geschäftsbereiche Webseiten, Webanwendungen, Medienproduktion sowie Marketing & Promotion repräsentieren ein breites Spektrum innerhalb unseres Full-Service-Portfolios. Diese werden durch die Individualisierung und die marktspezifische Ausrichtung von unseren Kunden geschätzt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-dark mb-4">{service.title}</h3>
                    <p className="text-gray leading-relaxed flex-grow">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-gradient-to-r from-blue/5 to-amber-50/50 border-blue/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-4 text-center">
                Individuelle Beratung und Konzeption
              </h3>
              <p className="text-gray leading-relaxed text-lg">
                Seit 25 Jahren erarbeitet CCDS gemeinsam mit seinen Kunden vernetzte Lösungen, die das Wissen im Unternehmen speichern und verbreiten. Die besondere Stärke der Agentur liegt darin, aus den Anforderungen des Unternehmens Online-Konzepte zu entwickeln und umzusetzen – unter Berücksichtigung individueller Medienformate und Infrastrukturen. Dabei stehen die zentrale Verwaltung und automatisierte Ausgabe von Wissen auf Desktop-PC, Tablet, Smartphone und als fertige Druckvorstufe für Printmedien im Mittelpunkt.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Services Section with full-width dark gray background */}
      <div className="bg-gray-800 py-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Unsere Stärken</h2>
            <p className="text-white max-w-4xl mx-auto text-lg leading-relaxed">
              Als erfahrener Partner bieten wir Ihnen umfassende Lösungen und professionelle Betreuung in allen Bereichen der digitalen Kommunikation und Entwicklung.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-dark mb-4">{service.title}</h3>
                      <p className="text-gray leading-relaxed flex-grow">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
