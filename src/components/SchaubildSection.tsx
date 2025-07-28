
import { useRef, useEffect, useState } from 'react';
import LazyImage from './LazyImage';

const SchaubildSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Define the optimal width for the main image - reduce size for faster loading
  const imageWidth = 900; // Slightly increased for better quality
  const imageHeight = 506; // Maintaining aspect ratio
  
  // Create even smaller low quality placeholder version
  const lowQualityPlaceholder = "/lovable-uploads/ccd5d71f-89df-4109-9196-d4d97f62991e.png?width=5&quality=1";
  
  // Source path with WebP format for better compression
  const imagePath = "/lovable-uploads/ccd5d71f-89df-4109-9196-d4d97f62991e.png";
  
  useEffect(() => {
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

  // Preload image when the component mounts with reduced quality for faster loading
  useEffect(() => {
    const img = new Image();
    img.src = `${imagePath}?width=${imageWidth}&quality=40&format=webp`;
  }, []);

  // Handle image load completion
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div 
      ref={sectionRef}
      id="schaubild"
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-blue-600/90 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-90'}`}
      style={{ zIndex: 10 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Enterprise-Lösung: TYPO3 trifft Microsoft 365 mit SPTools
        </h2>
        
        <div className="flex justify-center">
          <LazyImage
            src={imagePath}
            alt="Microsoft 365 und TYPO3 Integration mit SPTools"
            className="max-w-full md:max-w-4xl rounded-xl shadow-lg transition-all duration-700 ease-in-out"
            priority={true}
            showToasts={false}
            lowQualityPreview={lowQualityPlaceholder}
            width={imageWidth}
            height={imageHeight}
            sizes="(max-width: 768px) 100vw, 900px"
            quality={75} // Increased quality for better appearance
            objectFit="contain"
            onLoad={handleImageLoad}
            loadingStrategy="eager" // Force eager loading
          />
        </div>
        
        <p className="text-white text-lg text-center mt-6 max-w-4xl mx-auto">
          Unsere Erweiterungen verbinden Microsoft 365 nahtlos mit Ihrem Content Management System. Die SPTools-Integration ermöglicht einen effizienten Datenaustausch zwischen Webauftritt und internen Systemen, wodurch Arbeitsabläufe optimiert und die digitale Transformation vorangetrieben wird.
        </p>
      </div>
    </div>
  );
};

export default SchaubildSection;
