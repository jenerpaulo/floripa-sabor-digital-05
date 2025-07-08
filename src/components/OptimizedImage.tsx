
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
  onError
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  // Reset state when src prop changes
  useEffect(() => {
    console.log(`OptimizedImage: Loading new image - ${src}`);
    setCurrentSrc(src);
    setIsLoading(true);
    setHasError(false);
    setAttemptCount(0);
  }, [src]);

  const handleError = () => {
    console.log(`OptimizedImage Error: Failed to load ${currentSrc} (attempt ${attemptCount + 1})`);
    setHasError(true);
    setIsLoading(false);
    
    const newAttemptCount = attemptCount + 1;
    setAttemptCount(newAttemptCount);
    
    // Try fallback strategies
    if (newAttemptCount === 1 && currentSrc !== fallbackSrc) {
      console.log(`OptimizedImage: Trying fallback image - ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    } else if (newAttemptCount === 2 && currentSrc.includes('github')) {
      // If GitHub raw URL fails, try relative path
      const fileName = src.split('/').pop();
      const relativePath = `/images/${fileName}`;
      console.log(`OptimizedImage: Trying relative path - ${relativePath}`);
      setCurrentSrc(relativePath);
      setHasError(false);
      setIsLoading(true);
    }
    
    if (onError) {
      onError();
    }
  };

  const handleLoad = () => {
    console.log(`OptimizedImage: Successfully loaded ${currentSrc}`);
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center",
          className
        )}>
          <div className="text-gray-400 text-sm">Carregando...</div>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {hasError && attemptCount >= 3 && (
        <div className={cn(
          "absolute inset-0 bg-gray-100 flex items-center justify-center",
          className
        )}>
          <div className="text-gray-500 text-sm text-center p-4">
            <div>Imagem não disponível</div>
            <div className="text-xs mt-1 opacity-70">
              {src.split('/').pop()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
