// Image Optimization Utilities for Masala Tulips
import { useEffect, useRef, useState } from 'react';

// Image optimization configuration
export const imageConfig = {
  // WebP format for better compression
  webp: true,
  // Responsive image sizes
  sizes: {
    thumbnail: { width: 300, height: 200 },
    medium: { width: 600, height: 400 },
    large: { width: 1200, height: 800 }
  },
  // Quality settings
  quality: 85,
  // Lazy loading threshold
  lazyThreshold: 0.1
};

// Generate optimized image URLs
export const getOptimizedImageUrl = (
  originalUrl: string, 
  size: keyof typeof imageConfig.sizes = 'medium',
  format: 'webp' | 'jpeg' = 'webp'
): string => {
  // For now, return the original URL
  // In production, you would integrate with a CDN or image optimization service
  // like Cloudinary, ImageKit, or Next.js Image Optimization
  return originalUrl;
};

// Generate responsive image srcset
export const generateSrcSet = (imageUrl: string): string => {
  const sizes = [
    { width: 300, suffix: '300w' },
    { width: 600, suffix: '600w' },
    { width: 900, suffix: '900w' },
    { width: 1200, suffix: '1200w' }
  ];

  return sizes
    .map(size => `${getOptimizedImageUrl(imageUrl, 'medium')} ${size.suffix}`)
    .join(', ');
};

// Lazy loading hook
export const useLazyImage = (src: string, alt: string) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let currentImageRef: HTMLImageElement | null = null;

    if (imageRef) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: imageConfig.lazyThreshold,
            rootMargin: '50px'
          }
        );
        observer.observe(imageRef);
        currentImageRef = imageRef;
      } else {
        // Fallback for older browsers
        setIsInView(true);
      }
    }

    return () => {
      if (observer && currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [imageRef]);

  useEffect(() => {
    if (isInView) {
      setImageSrc(src);
    }
  }, [isInView, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to original image if optimized version fails
    setImageSrc(src);
  };

  return {
    imageSrc,
    setImageRef,
    isLoaded,
    handleLoad,
    handleError
  };
};

// Generate image alt text for SEO
export const generateImageAltText = (
  recipeTitle: string,
  context: string = 'recipe',
  additionalInfo?: string
): string => {
  const baseAlt = `${recipeTitle} - ${context}`;
  return additionalInfo ? `${baseAlt}, ${additionalInfo}` : baseAlt;
};

// Preload critical images
export const preloadCriticalImages = (imageUrls: string[]): void => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Generate image structured data
export const generateImageStructuredData = (
  imageUrl: string,
  altText: string,
  width: number = 600,
  height: number = 400
) => {
  return {
    "@type": "ImageObject",
    "url": imageUrl,
    "alt": altText,
    "width": width,
    "height": height
  };
};

// Check if image is cached
export const isImageCached = (src: string): boolean => {
  const img = new Image();
  img.src = src;
  return img.complete;
};

// Optimize image loading for performance
export const optimizeImageLoading = (images: HTMLImageElement[]): void => {
  images.forEach(img => {
    // Add loading="lazy" attribute
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding="async" for better performance
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
}; 