import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Calculadora from './componentes/Calculadora';
import Reloj from './componentes/Reloj';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='App-header'>
          <Link to="/calculadora" className="btn-calculadora">Calculadora</Link>
          <Link to="/reloj" className="btn-reloj">Reloj</Link>
        </div>
        <Routes>
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/reloj" element={<Reloj />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

