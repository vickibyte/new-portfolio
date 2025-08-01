/**
 *  @copyright 2024 Fisher9ine 
 * @license Apache-2.0
 */

/**
 * Components
 */
import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App.jsx';

/**
 * CSS link
 */
import './index.css';
import 'lenis/dist/lenis.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
