import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Router
import { BrowserRouter } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
          <App />
     </BrowserRouter>
);