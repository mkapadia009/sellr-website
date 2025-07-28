import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LazyImage from '@/components/LazyImage';
import { 
  ArrowLeft, 
  FileText, 
  Shield, 
  Users, 
  Calendar, 
  MessageSquare, 
  UserPlus, 
  CheckCircle,
  CloudUpload,
  Bell,
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BildungPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main>
        <div id="top" className="relative text-white py-16 px-4">
          <div className="absolute inset-0 z-0">
            <LazyImage 
              src="https://raw.githubusercontent.com/stone1971grey/projekt-bilder/main/vorteile-effizientes-bewerbermanagement.jpg"
              alt="SPTools Bewerbermanagement"
              className="w-full h-full object-cover"
              priority={true}
              width={1920}
              height={1080}
              showLoadingInfo={true}
              fallbackSrc="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="mb-6">
              <Link to="/#anwendungsfaelle" className="inline-flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Link>
            </div>
            <div className="flex items-start gap-6">
              <div className="text-white mt-1">
                <UserPlus className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white/90 dark:text-white/80 tracking-tight leading-tight">
                  SPTools-Bewerbermanagement
                </h1>
                <p className="text-xl max-w-3xl text-white/80 dark:text-white/70">
                  Die SPTools-Lösung für effizientes Bewerbermanagement integriert nahtlos TYPO3 CMS mit Microsoft 365, um den gesamten Bewerbungsprozess zu automatisieren und zu optimieren.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-white py-16" id="bewerbermanagement">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Bewerbermanagement mit SPTools</h2>
            <p className="text-lg text-center mb-8 text-gray-700 dark:text-gray-300">Optimierter Bewerbungsprozess durch nahtlose Integration von TYPO3 und Microsoft 365</p>

            <div className="relative mb-4 px-4">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-2 mb-2">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div className="md:w-5/12">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Online-Bewerbungsformular auf der TYPO3-Website</h3>
                    <p className="text-gray-600 mb-2">
                      Bewerber füllen ein benutzerfreundliches Formular aus, in dem sie persönliche Daten und Bewerbungsunterlagen einreichen.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12"></div>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1">
                  <ArrowRight className="h-6 w-6 text-blue-500 rotate-90" />
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row-reverse items-center md:items-start gap-2 mb-2">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <CloudUpload className="h-8 w-8 text-white" />
                </div>
                <div className="md:w-5/12">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Automatische Übertragung zu SharePoint</h3>
                    <p className="text-gray-600 mb-2">
                      Die eingereichten Daten und Dokumente werden mithilfe von SPTools als Middleware automatisch in ein vordefiniertes SharePoint-Verzeichnis in Office 365 übertragen.
                      Dadurch ist eine zentrale, strukturierte und sichere Speicherung der Bewerbungsunterlagen gewährleistet – ganz ohne manuelle Zwischenschritte.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12"></div>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1">
                  <ArrowRight className="h-6 w-6 text-blue-500 rotate-90" />
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-2 mb-2">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bell className="h-8 w-8 text-white" />
                </div>
                <div className="md:w-5/12">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Benachrichtigung des HR-Teams</h3>
                    <p className="text-gray-600 mb-2">
                      Ein konfigurierter SharePoint-Workflow informiert das HR-Team in Echtzeit über neue Bewerbungen, beispielsweise per E-Mail oder Microsoft Teams-Nachricht.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12"></div>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1">
                  <ArrowRight className="h-6 w-6 text-blue-500 rotate-90" />
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row-reverse items-center md:items-start gap-2 mb-2">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <div className="md:w-5/12">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Vorselektion und Bewertung</h3>
                    <p className="text-gray-600 mb-2">
                      Das HR-Team kann Bewerbungen direkt in SharePoint durchsuchen und bewerten. Mithilfe von Tools wie Microsoft Power Automate können standardisierte Vorselektionen und Bewertungen automatisiert werden.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12"></div>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1">
                  <ArrowRight className="h-6 w-6 text-blue-500 rotate-90" />
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-2 mb-2">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div className="md:w-5/12">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Einladung zum Vorstellungsgespräch</h3>
                    <p className="text-gray-600 mb-2">
                      Geeignete Kandidaten können direkt über Microsoft Teams zu Vorstellungsgesprächen eingeladen werden, wobei Termine automatisch im Office 365 Kalender eingetragen werden.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12"></div>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1">
                  <ArrowRight className="h-6 w-6 text-blue-500 rotate-90" />
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row-reverse items-center md:items-start gap-2 mb-2">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div className="md:w-5/12">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Rückmeldungen und Updates</h3>
                    <p className="text-gray-600 mb-2">
                      Der Bewerbungsstatus kann über SharePoint-Workflows und Microsoft Teams automatisch aktualisiert werden, sodass Bewerber zeitnah Rückmeldungen erhalten.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12"></div>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1">
                  <ArrowRight className="h-6 w-6 text-blue-500 rotate-90" />
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-2">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div className="md:w-5/12">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Zentrales Dokumentenmanagement</h3>
                    <p className="text-gray-600 mb-2">
                      Alle relevanten Dokumente und Kommunikationsverläufe werden zentral in SharePoint gespeichert und sind für das HR-Team jederzeit zugänglich.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12"></div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Vorteile der Lösung</h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Effizienz</h4>
                      <p className="text-gray-600">Automatisierte Workflows reduzieren den manuellen Aufwand und beschleunigen den Bewerbungsprozess.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <FileText className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Transparenz</h4>
                      <p className="text-gray-600">Alle Beteiligten haben jederzeit Zugriff auf den aktuellen Status der Bewerbungen.​</p>
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
                      <p className="text-gray-600">Zentrale Speicherung der Daten in SharePoint gewährleistet eine sichere und strukturierte Verwaltung.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Kollaboration</h4>
                      <p className="text-gray-600">Integration mit Microsoft Teams ermöglicht eine reibungslose Kommunikation innerhalb des HR-Teams und mit den Bewerbern.​</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-2xl shadow-md text-center border border-blue-100">
              <h4 className="text-xl font-semibold mb-2">Fazit: Optimiertes Bewerbermanagement</h4>
              <p className="text-lg text-gray-700">Effizienter Bewerbungsprozess – Sichere Datenverwaltung – Nahtlose Integration von TYPO3 und Microsoft 365</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BildungPage;
