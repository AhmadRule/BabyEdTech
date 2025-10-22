
import { useEffect } from 'react';
import { useLocation as useWouterLocation } from 'wouter';

export default function Analytics() {
  const [location] = useWouterLocation();
  
  useEffect(() => {
    // Only track in production
    const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (import.meta.env.PROD && window.gtag && GA_ID) {
      window.gtag('config', GA_ID, {
        page_path: location,
      });
    }
  }, [location]);

  return null;
}

// Add to index.html before deploy:
// <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'GA_MEASUREMENT_ID');
// </script>
