import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login'
import Table from './Table'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import AddContact from './AddContact';
import Edit from './edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/edit/:id" element={<Edit/>} />
    <Route path="/add" element={<AddContact/>} />

    
    <Route path="/table" element={<Table/>} />


  </Routes>
    
  </BrowserRouter>
  // </React.StrictMode>
);

