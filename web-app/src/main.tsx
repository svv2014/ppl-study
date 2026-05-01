import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/600.css';
import { ThemeModeProvider } from './context/ThemeModeContext';
import { StickyPlayerProvider } from './context/StickyPlayerContext';
import { ExamTrackProvider } from './context/ExamTrackContext';
import { initAnalytics } from './lib/analytics';
import App from './App';

initAnalytics();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <StickyPlayerProvider>
        <ExamTrackProvider>
          <App />
        </ExamTrackProvider>
      </StickyPlayerProvider>
    </ThemeModeProvider>
  </React.StrictMode>
);
