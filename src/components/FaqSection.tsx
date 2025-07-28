
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useHash } from "@/contexts/HashContext";

const FaqSection = () => {
  const schemaRef = useRef<HTMLScriptElement>(null);
  const { currentHash } = useHash();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const faqData = [
    {
      id: "faq-1",
      question: "What is SPTools?",
      answer: "SPTools is a middleware that connects TYPO3 CMS with Microsoft 365 services like SharePoint Online, Teams, and Exchange. It enables seamless integration to optimize workflows and increase efficiency."
    },
    {
      id: "faq-2",
      question: "Which TYPO3 versions are supported?",
      answer: "SPTools is compatible with TYPO3 version 9 to 13."
    },
    {
      id: "faq-3",
      question: "Which Microsoft 365 services can be integrated?",
      answer: "SPTools allows integration of various Microsoft 365 services, including SharePoint, Teams, OneDrive, and Outlook. This enables you to embed content and features from these services directly into your TYPO3 website."
    },
    {
      id: "faq-4",
      question: "How does online appointment booking with SPTools work?",
      answer: "Visitors can book appointments via a form on your TYPO3 website. The data is automatically transferred to the Outlook calendar, and a Microsoft Teams meeting is created. Confirmations and reminders are sent automatically."
    },
    {
      id: "faq-5",
      question: "How does document sharing work with SPTools?",
      answer: "Documents uploaded via TYPO3 can be automatically stored in SharePoint and forwarded to responsible employees for approval through predefined workflows."
    },
    {
      id: "faq-6",
      question: "How does SPTools support the application process?",
      answer: "Applicant data entered via TYPO3 is automatically transferred to SharePoint. The HR team is notified via workflows, can manage applications directly in SharePoint, and coordinate interviews via Microsoft Teams."
    },
    {
      id: "faq-7",
      question: "How secure is the storage of applicant data?",
      answer: "All applicant data is stored centrally and securely in SharePoint, ensuring structured management and protection of sensitive information."
    },
    {
      id: "faq-8",
      question: "Who implements SPTools?",
      answer: "Implementation can be carried out by your internal IT team or by specialized service providers with experience in TYPO3 and Microsoft 365 integrations. We are happy to handle the complete implementation and configuration according to your requirements."
    },
    {
      id: "faq-9",
      question: "How is SPTools integrated into our existing TYPO3 website?",
      answer: "Integration of SPTools into TYPO3 is done by installing the SPTools Core Extension (compatible with TYPO3 version 11 and 13) and the output plugin. The plugin is then configured to seamlessly embed content from Microsoft 365, such as SharePoint documents, into your TYPO3 website."
    },
    {
      id: "faq-10",
      question: "Is SPTools GDPR compliant?",
      answer: "Yes, SPTools was developed with consideration for the General Data Protection Regulation (GDPR). Only authorized data sources are integrated, and the processing of personal data is carried out in accordance with applicable data protection regulations."
    },
    {
      id: "faq-11",
      question: "What license models does SPTools offer?",
      answer: "SPTools offers two license models: Single-domain license for integration into one TYPO3 website with one Microsoft 365 tenant, and multi-domain license for integration into multiple TYPO3 websites with one Microsoft 365 tenant."
    },
    {
      id: "faq-12",
      question: "How long does it take to implement SPTools?",
      answer: "Implementation of SPTools usually takes 1–2 days, depending on your specific requirements and the complexity of your TYPO3 website."
    },
    {
      id: "faq-13",
      question: "Does CCDS provide support for the implementation and configuration of SPTools?",
      answer: "Yes, CCDS is happy to handle the implementation and configuration of SPTools according to your requirements. We also offer technical consulting for developers as well as support for end users."
    },
    {
      id: "faq-14",
      question: "What support and maintenance services does CCDS offer for SPTools?",
      answer: "CCDS offers professional maintenance and support for SPTools on an hourly basis. The current hourly rate is 125.00 EUR net."
    },
    {
      id: "faq-15",
      question: "Can SPTools be used with other content management systems besides TYPO3?",
      answer: "Currently, SPTools is specifically developed for integration with TYPO3. Individual solutions for other content management systems can be checked on request."
    },
    {
      id: "faq-16",
      question: "Is there a way to test SPTools before purchasing?",
      answer: "Yes, you can request a free demo to see SPTools live in action. We will show you practical use cases such as document output from SharePoint, appointment booking with Outlook calendar, or automated workflows. Just contact us or book an appointment directly."
    }
  ];

  useEffect(() => {
    if (!schemaRef.current) return;

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    schemaRef.current.textContent = JSON.stringify(schemaData);
  }, [faqData]);

  useEffect(() => {
    if (currentHash && faqData.length > 0) {
      const targetFaq = faqData.find(faq => faq.id === currentHash);
      if (targetFaq) {
        const itemId = `item-${faqData.indexOf(targetFaq) + 1}`;
        if (!openItems.includes(itemId)) {
          setOpenItems(prev => [...prev, itemId]);
          
          setTimeout(() => {
            const faqItem = document.querySelector(`[data-faq-id="${currentHash}"]`);
            if (faqItem) {
              const faqItemPosition = faqItem.getBoundingClientRect().top;
              const offsetPosition = faqItemPosition + window.pageYOffset - 120;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 300);
        }
      }
    }
  }, [currentHash, faqData, openItems]);

  const handleValueChange = (value: string) => {
    setOpenItems(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      }
      return [...prev, value];
    });
  };

  return (
    <section id="faq" ref={sectionRef} className="bg-white py-16">
      <script ref={schemaRef} type="application/ld+json"></script>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-dark mb-4">Häufig gestellte Fragen</h2>
            <h3 className="text-gray">Wichtige Informationen zu unseren TYPO3-Microsoft 365 Lösungen</h3>
          </div>
          
          <Accordion
            type="multiple" 
            className="w-full"
            value={openItems}
            onValueChange={(value) => {
              if (Array.isArray(value)) {
                setOpenItems(value);
              } else {
                handleValueChange(value);
              }
            }}
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={`item-${index + 1}`}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                data-faq-id={faq.id}
              >
                <AccordionTrigger
                  id={faq.id}
                  className={cn(
                    "px-6 py-4 text-left text-lg font-medium bg-white hover:bg-gray-50",
                    "flex justify-between items-center w-full transition-all",
                    openItems.includes(`item-${index + 1}`) ? "text-blue" : "text-gray-dark"
                  )}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-dark bg-white">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
