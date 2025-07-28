
import React from 'react';
import { FormInput, Calendar, Mail, Video, RefreshCw } from 'lucide-react';

interface FlowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FlowStep: React.FC<FlowStepProps> = ({ icon, title, description, index }) => {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-6">
        {index + 1}
      </div>
      <div>
        <div className="flex items-center">
          <span className="text-blue-600 mr-3">{icon}</span>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
        </div>
        <p className="text-gray-600 max-w-xl">{description}</p>
      </div>
    </div>
  );
};

const BookingFlowDiagram: React.FC = () => {
  const steps = [
    {
      icon: <FormInput className="h-6 w-6" />,
      title: "Terminbuchung",
      description:
        "Besucher füllen ein Formular aus, in dem sie Datum, Uhrzeit, Grund des Termins und Kontaktdaten angeben."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Automatische Übertragung",
      description:
        "Die eingegebenen Daten werden automatisch an den Outlook-Kalender des zuständigen Mitarbeiters in Office 365 übertragen."
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Bestätigungs-E-Mails",
      description:
        "Ein automatisierter Workflow sendet dem Besucher eine Bestätigungs-E-Mail über den gebuchten Termin und Erinnerungen."
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Teams-Integration",
      description:
        "Für virtuelle Termine wird automatisch ein Microsoft Teams-Meeting erstellt, dessen Link in die Bestätigungs-E-Mail eingefügt wird."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Echtzeit-Synchronisation",
      description:
        "Alle Änderungen werden in Echtzeit in den Office 365 Kalender und Microsoft Teams synchronisiert."
    }
  ];

  return (
    <div className="py-8 animate-fade-in mb-4">
      <h2 className="text-2xl font-semibold mb-8 flex items-center justify-center">
        <span className="text-blue-600 mr-3">🔧</span> Funktionen der SPTools-Terminbuchung
      </h2>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <FlowStep
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingFlowDiagram;
