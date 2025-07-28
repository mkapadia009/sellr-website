import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, FileCheck, MessageSquare, Upload, ArrowDown, BellRing, Archive, CheckCircle, RefreshCw, Shield, LayoutGrid } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const FinanzdienstleistungenPage = () => {
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
              src="/lovable-uploads/0aa95b04-3b0f-4a86-836c-e1ad6dfbb2de.png"
              alt="Workflow-Automatisierung Technologie"
              className="w-full h-full object-cover"
            />
            {/* Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/40"></div>
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
                <RefreshCw className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white/90 dark:text-white/80 tracking-tight leading-tight">
                  Lösung für automatisierte Workflows
                </h1>
                <p className="text-xl max-w-3xl text-white/80 dark:text-white/70">
                  Die Lösung für automatisierte Workflows ermöglicht eine effiziente und transparente Dokumentenfreigabe 
                  durch die nahtlose Integration von TYPO3, Microsoft 365 und SharePoint. Dokumente werden über TYPO3 hochgeladen, automatisiert in SharePoint übertragen und in einem strukturierten Workflow bearbeitet, mit transparenter Kommunikation während des gesamten Prozesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white py-16" id="workflow-automatisierung">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
              Dokumentenfreigabe
            </h2>
            <p className="text-lg text-center mb-12 text-gray-700 dark:text-gray-300">
              Verbindet TYPO3 CMS und Microsoft 365 für einen Dokumentenfreigabe-Workflow, der Ihre Prozesse optimiert und für maximale Transparenz sorgt.
            </p>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-blue-600 mr-3">🔄</span> Workflow für Dokumentenfreigabe
              </h3>
              
              <div className="grid gap-8 md:grid-cols-1">
                {/* Step 1 */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow relative">
                  {/* Connection indicator for steps */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-8 w-1 bg-blue-200 z-10"></div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                    <span>Dokumenten-Upload über TYPO3-Formular</span>
                  </h3>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <Upload className="h-8 w-8" />
                    </div>
                    <p className="text-gray-600">
                      Die SPTools-Lösung für automatisierte Workflows ermöglicht eine effiziente und transparente Dokumentenfreigabe durch die nahtlose Integration von TYPO3, Microsoft 365 und SharePoint. Dokumente werden über ein spezielles Formular auf der TYPO3-Website hochgeladen.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-blue-300 z-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-8 w-1 bg-blue-200 z-10"></div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                    <span>Automatische Übertragung zu SharePoint</span>
                  </h3>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <ArrowDown className="h-8 w-8" />
                    </div>
                    <p className="text-gray-600">
                      Die hochgeladenen Dokumente werden automatisch in ein definiertes SharePoint-Verzeichnis innerhalb von Microsoft 365 übertragen.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-blue-300 z-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-8 w-1 bg-blue-200 z-10"></div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                    <span>Benachrichtigung des internen Teams</span>
                  </h3>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <BellRing className="h-8 w-8" />
                    </div>
                    <p className="text-gray-600">
                      Ein vordefinierter SharePoint-Workflow informiert das zuständige interne Team in Echtzeit über den neuen Dokumenteneingang, beispielsweise über Microsoft Teams oder per E-Mail.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-blue-300 z-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-8 w-1 bg-blue-200 z-10"></div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                    <span>Überprüfung und Freigabe des Dokuments</span>
                  </h3>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <FileCheck className="h-8 w-8" />
                    </div>
                    <p className="text-gray-600">
                      Das interne Team prüft das Dokument direkt in SharePoint anhand vordefinierter Kriterien und gibt es gegebenenfalls frei.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-blue-300 z-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-8 w-1 bg-blue-200 z-10"></div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">5</div>
                    <span>Automatische Rückmeldung an den Kunden</span>
                  </h3>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <p className="text-gray-600">
                      Nach Abschluss der Überprüfung erhält der Kunde automatisch eine Benachrichtigung über den Status seines Dokuments, entweder per E-Mail oder über ein in TYPO3 integriertes Kundenportal.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-blue-300 z-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">6</div>
                    <span>Archivierung des Dokuments</span>
                  </h3>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <Archive className="h-8 w-8" />
                    </div>
                    <p className="text-gray-600">
                      Das freigegebene Dokument wird automatisch im SharePoint-Verzeichnis archiviert und steht für weitere Verwendungszwecke zur Verfügung.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="text-blue-600 mr-3">✅</span> Vorteile dieses Workflows
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <RefreshCw className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Effizienz</h4>
                      <p className="text-gray-600">Automatisierung reduziert den manuellen Aufwand und beschleunigt den Freigabeprozess.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <LayoutGrid className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Transparenz</h4>
                      <p className="text-gray-600">Alle Schritte im Dokumentenfreigabeprozess sind dokumentiert und nachvollziehbar.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Kundenkommunikation</h4>
                      <p className="text-gray-600">Automatische Benachrichtigungen verbessern die Kommunikation und erhöhen die Kundenzufriedenheit.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Sicherheit</h4>
                      <p className="text-gray-600">Dokumente werden zentral in SharePoint gespeichert, was eine sichere und geordnete Datenverwaltung gewährleistet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fazit section */}
            <div className="mt-16 bg-blue-50 p-8 rounded-2xl shadow-md text-center border border-blue-100">
              <h4 className="text-xl font-semibold mb-2">Fazit: Optimierte Geschäftsprozesse</h4>
              <p className="text-lg text-gray-700">Nahtlose Integration – Automatisierte Workflows – Maximale Transparenz durch Integration von TYPO3 und Microsoft 365</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FinanzdienstleistungenPage;
