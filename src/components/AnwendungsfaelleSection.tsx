
import React, { useEffect, useRef, useState } from 'react';
import { 
  HardDrive, 
  Users, 
  RefreshCw, 
  BadgeDollarSign, 
  MessagesSquare, 
  UserPlus,
  ArrowRight,
  Calendar,
  GitBranch,
  MessageCircle,
  Database,
  FileText,
} from 'lucide-react';
import { Link } from "react-router-dom";

interface CaseStudyProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  isVisible: boolean;
  index: number;
  linkTo?: string;
  id?: string;
}

const CaseStudy = ({ icon, title, description, isVisible, index, linkTo, id }: CaseStudyProps) => {
  return (
    <div 
      id={id}
      className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start">
        <div className="mr-4 text-blue-dark">
          {icon}
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <div className="text-gray-700 dark:text-gray-300 mb-4">{description}</div>
          
          {linkTo && (
            <Link 
              to={linkTo}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
            >
              Mehr dazu
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const AnwendungsfaelleSection = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isSection1Visible, setIsSection1Visible] = useState(false);
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const createObserver = (
      ref: React.RefObject<HTMLDivElement>,
      setVisible: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const headerObserver = createObserver(headerRef, setIsHeaderVisible);
    const observer1 = createObserver(section1Ref, setIsSection1Visible);
    const observer2 = createObserver(section2Ref, setIsSection2Visible);
    const observer3 = createObserver(section3Ref, setIsSection3Visible);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (section1Ref.current) observer1.unobserve(section1Ref.current);
      if (section2Ref.current) observer2.unobserve(section2Ref.current);
      if (section3Ref.current) observer3.unobserve(section3Ref.current);
    };
  }, []);

  return (
    <section id="anwendungsfaelle" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-light">
      <div className="container mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Anwendungsfälle & Lösungen
          </h2>
          <h3 className={`text-xl text-gray-dark transition-all duration-700 delay-100 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            So setzen Sie mit SPTools smarte Lösungen rund um Microsoft 365 & SharePoint um.
          </h3>
        </div>

        <div ref={section1Ref} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudy
              icon={<FileText className="w-8 h-8" />}
              title="Direkter Zugriff auf ausgewählte Microsoft 365-Dokumente über TYPO3"
              description={
                <div>
                  Die Integration von SPTools ermöglicht es, Microsoft 365-Dokumente direkt auf Ihrer TYPO3-Website einzubinden. Dadurch erhalten Kunden schnellen und einfachen Zugang zu relevanten Informationen, was die Aktualität, Zuverlässigkeit und Flexibilität Ihrer Inhalte erhöht und die Kundeninteraktion sowie -zufriedenheit verbessert.​
                </div>
              }
              isVisible={isSection1Visible}
              index={0}
              linkTo="/direkter-zugriff-auf-ausgewaehlte-microsoft-365-dokumente-ueber-typo3"
              id="direkter-zugriff-microsoft-365"
            />
            
            <CaseStudy
              icon={<Database className="w-8 h-8" />}
              title="Zentrale Datenspeicherung mit SPTools"
              description={
                <div>
                  Durch die Integration von SPTools in TYPO3 und Microsoft 365 können Unternehmen eine zentrale Datenspeicherung für ihre Dokumente realisieren. Dokumente werden in einem zentralen SharePoint-Verzeichnis gespeichert und stehen autorisierten Benutzern jederzeit zur Verfügung. Dies gewährleistet Aktualität, Konsistenz und Sicherheit der Daten, während die Effizienz im Dokumentenmanagement erhöht wird. Über SPTools wird das richtige Dokument auch auf der TYPO3-Website zur Verfügung gestellt.​
                </div>
              }
              isVisible={isSection1Visible}
              index={1}
              linkTo="/zentrale-datenspeicherung-mit-sptools"
              id="zentrale-datenspeicherung-sptools"
            />
          </div>
        </div>

        <div ref={section2Ref} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudy
              icon={<Calendar className="w-8 h-8" />}
              title="SPTools-Terminbuchungslösung"
              description={
                <div>
                  Die Integration von TYPO3 CMS, Office 365 und SPTools ermöglicht eine nahtlose Online-Terminbuchung. Besucher buchen Termine über ein Formular auf der TYPO3-Website, wobei Daten automatisch in den Outlook Kalender übertragen und Microsoft Teams-Meetings erstellt werden. Automatisierte Bestätigungen, Erinnerungen und Echtzeit-Synchronisation optimieren die Terminverwaltung und steigern die Kundenzufriedenheit.
                </div>
              }
              isVisible={isSection2Visible}
              index={0}
              linkTo="/sptools-terminbuchungsloesung"
              id="nahtlose-online-terminbuchung"
            />
            <CaseStudy
              icon={<GitBranch className="w-8 h-8" />}
              title="Workflow-Automatisierung"
              description={
                <div>
                  Die SPTools-Lösung für automatisierte Workflows ermöglicht eine effiziente und transparente Dokumentenfreigabe durch die nahtlose Integration von TYPO3, Microsoft 365 und SharePoint. Dokumente werden über TYPO3 hochgeladen, automatisiert in SharePoint übertragen und in einem strukturierten Workflow bearbeitet, mit transparenter Kommunikation während des gesamten Prozesses.
                </div>
              }
              isVisible={isSection2Visible}
              index={1}
              linkTo="/workflow-automatisierung"
              id="workflow-automatisierung"
            />
          </div>
        </div>

        <div ref={section3Ref} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudy
              icon={<MessageCircle className="w-8 h-8" />}
              title="Intranet-Lösungen"
              description={
                <div>
                  Die SPTools-Lösung für Echtzeitkommunikation integriert Microsoft Teams direkt in Ihre TYPO3-Website und ermöglicht so einen effizienten Online-Chat mit Kunden und Besuchern. Die nahtlose Integration sorgt für direkten Kundenkontakt, automatische Zuordnung von Anfragen und eine lückenlose Dokumentation aller Kommunikation.
                </div>
              }
              isVisible={isSection3Visible}
              index={0}
              linkTo="/sptools-echtzeitkommunikation"
              id="intranet-loesungen"
            />
            <CaseStudy
              icon={<UserPlus className="w-8 h-8" />}
              title="SPTools-Bewerbermanagement"
              description={
                <div>
                  Die SPTools-Lösung für effizientes Bewerbermanagement integriert nahtlos TYPO3 CMS mit Microsoft 365, um den gesamten Bewerbungsprozess zu automatisieren und zu optimieren.
                </div>
              }
              isVisible={isSection3Visible}
              index={1}
              linkTo="/sptools-bewerbermanagement"
              id="bewerbermanagement"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-dark italic">
            **Alle dargestellten Lösungen können individuell an Ihre spezifischen Anforderungen angepasst werden. Sprechen Sie uns an für eine persönliche Beratung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnwendungsfaelleSection;
