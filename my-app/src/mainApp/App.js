
import '../fonts.css';

import Navbar from './components/navbar';
import React, { useState } from 'react';

import Contacto from './screens/contacto';
import Inicio from './screens/inicio';



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
      ) : (
        {/* <About /> */}
      )}

      </body>
      
    </div>
  );  
}

export default App;
