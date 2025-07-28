import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, MessageCircle, Link as LinkIcon, RefreshCw, Shield, MessagesSquare, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BehoerdenPage = () => {
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
              src="/lovable-uploads/8cd6b158-e07b-4cdb-a85c-7d7db8794c7f.png"
              alt="Microsoft Teams Intranet-Lösungen"
              className="w-full h-full object-cover"
            />
            {/* Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/40"></div>
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
                <MessagesSquare className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  SPTools-Echtzeitkommunikation
                </h1>
                <p className="text-xl max-w-3xl">
                  Die SPTools-Lösung für Echtzeitkommunikation integriert Microsoft Teams direkt in Ihre TYPO3-Website und ermöglicht so einen effizienten Online-Chat mit Kunden und Besuchern.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-white py-16" id="echtzeitkommunikation">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Echtzeitkommunikation für TYPO3 und Microsoft Teams</h2>
            <p className="text-lg text-center mb-12">SPTools verbindet Ihre Website mit Microsoft Teams für nahtlose Kommunikation</p>

            <div className="grid gap-8 md:grid-cols-1">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Einbettung des Teams-Chats in die TYPO3-Website</h3>
                <p className="text-gray-600 mb-4">
                  Der Microsoft Teams-Chat wird nahtlos in Ihre TYPO3-Website integriert, sodass Besucher direkt auf der Seite mit Ihrem Support- oder Vertriebsteam kommunizieren können.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Initiierung eines Chats durch den Besucher</h3>
                <p className="text-gray-600 mb-4">
                  Ein Klick auf das Chat-Symbol startet eine Unterhaltung, die automatisch an die zuständige Abteilung oder den entsprechenden Mitarbeiter in Microsoft Teams weitergeleitet wird.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Automatische Zuordnung und Benachrichtigung</h3>
                <p className="text-gray-600 mb-4">
                  SPTools sorgt dafür, dass eingehende Chat-Anfragen automatisch an verfügbare Teammitglieder weitergeleitet werden, die eine Benachrichtigung in Microsoft Teams erhalten und den Chat direkt annehmen können.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Echtzeit-Kommunikation</h3>
                <p className="text-gray-600 mb-4">
                  Teammitglieder kommunizieren in Echtzeit mit den Website-Besuchern, wobei die Integration einen nahtlosen und verzögerungsfreien Chatverlauf gewährleistet.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Einsatz von Bots und Automatisierungen</h3>
                <p className="text-gray-600 mb-4">
                  Durch die Integration von Bots können häufig gestellte Fragen automatisch beantwortet oder Chats an die richtigen Ansprechpartner weitergeleitet werden, was die Effizienz erhöht und das Team entlastet.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Dokumentation und Nachverfolgung</h3>
                <p className="text-gray-600 mb-4">
                  Alle Chat-Verläufe werden automatisch in SharePoint oder einem anderen zentralen System gespeichert, was eine einfache Nachverfolgung und Nachbereitung von Anfragen ermöglicht.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Vorteile der SPTools-Echtzeitkommunikation</h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Sofortige Unterstützung</h4>
                      <p className="text-gray-600">Besucher erhalten umgehend Hilfe, was die Kundenzufriedenheit steigert.</p>
                      <p className="mt-2 text-blue font-medium">SPTools</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <RefreshCw className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Effizienzsteigerung</h4>
                      <p className="text-gray-600">Automatische Zuordnung und Benachrichtigungen reduzieren die Reaktionszeit und verbessern die Effizienz des Teams.</p>
                      <p className="mt-2 text-blue font-medium">SPTools</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <LinkIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Kontinuität</h4>
                      <p className="text-gray-600">Alle Gespräche werden dokumentiert und sind für spätere Referenzen oder Follow-ups verfügbar.</p>
                      <p className="mt-2 text-blue font-medium">SPTools</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Skalierbarkeit</h4>
                      <p className="text-gray-600">Durch den Einsatz von Bots und Automatisierungen kann der Chat-Service skaliert und das Team entlastet werden.</p>
                      <p className="mt-2 text-blue font-medium">SPTools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fazit */}
            <div className="mt-16 bg-blue-50 p-8 rounded-2xl shadow-md text-center border border-blue-100">
              <h4 className="text-xl font-semibold mb-2">Fazit: Verbesserte Kundenkommunikation mit SPTools</h4>
              <p className="text-lg text-gray-700">Nahtlose Integration – Direkte Kommunikation – Optimale Kundenzufriedenheit mit <a href="https://sptools.de" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">SPTools</a></p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BehoerdenPage;
