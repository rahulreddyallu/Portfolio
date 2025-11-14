import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Error Boundary Component for graceful error handling
 * Catches JavaScript errors anywhere in the component tree
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details to console for debugging
    console.error('Application Error:', error, errorInfo);
    
    // Optional: Send error to analytics or error tracking service
    // Example: logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'Inter, system-ui, sans-serif',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            maxWidth: '500px'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
            <h1 style={{ 
              fontSize: '2rem', 
              marginBottom: '1rem', 
              color: '#2563eb',
              fontWeight: '700'
            }}>
              Oops! Something went wrong
            </h1>
            <p style={{ 
              color: '#64748b', 
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              We encountered an unexpected error. Don't worry, your data is safe.
              Please refresh the page to continue.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              style={{
                padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Refresh Page
            </button>
            {/* Show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={{
                marginTop: '2rem',
                textAlign: 'left',
                background: '#f1f5f9',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: '#475569'
              }}>
                <summary style={{ cursor: 'pointer', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Error Details (Development Only)
                </summary>
                <pre style={{ 
                  overflow: 'auto', 
                  fontSize: '0.75rem',
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render app with Error Boundary and Strict Mode
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

/**
 * Performance monitoring
 * Measures and reports Core Web Vitals
 * 
 * In production, you can send these metrics to an analytics endpoint:
 * reportWebVitals((metric) => {
 *   // Send to analytics
 *   console.log(metric);
 * });
 */
reportWebVitals(console.log);

// Optional: Register service worker for PWA functionality
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then(registration => console.log('SW registered:', registration))
//       .catch(error => console.log('SW registration failed:', error));
//   });
// }
