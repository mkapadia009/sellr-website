
import { useState, useEffect, useRef } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  showLoadingInfo?: boolean;
  showToasts?: boolean;
  priority?: boolean;
  lowQualityPreview?: string;
  sizes?: string;
  width?: number;
  height?: number;
  quality?: number;
  loadingStrategy?: 'lazy' | 'eager' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
}

// Maintain a cache of preloaded images to avoid duplicate fetches
const preloadedImages: Record<string, boolean> = {};

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = '/placeholder.svg', 
  showLoadingInfo = false,
  showToasts = false,
  priority = false,
  lowQualityPreview,
  sizes = "100vw",
  width,
  height,
  quality = 60,
  loadingStrategy = 'lazy',
  objectFit = 'cover',
  onLoad
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { toast } = useToast();
  
  // Use even more aggressive compression via WebP
  const optimizedSrc = src.includes('?') ? src : 
    (src.includes('unsplash.com') ? 
      `${src}&auto=format&fit=crop&w=${width || 800}&q=${quality}&fm=webp` : 
      `${src}?width=${width || 800}&quality=${quality}&format=webp`);
  
  // Generate an even lower quality placeholder if none provided
  const autoLowQualityPreview = lowQualityPreview || 
    (src.includes('?') ? `${src.split('?')[0]}?width=10&quality=5` : 
    `${src}?width=10&quality=5`);
  
  // Prefetch high priority images
  useEffect(() => {
    // Skip if already preloaded to avoid redundant work
    if (priority && !preloadedImages[optimizedSrc]) {
      // Use the native Image constructor to preload
      const img = new Image();
      img.src = optimizedSrc;
      
      // Mark this image as preloaded
      preloadedImages[optimizedSrc] = true;
      
      // Add preload link for better browser prioritization
      const linkEl = document.createElement('link');
      linkEl.rel = 'preload';
      linkEl.as = 'image';
      linkEl.href = optimizedSrc;
      document.head.appendChild(linkEl);
      
      return () => {
        document.head.removeChild(linkEl);
      };
    }
  }, [optimizedSrc, priority]);
  
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    
    // Use Intersection Observer for non-priority images
    if (!priority && loadingStrategy === 'lazy') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && imgRef.current) {
              // Set the src attribute only when in viewport
              imgRef.current.src = optimizedSrc;
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "300px" } // Increased loading distance for better perception of speed
      );
      
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
      
      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }
  }, [optimizedSrc, priority, loadingStrategy]);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
    
    // Call the onLoad callback if provided
    if (onLoad) {
      onLoad();
    }
  };

  const handleImageError = () => {
    setHasError(true);
    
    // Retry loading with fallback after a short delay
    setTimeout(() => {
      if (imgRef.current && !isLoaded) {
        imgRef.current.src = fallbackSrc;
      }
    }, 300);
    
    if (showToasts) {
      toast({
        title: "Fehler beim Laden",
        description: `Das Bild "${alt}" konnte nicht geladen werden. Fallback wird angezeigt.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <>
          {/* Use the auto-generated low quality placeholder if none provided */}
          <img 
            src={autoLowQualityPreview} 
            alt={alt} 
            className="absolute inset-0 w-full h-full object-cover blur-sm transition-opacity duration-300"
            aria-hidden="true"
            width={width || 20}
            height={height || 20}
            loading="eager" // Always load placeholders immediately
          />
          <Skeleton className="absolute inset-0 opacity-30" />
        </>
      )}
      
      <img
        ref={imgRef}
        src={priority ? optimizedSrc : (loadingStrategy === 'lazy' ? '' : optimizedSrc)}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`w-full h-full object-${objectFit} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        width={width}
        height={height}
        sizes={sizes}
        decoding={priority ? "sync" : "async"} // Added decoding attribute for performance
      />
      
      {showLoadingInfo && !isLoaded && !hasError && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
          Bild wird geladen...
        </div>
      )}
    </div>
  );
};

export default LazyImage;
