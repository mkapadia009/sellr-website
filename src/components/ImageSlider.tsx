
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import LazyImage from './LazyImage';

interface ImageSliderProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  interval?: number;
  className?: string;
  imageClassName?: string;
  showCaptions?: boolean;
}

const ImageSlider = ({ 
  images, 
  interval = 5000, 
  className = "", 
  imageClassName = "",
  showCaptions = true
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
  
  useEffect(() => {
    if (images.length <= 1) return; // Don't animate if there's only one image
    
    const transitionInterval = interval * 0.9; // Time for the main display (increased from 0.8)
    const fadeTime = interval * 0.1; // Time for fade transition (reduced from 0.2)
    
    // Main interval to change slides
    const slideInterval = setInterval(() => {
      // Start fade out
      setFadeState('fade-out');
      
      // After fade out completes, change the image and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeState('fade-in');
      }, fadeTime);
      
    }, transitionInterval);
    
    return () => {
      clearInterval(slideInterval);
    };
  }, [images, interval]);
  
  if (!images || images.length === 0) return null;
  
  const currentImage = images[currentIndex];
  
  return (
    <div className={cn("relative", className)}>
      <div 
        className={cn(
          "overflow-hidden rounded-2xl",
          "transition-opacity duration-500", // Reduced from 1000ms to 500ms for faster transition
          fadeState === 'fade-in' ? "opacity-100" : "opacity-0",
        )}
      >
        <LazyImage
          src={currentImage.src}
          alt={currentImage.alt}
          className={cn("w-full rounded-2xl shadow", imageClassName)}
          priority={true}
          quality={85}
        />
        
        {showCaptions && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-center">
            {currentImage.alt}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
