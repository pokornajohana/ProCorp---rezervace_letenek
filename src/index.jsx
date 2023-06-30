import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App/app';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.querySelector('#app')).render(<App />);
