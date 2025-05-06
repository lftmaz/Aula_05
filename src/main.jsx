import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Se você estiver usando o Tailwind CSS

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
