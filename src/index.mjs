import "./styles.css";

import App from './app';

import { createRoot } from 'react-dom/client';

const appElement = document.querySelector('#app');

if (appElement) {
  const root = createRoot(appElement);
  root.render(<App/>);
}