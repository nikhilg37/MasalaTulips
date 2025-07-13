// TypeScript declarations for global gtag and dataLayer

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Google Analytics (gtag.js) event tracking
export const trackGAEvent = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Google Tag Manager (dataLayer) event tracking
export const trackGTMEvent = (event: string, data: Record<string, any> = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
};

// Track a page view (for SPA route changes)
export const trackPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'page_view', page_path: path });
  }
}; 