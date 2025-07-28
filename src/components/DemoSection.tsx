
import { useEffect, useRef, useState } from 'react';
import { contactConfig } from '@/config/contactConfig';
import ContactForm from './contact/ContactForm';
import EmailJSInit from './contact/EmailJSInit';

const DemoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = contactConfig.backgroundImage;
    img.onload = () => setImageLoaded(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className={`kontakt-section py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${!imageLoaded ? 'bg-blue-900' : ''}`}
      style={{ 
        height: contactConfig.sectionHeight,
        backgroundImage: `url(${contactConfig.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }} 
    >
      {/* EmailJS initialization component */}
      <EmailJSInit />
      
      {/* Dark overlay with for better text readability */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundColor: contactConfig.overlayGradient
        }}
      ></div>
      
      <div className="container mx-auto relative z-10 h-full flex flex-col">
        <div className="text-center mb-8">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 text-white ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Vereinbaren Sie einen Demo-Termin
          </h2>
        </div>

        {/* Form positioned at the absolute bottom of the background with no bottom padding */}
        <div className="mt-auto flex justify-center items-end pb-0">
          <div 
            className={`w-full max-w-[800px] transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
