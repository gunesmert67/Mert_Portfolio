'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsProvider({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

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
        gtag('config', '${gaId}', {
          page_path: window.location.pathname,
          send_page_view: true
        });
      `;
      document.head.appendChild(script2);
    };

    if (document.readyState === 'complete') {
      const timer = setTimeout(initGA, 2000);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => setTimeout(initGA, 2000);
      window.addEventListener('load', handleLoad, { once: true });
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [gaId]);

  // Track SPA route navigation in GA4
  useEffect(() => {
    if (!gaId) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaId]);

  return null;
}
