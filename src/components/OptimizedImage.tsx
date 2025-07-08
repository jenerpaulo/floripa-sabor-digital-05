
import React, { useState } from 'react';
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

  const handleError = () => {
    console.log(`Failed to load image: ${currentSrc}`);
    setHasError(true);
    setIsLoading(false);
    
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    }
    
    if (onError) {
      onError();
    }
  };

  const handleLoad = () => {
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
      {hasError && currentSrc === fallbackSrc && (
        <div className={cn(
          "absolute inset-0 bg-gray-100 flex items-center justify-center",
          className
        )}>
          <div className="text-gray-500 text-sm text-center p-4">
            Imagem não disponível
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
