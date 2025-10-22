
import { useEffect } from 'react';
import { useLocation as useWouterLocation } from 'wouter';

export default function Analytics() {
  const [location] = useWouterLocation();
  
  useEffect(() => {
    // Only track in production
    if (import.meta.env.PROD && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
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
