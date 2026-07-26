'use client';

import { useEffect } from 'react';

export default function GoogleAnalyticsProvider({ gaId }: { gaId: string }) {
  useEffect(() => {
    if (!gaId) return;

    const initGA = () => {
      if (document.getElementById('ga-script')) return;

      const script1 = document.createElement('script');
      script1.id = 'ga-script';
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.id = 'ga-init-script';
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(script2);
    };

    // Defer Google Analytics until main thread is idle (3 seconds after load)
    if (document.readyState === 'complete') {
      const timer = setTimeout(initGA, 3000);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => setTimeout(initGA, 3000);
      window.addEventListener('load', handleLoad, { once: true });
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [gaId]);

  return null;
}
