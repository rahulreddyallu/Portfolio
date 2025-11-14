/**
 * Web Vitals Performance Monitoring
 * 
 * This utility measures and reports Core Web Vitals metrics:
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FID (First Input Delay): Interactivity
 * - FCP (First Contentful Paint): Load performance
 * - LCP (Largest Contentful Paint): Load performance
 * - TTFB (Time to First Byte): Server response time
 * 
 * Usage in index.js:
 * - For development: reportWebVitals(console.log)
 * - For analytics: reportWebVitals(sendToAnalytics)
 */

const reportWebVitals = (onPerfEntry) => {
  // Validate callback function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamic import to reduce initial bundle size
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        try {
          // Cumulative Layout Shift - measures visual stability
          // Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25
          getCLS(onPerfEntry);

          // First Input Delay - measures interactivity
          // Good: < 100ms, Needs Improvement: 100-300ms, Poor: > 300ms
          getFID(onPerfEntry);

          // First Contentful Paint - measures loading performance
          // Good: < 1.8s, Needs Improvement: 1.8-3s, Poor: > 3s
          getFCP(onPerfEntry);

          // Largest Contentful Paint - measures loading performance
          // Good: < 2.5s, Needs Improvement: 2.5-4s, Poor: > 4s
          getLCP(onPerfEntry);

          // Time to First Byte - measures connection and server response time
          // Good: < 800ms, Needs Improvement: 800-1800ms, Poor: > 1800ms
          getTTFB(onPerfEntry);

        } catch (error) {
          // Gracefully handle any errors in metric collection
          console.warn('Error collecting Web Vitals:', error);
        }
      })
      .catch((error) => {
        // Handle module loading errors
        console.warn('Failed to load web-vitals library:', error);
      });
  }
};

/**
 * Example: Send metrics to Google Analytics
 * 
 * function sendToGoogleAnalytics({ name, delta, value, id }) {
 *   if (window.gtag) {
 *     window.gtag('event', name, {
 *       event_category: 'Web Vitals',
 *       event_label: id,
 *       value: Math.round(name === 'CLS' ? delta * 1000 : delta),
 *       non_interaction: true,
 *     });
 *   }
 * }
 * 
 * Usage: reportWebVitals(sendToGoogleAnalytics);
 */

/**
 * Example: Send metrics to custom analytics endpoint
 * 
 * async function sendToAnalytics({ name, delta, value, id }) {
 *   const body = JSON.stringify({ name, delta, value, id });
 *   
 *   if (navigator.sendBeacon) {
 *     navigator.sendBeacon('/analytics', body);
 *   } else {
 *     try {
 *       await fetch('/analytics', { 
 *         method: 'POST', 
 *         body,
 *         headers: { 'Content-Type': 'application/json' },
 *         keepalive: true 
 *       });
 *     } catch (error) {
 *       console.warn('Failed to send analytics:', error);
 *     }
 *   }
 * }
 * 
 * Usage: reportWebVitals(sendToAnalytics);
 */

/**
 * Development logging helper
 * This formats the metrics in a readable way for console output
 */
export const logWebVitals = ({ name, value, delta, id, rating }) => {
  console.group(`⚡ ${name} Metric`);
  console.log(`Value: ${value.toFixed(2)}ms`);
  console.log(`Delta: ${delta.toFixed(2)}ms`);
  console.log(`Rating: ${rating}`);
  console.log(`ID: ${id}`);
  console.groupEnd();
};

/**
 * Helper to determine if metrics are within acceptable thresholds
 */
export const getMetricStatus = (name, value) => {
  const thresholds = {
    CLS: { good: 0.1, needsImprovement: 0.25 },
    FID: { good: 100, needsImprovement: 300 },
    FCP: { good: 1800, needsImprovement: 3000 },
    LCP: { good: 2500, needsImprovement: 4000 },
    TTFB: { good: 800, needsImprovement: 1800 }
  };

  const threshold = thresholds[name];
  
  if (!threshold) return 'unknown';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
};

/**
 * Enhanced logging with color coding based on performance thresholds
 */
export const logWebVitalsEnhanced = ({ name, value, delta, id, rating }) => {
  const status = getMetricStatus(name, value);
  const statusEmojis = {
    good: '✅',
    'needs-improvement': '⚠️',
    poor: '❌',
    unknown: '❓'
  };

  const statusColors = {
    good: 'color: #10b981; font-weight: bold;',
    'needs-improvement': 'color: #f59e0b; font-weight: bold;',
    poor: 'color: #ef4444; font-weight: bold;',
    unknown: 'color: #64748b; font-weight: bold;'
  };

  console.group(`${statusEmojis[status]} ${name} - ${rating.toUpperCase()}`);
  console.log(`%c${name} Value: ${value.toFixed(2)}ms`, statusColors[status]);
  console.log(`Delta: ${delta.toFixed(2)}ms`);
  console.log(`ID: ${id}`);
  console.log(`Status: ${status}`);
  console.groupEnd();
};

/**
 * Batch metrics collector for sending multiple metrics at once
 */
export class WebVitalsCollector {
  constructor() {
    this.metrics = [];
  }

  collect(metric) {
    this.metrics.push({
      ...metric,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }

  getMetrics() {
    return this.metrics;
  }

  clear() {
    this.metrics = [];
  }

  async sendBatch(endpoint) {
    if (this.metrics.length === 0) return;

    const body = JSON.stringify({
      metrics: this.metrics,
      sessionId: this.getSessionId(),
      pageLoadTime: performance.now()
    });

    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, body);
      } else {
        await fetch(endpoint, {
          method: 'POST',
          body,
          headers: { 'Content-Type': 'application/json' },
          keepalive: true
        });
      }
      this.clear();
    } catch (error) {
      console.warn('Failed to send Web Vitals batch:', error);
    }
  }

  getSessionId() {
    let sessionId = sessionStorage.getItem('webVitalsSessionId');
    if (!sessionId) {
      sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('webVitalsSessionId', sessionId);
    }
    return sessionId;
  }
}

/**
 * Create a performance observer to track additional metrics
 */
export const observePerformance = (callback) => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          callback(entry);
        }
      });

      observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
      
      return () => observer.disconnect();
    } catch (error) {
      console.warn('Failed to create PerformanceObserver:', error);
    }
  }
  return () => {}; // Return no-op function if not supported
};

/**
 * Get comprehensive performance metrics
 */
export const getPerformanceMetrics = () => {
  if (!window.performance) return null;

  const navigation = performance.getEntriesByType('navigation')[0];
  const paint = performance.getEntriesByType('paint');

  return {
    // Navigation timing
    dns: navigation?.domainLookupEnd - navigation?.domainLookupStart,
    tcp: navigation?.connectEnd - navigation?.connectStart,
    request: navigation?.responseStart - navigation?.requestStart,
    response: navigation?.responseEnd - navigation?.responseStart,
    processing: navigation?.domComplete - navigation?.responseEnd,
    domReady: navigation?.domContentLoadedEventEnd - navigation?.navigationStart,
    loadComplete: navigation?.loadEventEnd - navigation?.navigationStart,

    // Paint timing
    firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
    firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,

    // Memory (if available)
    memory: performance.memory ? {
      usedJSHeapSize: performance.memory.usedJSHeapSize,
      totalJSHeapSize: performance.memory.totalJSHeapSize,
      jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
    } : null
  };
};

export default reportWebVitals;
