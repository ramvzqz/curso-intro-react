import React from 'react';
import * as ReactDOM from 'react-dom';
// import './index.css';
import App from './App/index.js';
import PortalReactDOM from 'react-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

PortalReactDOM.createPortal(
  <App/>, 
  document.getElementById('modal')
);