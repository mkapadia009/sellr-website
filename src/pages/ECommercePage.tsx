
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, CheckCircle, Link, RefreshCw, Shield, LayoutTemplate } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import BookingFlowDiagram from '@/components/BookingFlowDiagram';
import LazyImage from '@/components/LazyImage';

// Custom component for the FH Kärnten reference section
const KaerntenReferenceSection = () => {
  const steps = [
    {
      title: "Terminbuchung",
      description:
        "Studierende buchen Beratungstermine über ein Online-Formular auf der Hochschulwebsite – einfach, direkt und jederzeit zugänglich."
    },
    {
      title: "Automatische Übertragung",
      description:
        "Die Daten werden automatisch mit dem Outlook-Kalender der zuständigen Studienberater:innen an der FH Kärnten synchronisiert."
    },
    {
      title: "Bestätigungs-E-Mails",
      description:
        "Nach der Buchung erhalten Studierende automatisch eine Bestätigungs-E-Mail sowie eine Termin-Erinnerung."
    },
    {
      title: "Teams-Integration",
      description:
        "Für digitale Termine wird ein Microsoft Teams-Link generiert und direkt mit der Bestätigungs-E-Mail mitgeschickt."
    },
    {
      title: "Echtzeit-Synchronisation",
      description:
        "Alle Änderungen – wie Terminverschiebungen oder Stornierungen – werden in Echtzeit zwischen TYPO3, Outlook und Teams abgeglichen."
    }
  ];

  return (
    <div className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">🔧 SPTools im Einsatz an der FH Kärnten</h2>
      <LazyImage
        src="https://github.com/stone1971grey/projekt-bilder/blob/main/Kaernten_1920x1080.jpg?raw=true"
        alt="Screenshot FH Kärnten"
        className="w-full rounded-xl shadow mb-12"
        priority={false}
        width={1920}
        height={1080}
        showLoadingInfo={true}
        fallbackSrc="/placeholder.svg"
      />
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-6">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-600 max-w-xl">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ECommercePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main>
        <div id="top" className="relative text-white py-16 px-4">
          {/* Hero background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/18d4f88e-946b-4fcb-a62b-c32352372351.png"
              alt="Terminbuchung Kalender"
              className="w-full h-full object-cover"
            />
            {/* Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="mb-6">
              <RouterLink to="/#anwendungsfaelle" className="inline-flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </RouterLink>
            </div>
            <div className="flex items-start gap-6">
              <div className="text-white mt-1">
                <Calendar className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  SPTools-Terminbuchungslösung für TYPO3 und Microsoft 365
                </h1>
                <p className="text-xl max-w-3xl">
                  Die Integration von TYPO3 CMS, Office 365 und SPTools ermöglicht eine nahtlose Online-Terminbuchung. 
                  Besucher buchen Termine über ein Formular auf der TYPO3-Website, wobei Daten automatisch in den Outlook Kalender 
                  übertragen und Microsoft Teams-Meetings erstellt werden. Automatisierte Bestätigungen, Erinnerungen und 
                  Echtzeit-Synchronisation optimieren die Terminverwaltung und steigern die Kundenzufriedenheit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white py-16" id="terminbuchung">
          <div className="container mx-auto px-6 max-w-6xl">
            <BookingFlowDiagram />

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-blue-600 mr-3">✅</span> Vorteile der Terminbuchung
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <RefreshCw className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Effizienz</h4>
                      <p className="text-gray-600">Automatisierte Prozesse reduzieren den administrativen Aufwand.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Kundenzufriedenheit</h4>
                      <p className="text-gray-600">Sofortige Bestätigungen und Erinnerungen verbessern die Zuverlässigkeit.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <Link className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Nahtlose Integration</h4>
                      <p className="text-gray-600">Direkte Verknüpfung mit Microsoft Outlook und Teams erleichtert die Terminverwaltung.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <LayoutTemplate className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Flexibilität</h4>
                      <p className="text-gray-600">Unterstützung sowohl für physische als auch für virtuelle Termine mit automatischer Teams-Meeting-Erstellung.​</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fazit */}
            <div className="mt-16 bg-blue-50 p-8 rounded-2xl shadow-md text-center border border-blue-100">
              <h4 className="text-xl font-semibold mb-2">Fazit: Effiziente Terminverwaltung</h4>
              <p className="text-lg text-gray-700">Nahtlose Terminverwaltung – Automatisierte Prozesse – Optimale Integration zwischen TYPO3 und Microsoft 365</p>
            </div>
          </div>
        </section>

        {/* Add the FH Kärnten Reference Section */}
        <section className="bg-gray-50 py-16" id="reference">
          <KaerntenReferenceSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ECommercePage;
