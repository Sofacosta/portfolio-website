import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AnalyticsProvider } from 'use-analytics';
import { analytics } from './utils/analytics';
import App from './components/App';

ReactDom.createRoot(document.getElementById('root')).render(
  <AnalyticsProvider instance={analytics}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AnalyticsProvider>
);
