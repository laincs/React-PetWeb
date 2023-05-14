import logo from './logo.svg';

import './App.css';
import Navbar from './components/navbar';
import React, { useState } from 'react';

import Contacto from './screens/contacto';
/* import Inicio from './screens/inicio'; */



function App() {
  const [view, setView] = useState('inicio');

  const updateView = () => {
    setView('contacto');
  }

  return (
    
    <div className="App">
      <Navbar updateView={updateView}/>
      <header className="App-header">
      {view === 'inicio' ? (
        <div>
          <h1>acá deberia cargar el inicio :v:v:v:v</h1>
        </div>
      ) : view === 'contacto' ? (
        <Contacto />
      ) : (
        {/* <About /> */}
      )}

      </header>
      
    </div>
  );  
}

export default App;
