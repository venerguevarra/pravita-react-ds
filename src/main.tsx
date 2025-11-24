import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@mantine/core/styles.css';

import { DSProvider } from './design-system/DSProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DSProvider>
      <App />
    </DSProvider>
  </React.StrictMode>,
);
