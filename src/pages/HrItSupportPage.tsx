import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Database, Link as LinkIcon, RefreshCw, Shield, LayoutTemplate, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from '@/components/LazyImage';
import DataStorageDiagram from '@/components/DataStorageDiagram';

const HrItSupportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    console.log('New Hero Image URL:', 'https://github.com/stone1971grey/projekt-bilder/blob/main/vorteil-zentrale-datenspeicherung.jpg?raw=true');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main>
        <div id="top" className="relative text-white py-16 px-4">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://github.com/stone1971grey/projekt-bilder/blob/main/vorteil-zentrale-datenspeicherung.jpg?raw=true"
              alt="Zentrale Datenspeicherung Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="mb-6">
              <Link to="/#anwendungsfaelle" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Link>
            </div>
            <div className="flex items-start gap-6">
              <div className="text-white/90 mt-1">
                <Database className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white/95 tracking-tight leading-tight">
                  Zentrale Datenspeicherung mit SPTools
                </h1>
                <p className="text-xl max-w-3xl text-white/90 font-medium leading-relaxed">
                  Durch die Integration von SPTools in TYPO3 und Microsoft 365 können Unternehmen eine zentrale Datenspeicherung für ihre Dokumente realisieren. Dokumente werden in einem zentralen SharePoint-Verzeichnis gespeichert und stehen autorisierten Benutzern jederzeit zur Verfügung. Dies gewährleistet Aktualität, Konsistenz und Sicherheit der Daten, während die Effizienz im Dokumentenmanagement erhöht wird. Über SPTools wird das richtige Dokument auch auf der TYPO3-Website zur Verfügung gestellt.​
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-white py-16" id="zentrale-datenspeicherung">
          <div className="container mx-auto px-6 max-w-6xl">
            <DataStorageDiagram />

            <div className="hidden">
              <div className="grid gap-8 md:grid-cols-1">
                <div className="bg-gray-50 p-6 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold mb-4">Zugriff und Bearbeitung durch autorisierte Benutzer auf dem SharePoint</h3>
                  <p className="text-gray-600 mb-4">
                    Alle autorisierten Benutzer können von jedem Ort aus auf das zentral gespeicherte Dokument zugreifen. 
                    Sie können das Dokument in SharePoint anzeigen, bearbeiten und aktualisieren. 
                    Änderungen können in Echtzeit per SPTools auf TYPO3 synchronisiert werden, 
                    sodass stets die aktuellste Version des Dokuments verfügbar ist.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold mb-4">Versionskontrolle und Historie</h3>
                  <p className="text-gray-600 mb-4">
                    SharePoint bietet eine umfassende Versionskontrolle, die alle Änderungen am Dokument protokolliert.
                    Benutzer können frühere Versionen des Dokuments einsehen und bei Bedarf wiederherstellen.
                    Dies stellt sicher, dass keine Informationen verloren gehen und Änderungen nachvollziehbar sind.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold mb-4">Automatisierte Workflows und Benachrichtigungen</h3>
                  <p className="text-gray-600 mb-4">
                    Es können automatisierte Workflows eingerichtet werden, die in SharePoint definiert werden. 
                    Beispielsweise kann eine Benachrichtigung an das zuständige Team ausgelöst werden, 
                    sobald ein neues Dokument im SharePoint-Verzeichnis abgelegt wird.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Vorteile der zentralen Datenspeicherung</h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <RefreshCw className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Aktualität und Konsistenz</h4>
                      <p className="text-gray-600">Da alle Dokumente zentral gespeichert und in Echtzeit synchronisiert werden, gibt es keine unterschiedlichen Versionen. Jeder Benutzer hat Zugriff auf die aktuellste Version.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <LinkIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Zugänglichkeit</h4>
                      <p className="text-gray-600">Autorisierte Benutzer können von überall und zu jeder Zeit auf die zentral gespeicherten Dokumente zugreifen.​</p>
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
                      <p className="text-gray-600">Die zentrale Speicherung in SharePoint bietet robuste Sicherheitsfunktionen, einschließlich Zugriffskontrollen und Verschlüsselung.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <LayoutTemplate className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Effizienz</h4>
                      <p className="text-gray-600">Zentrale Datenspeicherung reduziert Redundanzen und erleichtert das Dokumentenmanagement, da alle Dateien an einem Ort verwaltet werden.​</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-blue-50 p-8 rounded-2xl shadow-md text-center border border-blue-100">
              <h4 className="text-xl font-semibold mb-2">Fazit: Optimierte Dokumentenverwaltung</h4>
              <p className="text-lg text-gray-700">Zentrale Datenspeicherung – Sichere Synchronisation – Nahtlose Integration von TYPO3 und Microsoft 365</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" id="referenz-vulkan">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Praxisbeispiel: VULKAN Gruppe – Dokumentenmanagement mit SharePoint & TYPO3
            </h2>

            <div className="mb-10 text-lg text-gray-700 space-y-4">
              <p>
                Für die <strong>VULKAN Gruppe</strong> wurde eine passgenaue Lösung entwickelt, mit der sich
                <strong> Office 365 SharePoint-Dokumente direkt über die TYPO3-Website</strong> anzeigen und verwalten lassen.
              </p>
              <p>
                Dank <strong>SPTools</strong> entfällt die doppelte Pflege von Dateien. Stattdessen werden aktuelle PDFs wie Produktblätter direkt aus
                SharePoint eingebunden – effizient, fehlerfrei und immer aktuell.
              </p>
            </div>

            <div className="mb-12">
              <LazyImage 
                src="https://raw.githubusercontent.com/stone1971grey/projekt-bilder/main/Vulkan_1920x1080.jpg"
                alt="VULKAN Referenzprojekt Screenshot"
                className="rounded-xl shadow-lg"
                showLoadingInfo={true}
                showToasts={true}
                fallbackSrc="/placeholder.svg"
                priority={true}
                width={800}
                height={450}
              />
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Vorteile der Lösung:</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>✅ Geringere Fehleranfälligkeit durch zentrale Datenquelle</li>
                <li>✅ Hervorragende Aktualität der Inhalte dank Live-Anbindung</li>
                <li>✅ Keine Dubletten – Dokumente müssen nicht doppelt gepflegt werden</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-300 text-blue-900 mb-12">
              <p className="text-lg font-medium">
                Mit SPTools hat die VULKAN Gruppe eine zuverlässige Verbindung zwischen TYPO3 und Microsoft 365 geschaffen – und damit den Aufwand
                für die Dokumentenpflege deutlich reduziert.
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://www.vulkan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Zur Website der VULKAN Gruppe
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HrItSupportPage;
