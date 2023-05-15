import "./App.css";
import '../fonts.css';

import Navbar from './components/navbar';
import React, { useState } from 'react';

import Contacto from './screens/contacto';
import Inicio from './screens/inicio';
import Donaciones from './screens/Donaciones';
import Nosotros from './screens/Nosotros';
import Tienda from './screens/tienda';


function App() {
  const [view, setView] = useState('inicio');

  const updateView = (view) => {
    setView(view);
  }

  return (
    
    <div className="App">
      <Navbar updateView={updateView}/>

      <body>
      {view === 'inicio' ? (
        <Inicio />

      ) : view === 'contacto' ? (
        <Contacto />

      ) : view === 'donaciones' ? (
        <Donaciones />

      ) : view === 'nosotros' ? (
        <Nosotros />

      ) : view === 'tienda' ? (
        <Tienda />

      ) : (
        {/* <About /> */}
      )}

      </body>
      
    </div>
  );  
}

export default App;
