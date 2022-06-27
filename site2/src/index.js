import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Consulta from './pages/consulta'
import Cadastro from './pages/cadastro'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/consulta' element={<Consulta/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
