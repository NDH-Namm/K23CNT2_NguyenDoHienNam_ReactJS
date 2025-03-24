import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NdhnApp from './NdhnApp';

const ndhn_root = ReactDOM.createRoot(document.getElementById('ndhn_root'));
ndhn_root.render(
  <React.StrictMode>
    <NdhnApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
