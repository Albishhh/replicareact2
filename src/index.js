import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SongWeb from './componentes/SONGWEB/SongWeb';
import Discover from './componentes/DISCOVER/Discover';
import Join from './componentes/JOIN/Join';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SongWeb />
    <Discover />
    <Join />
  </React.StrictMode>
);
