import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css';
import App from './App.jsx'
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";

import "@fontsource/inter-tight/400.css";
import "@fontsource/inter-tight/700.css";
import "@fontsource/inter-tight/900.css";

import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
