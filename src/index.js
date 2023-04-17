import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import About from './components/About'
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <About />
  </StrictMode>
);
