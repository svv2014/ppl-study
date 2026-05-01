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

  // send_page_view: false — RouteTracker fires page_view on every location
  // change including the initial render, so we let it own all page_view events
  // to avoid a double-fire on first load.
  window.gtag('js', new Date());
  window.gtag('config', id, { send_page_view: false });

  initialised = true;
}

export function trackPageView(path: string): void {
  if (!initialised) return;
  window.gtag?.('event', 'page_view', { page_path: path });
}
