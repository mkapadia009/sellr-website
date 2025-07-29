
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force reload if this is an older cached version
const lastUpdated = '2023-09-28-003'; // Updated version number
const storedVersion = localStorage.getItem('app-version');
const buildTimestamp = Date.now(); // Add current timestamp for more aggressive cache busting

// Function to check if we're on the production domain
const isProductionDomain = () => {
  return window.location.hostname === 'sellr.traversetec.co';
};

// Clear all caches programmatically if supported and this is a version upgrade
if ('caches' in window && (storedVersion && storedVersion !== lastUpdated)) {
  caches.keys().then(cacheNames => {
    cacheNames.forEach(cacheName => {
      console.log("Clearing cache:", cacheName);
      caches.delete(cacheName);
    });
  });
}

// Only force reload if it's an older version or on production domain with stale session
if ((storedVersion && storedVersion !== lastUpdated) || 
    (isProductionDomain() && !sessionStorage.getItem('page-freshly-loaded'))) {
  
  localStorage.setItem('app-version', lastUpdated);
  sessionStorage.setItem('page-freshly-loaded', 'true');
  
  console.log("Reloading page with cache-busting parameter");
  // Reload page with cache-busting parameter
  const cacheBuster = buildTimestamp;
  window.location.href = window.location.pathname + '?nocache=' + cacheBuster;
} else {
  localStorage.setItem('app-version', lastUpdated);
  sessionStorage.setItem('page-freshly-loaded', 'true');
  console.log("Page is fresh, no reload needed");
  
  // Move service worker registration to after app mounting to improve TTFB
  // Register service worker for asset caching
  if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    // Defer service worker registration to not block initial load
    setTimeout(() => {
      navigator.serviceWorker.getRegistrations().then(async registrations => {
        // Unregister existing service workers first to avoid conflicts
        for (let registration of registrations) {
          await registration.unregister();
        }
        
        // Use fetch API to load the service worker dynamically instead of blob
        const swURL = '/service-worker.js?v=' + buildTimestamp;
        navigator.serviceWorker.register(swURL, { scope: '/' })
          .then(reg => {
            console.log('Service Worker registered with scope:', reg.scope);
          })
          .catch(err => {
            console.error('Service Worker registration failed:', err);
          });
      });
    }, 3000); // Delay by 3 seconds to prioritize UI rendering
  }
}

// Create React root and render app - always execute this code
console.log("Attempting to render App component");
const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("Root element found, rendering App");
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found! Check your HTML structure.");
}
