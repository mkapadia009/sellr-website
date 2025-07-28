import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Cloud, Users, ChevronDown, ChevronUp, Plus, Minus, ArrowRight, FileText, CalendarClock, GitBranch, MessageCircle, UserRound, Database, Calendar, UserPlus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useHash } from '@/contexts/HashContext';
import { Link as RouterLink } from 'react-router-dom';

const VorteileSection = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { currentHash, setHash } = useHash();
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLImageElement>(null);
  const integrationTitleRef = useRef<HTMLHeadingElement>(null);
  const textBlock1Ref = useRef<HTMLParagraphElement>(null);
  const textBlock1SubRef = useRef<HTMLParagraphElement>(null);
  const textBlock2Ref = useRef<HTMLParagraphElement>(null);
  const textBlock2SubRef = useRef<HTMLParagraphElement>(null);
  const textBlock3Ref = useRef<HTMLParagraphElement>(null);
  const textBlock3SubRef = useRef<HTMLParagraphElement>(null);
  const textBlock4Ref = useRef<HTMLParagraphElement>(null);
  const textBlock4SubRef = useRef<HTMLParagraphElement>(null);
  const textBlock5Ref = useRef<HTMLParagraphElement>(null);
  const textBlock5SubRef = useRef<HTMLParagraphElement>(null);
  const textBlock6Ref = useRef<HTMLParagraphElement>(null);
  const textBlock6SubRef = useRef<HTMLParagraphElement>(null);

  const cardToFeatureMap = {
    "einfach-intuitiv": "nahtlose-online-terminbuchung",
    "ohne-umstellung": "nahtlose-microsoft-365-integration",
    "verlässliche-antworten": "präzise-transparente-sichere-antworten",
    "kontrolle-datenquellen": "verlässliche-aktuelle-unternehmensdaten",
    "echtzeit-kommunikation": "intranet-loesungen",
    "bewerbermanagement": "bewerbermanagement"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (badgeRef.current) {
            badgeRef.current.classList.add('opacity-100', 'translate-y-0');
            badgeRef.current.classList.remove('opacity-0', 'translate-y-10');
          }
          if (integrationTitleRef.current) {
            setTimeout(() => {
              integrationTitleRef.current?.classList.add('opacity-100', 'translate-y-0');
              integrationTitleRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 50);
          }
          if (sublineRef.current) {
            setTimeout(() => {
              sublineRef.current?.classList.add('opacity-100', 'translate-y-0');
              sublineRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 100);
          }
          if (textBlock1Ref.current) {
            setTimeout(() => {
              textBlock1Ref.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock1Ref.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 150);
          }
          if (textBlock1SubRef.current) {
            setTimeout(() => {
              textBlock1SubRef.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock1SubRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 200);
          }
          if (textBlock2Ref.current) {
            setTimeout(() => {
              textBlock2Ref.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock2Ref.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 250);
          }
          if (textBlock2SubRef.current) {
            setTimeout(() => {
              textBlock2SubRef.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock2SubRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 300);
          }
          if (textBlock3Ref.current) {
            setTimeout(() => {
              textBlock3Ref.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock3Ref.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 350);
          }
          if (textBlock3SubRef.current) {
            setTimeout(() => {
              textBlock3SubRef.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock3SubRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 400);
          }
          if (textBlock4Ref.current) {
            setTimeout(() => {
              textBlock4Ref.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock4Ref.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 425);
          }
          if (textBlock4SubRef.current) {
            setTimeout(() => {
              textBlock4SubRef.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock4SubRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 450);
          }
          if (textBlock5Ref.current) {
            setTimeout(() => {
              textBlock5Ref.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock5Ref.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 475);
          }
          if (textBlock5SubRef.current) {
            setTimeout(() => {
              textBlock5SubRef.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock5SubRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 500);
          }
          if (textBlock6Ref.current) {
            setTimeout(() => {
              textBlock6Ref.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock6Ref.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 525);
          }
          if (textBlock6SubRef.current) {
            setTimeout(() => {
              textBlock6SubRef.current?.classList.add('opacity-100', 'translate-y-0');
              textBlock6SubRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 550);
          }
          if (titleRef.current) {
            setTimeout(() => {
              titleRef.current?.classList.add('opacity-100', 'translate-y-0');
              titleRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 575);
          }
          if (subtitleRef.current) {
            setTimeout(() => {
              subtitleRef.current?.classList.add('opacity-100', 'translate-y-0');
              subtitleRef.current?.classList.remove('opacity-0', 'translate-y-10');
            }, 600);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToFeature = (id: string) => (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const mappedId = cardToFeatureMap[id as keyof typeof cardToFeatureMap] || id;
    
    const element = document.getElementById(mappedId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToFaq = (faqId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const faqElement = document.getElementById("faq");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        const faqItem = document.querySelector(`[data-faq-id="${faqId}"]`);
        if (faqItem) {
          const trigger = faqItem.querySelector('[id="' + faqId + '"]');
          if (trigger && trigger instanceof HTMLElement) {
            trigger.click();
            
            setTimeout(() => {
              const faqItemPosition = faqItem.getBoundingClientRect().top;
              const offsetPosition = faqItemPosition + window.pageYOffset - 120;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }, 300);
          }
        }
      }, 500);
    }
  };

  return (
    <div
      id="vorteile"
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-light relative -mt-[120px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-4">
            <img
              ref={badgeRef}
              src="/lovable-uploads/d4a325a3-00e4-486f-adcc-60501e198c8f.png"
              alt="SPTools integration icon"
              width={90}
              height={90}
              className="opacity-0 translate-y-10 transition-all duration-700"
            />
            <h2 
              ref={integrationTitleRef}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white opacity-0 translate-y-10 transition-all duration-700 text-center"
            >
              Ihre Vorteile mit SPTools auf einen Blick
            </h2>
          </div>
          
          <div className="text-center mb-8">
            <p 
              ref={sublineRef}
              className="text-lg md:text-xl text-gray-800 dark:text-gray-200 opacity-0 translate-y-10 transition-all duration-700 w-full md:w-full mx-auto px-0 md:px-0 max-w-none"
            >
              So setzen Sie mit SPTools smarte Lösungen rund um Microsoft 365 & SharePoint um.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            <div className="w-full">
              <Card 
                equalHeight 
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300 border-blue/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-7 h-7 text-blue" />
                    <CardTitle 
                      ref={textBlock4Ref}
                      className="text-gray-900 dark:text-white text-lg md:text-xl opacity-0 translate-y-10 transition-all duration-700"
                    >
                      Direkter Dokumentenzugriff
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent fillHeight>
                  <div className="flex flex-col h-full">
                    <p 
                      ref={textBlock4SubRef}
                      className="text-gray-900 dark:text-white text-base opacity-0 translate-y-10 transition-all duration-700 mb-auto"
                    >
                      Webseitenbesucher erhalten direkten Zugriff auf ausgewählte Microsoft 365-Dokumente über die TYPO3-Website.
                    </p>
                    <a 
                      href="#direkter-zugriff-microsoft-365"
                      className="mt-4 inline-flex items-center text-blue hover:text-blue-dark transition-colors text-sm font-medium"
                      onClick={scrollToFeature("direkter-zugriff-microsoft-365")}
                    >
                      Mehr dazu
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full">
              <Card 
                equalHeight 
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300 border-blue/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Database className="w-7 h-7 text-blue" />
                    <CardTitle 
                      ref={textBlock3Ref} 
                      className="text-gray-900 dark:text-white text-lg md:text-xl opacity-0 translate-y-10 transition-all duration-700"
                    >
                      Zentrale Datenspeicherung
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent fillHeight>
                  <div className="flex flex-col h-full">
                    <p 
                      ref={textBlock3SubRef} 
                      className="text-gray-900 dark:text-white text-base opacity-0 translate-y-10 transition-all duration-700 mb-auto"
                    >
                      Durch SPTools sind alle Dokumente zentral in Microsoft 365 auf einem Online SharePoint gespeichert.
                    </p>
                    <a 
                      href="#zentrale-datenspeicherung-sptools"
                      className="mt-4 inline-flex items-center text-blue hover:text-blue-dark transition-colors text-sm font-medium"
                      onClick={scrollToFeature("zentrale-datenspeicherung-sptools")}
                    >
                      Mehr dazu
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full">
              <Card 
                equalHeight 
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300 border-blue/20"
              >
                <CardHeader className="pb-2">
                  <div id="einfach-intuitiv" className="absolute top-0 -mt-24 pt-24 invisible"></div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-7 h-7 text-blue" />
                    <CardTitle 
                      ref={textBlock1Ref} 
                      className="text-gray-900 dark:text-white text-lg md:text-xl opacity-0 translate-y-10 transition-all duration-700"
                    >
                      Nahtlose Online-Terminbuchung
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent fillHeight>
                  <div className="flex flex-col h-full">
                    <p 
                      ref={textBlock1SubRef} 
                      className="text-gray-900 dark:text-white text-base opacity-0 translate-y-10 transition-all duration-700 mb-auto"
                    >
                      Besucher buchen Termine über die Website, mit automatischer Übertragung in Outlook und Teams-Meetings.
                    </p>
                    <a 
                      href="#nahtlose-online-terminbuchung"
                      className="mt-4 inline-flex items-center text-blue hover:text-blue-dark transition-colors text-sm font-medium"
                      onClick={scrollToFeature("nahtlose-online-terminbuchung")}
                    >
                      Mehr dazu
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full">
              <Card 
                equalHeight 
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300 border-blue/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-7 h-7 text-blue" />
                    <CardTitle 
                      ref={textBlock2Ref} 
                      className="text-gray-900 dark:text-white text-lg md:text-xl opacity-0 translate-y-10 transition-all duration-700"
                    >
                      Automatisierte Workflows
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent fillHeight>
                  <div className="flex flex-col h-full">
                    <p 
                      ref={textBlock2SubRef} 
                      className="text-gray-900 dark:text-white text-base opacity-0 translate-y-10 transition-all duration-700 mb-auto"
                    >
                      Durch die Verknüpfung von TYPO3 CMS mit Microsoft 365 können automatisierte Workflows erstellt werden, um repetitive Aufgaben zu automatisieren.
                    </p>
                    <button 
                      className="mt-4 inline-flex items-center text-blue hover:text-blue-dark transition-colors text-sm font-medium"
                      onClick={scrollToFeature("workflow-automatisierung")}
                    >
                      Mehr dazu
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full">
              <Card 
                equalHeight 
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300 border-blue/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-7 h-7 text-blue" />
                    <CardTitle 
                      ref={textBlock5Ref}
                      className="text-gray-900 dark:text-white text-lg md:text-xl opacity-0 translate-y-10 transition-all duration-700"
                    >
                      Echtzeitkommunikation
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent fillHeight>
                  <div className="flex flex-col h-full">
                    <p 
                      ref={textBlock5SubRef}
                      className="text-gray-900 dark:text-white text-base opacity-0 translate-y-10 transition-all duration-700 mb-auto"
                    >
                      Verbesserte Kommunikation durch direkte Teams-Chat-Integration in die TYPO3-Website für Echtzeit-Support.
                    </p>
                    <button 
                      className="mt-4 inline-flex items-center text-blue hover:text-blue-dark transition-colors text-sm font-medium"
                      onClick={scrollToFeature("echtzeit-kommunikation")}
                    >
                      Mehr dazu
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full">
              <Card 
                equalHeight 
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300 border-blue/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-7 h-7 text-blue" />
                    <CardTitle 
                      ref={textBlock6Ref}
                      className="text-gray-900 dark:text-white text-lg md:text-xl opacity-0 translate-y-10 transition-all duration-700"
                    >
                      Bewerbermanagement
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent fillHeight>
                  <div className="flex flex-col h-full">
                    <p 
                      ref={textBlock6SubRef}
                      className="text-gray-900 dark:text-white text-base opacity-0 translate-y-10 transition-all duration-700 mb-auto"
                    >
                      Automatisierte Online-Bewerbungsabwicklung mit direkter SharePoint-Integration und Workflow-Benachrichtigungen.
                    </p>
                    <button 
                      className="mt-4 inline-flex items-center text-blue hover:text-blue-dark transition-colors text-sm font-medium"
                      onClick={scrollToFeature("bewerbermanagement")}
                    >
                      Mehr dazu
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center">
            <p
              ref={subtitleRef}
              className="text-xl text-gray-800 dark:text-gray-200 opacity-0 translate-y-10 transition-all duration-700"
            >
              
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-800 dark:text-gray-200 italic">
            *Microsoft, Office 365, SharePoint, Teams und OneDrive sind eingetragene Marken der Microsoft Corporation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VorteileSection;
