import { createRoot } from 'react-dom/client';
import './style/index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import ScrollToTop from './hooks/scrollToTop.ts';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
);
