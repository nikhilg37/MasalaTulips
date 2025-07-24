// Performance Monitoring Utilities for Masala Tulips
import { trackPerformance } from './seo';

// Core Web Vitals thresholds
export const CORE_WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
  FID: { good: 100, needsImprovement: 300 },   // First Input Delay
  CLS: { good: 0.1, needsImprovement: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, needsImprovement: 3000 }, // First Contentful Paint
  TTFB: { good: 800, needsImprovement: 1800 }  // Time to First Byte
};

// Performance metrics tracking
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Track Core Web Vitals
  trackCoreWebVitals() {
    if ('PerformanceObserver' in window) {
      // Track Largest Contentful Paint (LCP)
      this.trackLCP();
      
      // Track First Input Delay (FID)
      this.trackFID();
      
      // Track Cumulative Layout Shift (CLS)
      this.trackCLS();
      
      // Track First Contentful Paint (FCP)
      this.trackFCP();
    }

    // Track Time to First Byte (TTFB)
    this.trackTTFB();
  }

  private trackLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      const lcp = lastEntry.startTime;
      
      this.metrics.set('LCP', lcp);
      this.recordMetric('LCP', lcp);
      
      observer.disconnect();
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private trackFID() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const firstInputEntry = entry as PerformanceEventTiming;
        const fid = firstInputEntry.processingStart - firstInputEntry.startTime;
        this.metrics.set('FID', fid);
        this.recordMetric('FID', fid);
      });
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  }

  private trackCLS() {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      this.metrics.set('CLS', clsValue);
      this.recordMetric('CLS', clsValue);
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private trackFCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[0].startTime;
      
      this.metrics.set('FCP', fcp);
      this.recordMetric('FCP', fcp);
      
      observer.disconnect();
    });
    
    observer.observe({ entryTypes: ['paint'] });
  }

  private trackTTFB() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        this.metrics.set('TTFB', ttfb);
        this.recordMetric('TTFB', ttfb);
      }
    }
  }

  private recordMetric(metric: string, value: number) {
    const threshold = CORE_WEB_VITALS_THRESHOLDS[metric as keyof typeof CORE_WEB_VITALS_THRESHOLDS];
    let rating = 'poor';
    
    if (threshold) {
      if (value <= threshold.good) {
        rating = 'good';
      } else if (value <= threshold.needsImprovement) {
        rating = 'needs-improvement';
      }
    }

    // Track to analytics
    trackPerformance(metric, value);
    
    // Log for debugging
    console.log(`Core Web Vital - ${metric}: ${value}ms (${rating})`);
    
    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'core_web_vital', {
        metric_name: metric,
        metric_value: Math.round(value),
        metric_rating: rating
      });
    }
  }

  // Get all tracked metrics
  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }

  // Get specific metric
  getMetric(metric: string): number | undefined {
    return this.metrics.get(metric);
  }

  // Check if all Core Web Vitals are good
  areCoreWebVitalsGood(): boolean {
    const metrics = this.getMetrics();
    let allGood = true;

    Object.keys(CORE_WEB_VITALS_THRESHOLDS).forEach(metric => {
      const value = metrics.get(metric);
      if (value !== undefined) {
        const threshold = CORE_WEB_VITALS_THRESHOLDS[metric as keyof typeof CORE_WEB_VITALS_THRESHOLDS];
        if (value > threshold.good) {
          allGood = false;
        }
      }
    });

    return allGood;
  }
}

// Resource loading optimization
export const optimizeResourceLoading = () => {
  // Preload critical resources
  const criticalResources = [
    '/static/css/main.css',
    '/static/js/main.js'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });

  // Preconnect to external domains
  const externalDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://pagead2.googlesyndication.com'
  ];

  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Image loading optimization
export const optimizeImageLoading = () => {
  // Add loading="lazy" to all images
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  // Add decoding="async" for better performance
  const imagesToOptimize = document.querySelectorAll('img:not([decoding])');
  imagesToOptimize.forEach(img => {
    img.setAttribute('decoding', 'async');
  });
};

// Font loading optimization
export const optimizeFontLoading = () => {
  // Add font-display: swap to Google Fonts
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  fontLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes('display=swap')) {
      link.setAttribute('href', `${href}&display=swap`);
    }
  });
};

// Bundle size monitoring
export const trackBundleSize = () => {
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const transferSize = navigation.transferSize;
      const decodedBodySize = navigation.decodedBodySize;
      
      if (transferSize && decodedBodySize) {
        const compressionRatio = (1 - transferSize / decodedBodySize) * 100;
        
        trackPerformance('bundle_size', decodedBodySize);
        trackPerformance('transfer_size', transferSize);
        trackPerformance('compression_ratio', compressionRatio);
      }
    }
  }
};

// Memory usage monitoring
export const trackMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    if (memory) {
      trackPerformance('memory_used', memory.usedJSHeapSize);
      trackPerformance('memory_total', memory.totalJSHeapSize);
      trackPerformance('memory_limit', memory.jsHeapSizeLimit);
    }
  }
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  const monitor = PerformanceMonitor.getInstance();
  
  // Start tracking Core Web Vitals
  monitor.trackCoreWebVitals();
  
  // Optimize resource loading
  optimizeResourceLoading();
  
  // Optimize image loading
  optimizeImageLoading();
  
  // Optimize font loading
  optimizeFontLoading();
  
  // Track bundle size
  trackBundleSize();
  
  // Track memory usage
  trackMemoryUsage();
  
  // Monitor for performance issues
  window.addEventListener('load', () => {
    setTimeout(() => {
      const metrics = monitor.getMetrics();
      console.log('Performance Metrics:', Object.fromEntries(metrics));
      
      if (!monitor.areCoreWebVitalsGood()) {
        console.warn('Some Core Web Vitals need improvement');
      }
    }, 5000);
  });
};

// Export for global access
declare global {
  interface Window {
    PerformanceMonitor: typeof PerformanceMonitor;
    initializePerformanceMonitoring: typeof initializePerformanceMonitoring;
  }
}

window.PerformanceMonitor = PerformanceMonitor;
window.initializePerformanceMonitoring = initializePerformanceMonitoring; 