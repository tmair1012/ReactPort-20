//react dependencies, importing different pages
import React, { useState } from 'react';
import ContactMe from './Components/Contact';
import Nav from './Components/Nav';
import About from './Components/About'
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactMe></ContactMe>
      </main>
    </div>
  );
}

export default App;
