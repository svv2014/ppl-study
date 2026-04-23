import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/600.css';
import { ThemeModeProvider } from './context/ThemeModeContext';
import { StickyPlayerProvider } from './context/StickyPlayerContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <StickyPlayerProvider>
        <App />
      </StickyPlayerProvider>
    </ThemeModeProvider>
  </React.StrictMode>
);
