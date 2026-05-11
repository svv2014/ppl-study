declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

let initialised = false;

export function initAnalytics(): void {
  if (initialised) return;
  if (!import.meta.env.PROD) return;
  const id = import.meta.env.VITE_GA_ID as string | undefined;
  if (!id) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  // send_page_view: true — GA4 tracks the initial page load automatically.
  // RouteTracker skips the first render via useRef so subsequent navigations
  // are tracked without double-firing on initial load.
  window.gtag('js', new Date());
  window.gtag('config', id, { send_page_view: true });

  initialised = true;
}

export function trackPageView(path: string): void {
  if (!initialised) return;
  window.gtag?.('event', 'page_view', { page_path: path });
}
