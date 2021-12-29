//react dependencies, importing different pages
import React, { useState } from 'react';
import ContactMe from './Components/Contact';
import Nav from './Components/Nav';
import About from './Components/About';
import Project from './Components/Projects';


function App() {
  //Set up SPA type state pages to display one page at a time
  const [currentPage, pageChanger] = useState('Home')
  
  const selectPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Project':
        return <Project />;
      case 'ContactMe':
        return <ContactMe />;
    }
  }
  return (
    <div>
      <Nav currentpage={currentPage} pageChanger={pageChanger} />
    <div>{selectPage(currentPage)}</div>
    </div>
  );
}

export default App;
