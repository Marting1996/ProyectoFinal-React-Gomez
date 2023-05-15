import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Context
import { CarritoProvider } from './context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);


