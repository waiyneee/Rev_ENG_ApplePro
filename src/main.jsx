import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f5da6ec11b7eab260a6a525dcdeef401@o4509343725912064.ingest.us.sentry.io/4509343728730112",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
