
import React from "react";
import { CircleCheck } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-20" id="pricing">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Unsere Leistungen</h2>
        <p className="text-lg text-center text-gray-600 mb-16">Individuelle Lösungen mit SPTools für Microsoft 365 & SharePoint</p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* SPTools Bereitstellung (Basic-Style) */}
          <div className="pricing-card bg-blue-100 text-black p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl group">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">SPTools Bereitstellung</h3>
              <p className="text-sm text-gray-600">Lizenzmodell für Microsoft 365 & TYPO3</p>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex flex-col">
                <div className="flex items-center">
                  <CircleCheck className="mr-2 w-5 h-5 text-blue-500" />
                  <span>Single Domain:</span>
                </div>
                <div className="ml-7 text-sm">
                  <p>(1 TYPO3 Installation und 1 MS365)</p>
                  <strong className="text-lg">4.500 EUR</strong>
                </div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <CircleCheck className="mr-2 w-5 h-5 text-blue-500" />
                  <span>Multi Domain:</span>
                </div>
                <div className="ml-7 text-sm">
                  <p>(mehrere TYPO3 Installationen und 1 MS365)</p>
                  <strong className="text-lg">11.000 EUR</strong>
                </div>
              </li>
            </ul>
          </div>

          {/* SPTools Implementierung (Starter-Style) */}
          <div className="pricing-card bg-blue-100 text-black p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl group">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">SPTools Implementierung</h3>
              <p className="text-sm text-gray-600">1–2 Tage Aufwand</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CircleCheck className="mr-2 w-5 h-5 text-blue-500" />
                Installation der Core Extension (TYPO3 v10 bis v13)
              </li>
              <li className="flex items-center">
                <CircleCheck className="mr-2 w-5 h-5 text-blue-500" />
                Einbindung & Konfiguration des Ausgabe-Plugins
              </li>
              <li className="flex items-center">
                <CircleCheck className="mr-2 w-5 h-5 text-blue-500" />
                Dokumenten-Download via SharePoint
              </li>
            </ul>
          </div>

          {/* Beratung (Pro-Style - hervorgehoben) */}
          <div className="pricing-card bg-blue-500 text-white p-6 rounded-2xl shadow-xl scale-105 transform transition-all hover:scale-110 hover:shadow-2xl group z-10">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">Beratung & Technische Begleitung</h3>
              <p className="text-sm text-blue-100">1–2 Tage individuell planbar</p>
            </div>
            <ul className="space-y-2 text-white">
              <li className="flex items-center">
                <CircleCheck className="mr-2 w-5 h-5 text-green-200" />
                Technische Beratung für Entwickler
              </li>
              <li className="flex items-center">
                <CircleCheck className="mr-2 w-5 h-5 text-green-200" />
                Support bei Anwendung & Konfiguration
              </li>
            </ul>
          </div>

          {/* Support (Enterprise-Style) */}
          <div className="pricing-card bg-blue-800 text-white p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl group">
            <h3 className="text-xl font-semibold mb-2 text-white">Wartung & Support</h3>
            <p className="text-blue-100 mb-2">Professionelle Unterstützung auf Stundenbasis</p>
            <p className="text-2xl font-bold text-white">125 EUR / Std. (netto)</p>
          </div>

          {/* Vor-Ort-Implementierung (Enterprise-Style) */}
          <div className="pricing-card bg-blue-800 text-white p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl group">
            <h3 className="text-xl font-semibold mb-2 text-white">Vor-Ort-Implementierung</h3>
            <p className="text-blue-100">Individuelle Einrichtung bei Ihnen vor Ort mit persönlicher Betreuung durch unsere Expert:innen.</p>
          </div>

          {/* Remote-Implementierung (Enterprise-Style) */}
          <div className="pricing-card bg-blue-800 text-white p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl group">
            <h3 className="text-xl font-semibold mb-2 text-white">Remote-Implementierung</h3>
            <p className="text-blue-100">Effizient, flexibel & zeitsparend – Umsetzung via Remote-Zugriff mit minimalem Aufwand für Ihre IT.</p>
          </div>
        </div>

        <div className="mt-16 text-center p-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-semibold mb-2 text-white">Individuelle Lösungen</h4>
          <p className="text-blue-100">Ob Erweiterungen, Migrationen oder Integrationen: Wir erstellen Ihnen gerne ein maßgeschneidertes Angebot.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
