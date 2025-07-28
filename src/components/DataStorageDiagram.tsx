import React from 'react';
import { Users, FileText, History, Bell, RefreshCw, ArrowRight, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface DiagramNodeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: 'left' | 'center' | 'right';
  isConnected?: boolean;
}

const DiagramNode: React.FC<DiagramNodeProps> = ({ icon, title, description, position, isConnected = false }) => {
  return (
    <Card 
      className={`bg-white shadow-md hover:shadow-lg transition-all duration-300 ${position === 'center' ? 'border-blue-300' : ''}`}
      isConnected={isConnected}
      equalHeight
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="text-blue-600 mt-1 shrink-0">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">{title}</h4>
            <p className="text-base text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DiagramArrow: React.FC<{direction?: 'left' | 'right' | 'both'}> = ({ direction = 'right' }) => {
  return (
    <div className="flex items-center justify-center py-2">
      {(direction === 'both' || direction === 'left') && (
        <ArrowRight className="h-5 w-5 text-blue-500 transform rotate-180 mx-1" />
      )}
      {(direction === 'both') && (
        <div className="h-1 w-1 rounded-full bg-blue-500 mx-1"></div>
      )}
      {(direction === 'both' || direction === 'right') && (
        <ArrowRight className="h-5 w-5 text-blue-500 mx-1" />
      )}
    </div>
  );
};

const DataStorageDiagram: React.FC = () => {
  return (
    <div className="py-8 animate-fade-in">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[60px]">
          <DiagramNode
            icon={<Users className="h-6 w-6" />}
            title="Zugriff und Bearbeitung"
            description="Autorisierte Benutzer können von überall auf Dokumente zugreifen, diese anzeigen und bearbeiten. Änderungen werden in Echtzeit synchronisiert."
            position="left"
            isConnected
          />
          
          <DiagramNode
            icon={<History className="h-6 w-6" />}
            title="Versionskontrolle"
            description="Umfassende Protokollierung aller Änderungen mit Möglichkeit zur Einsicht und Wiederherstellung früherer Versionen."
            position="center"
            isConnected
          />
          
          <DiagramNode
            icon={<Bell className="h-6 w-6" />}
            title="Automatisierte Workflows"
            description="Einrichtung automatisierter Workflows in SharePoint, z.B. Benachrichtigungen bei neuen Dokumenten."
            position="right"
            isConnected
          />
        </div>

        <div className="mt-8 flex items-center justify-center">
          <DiagramArrow direction="both" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 mt-1">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Nahtlose Integration</h4>
                  <p className="text-base text-blue-700">TYPO3 und Microsoft 365</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 mt-1">
                  <FileCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Optimierte Dokumentenverwaltung</h4>
                  <p className="text-base text-blue-700">Aktualität, Konsistenz und Sicherheit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataStorageDiagram;
