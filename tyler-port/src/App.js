//react dependencies, importing different pages
import React, { useState } from "react";
import ContactMe from "./Components/Contact";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Project from "./Components/Projects";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";

function App() {
  //Set up SPA type state pages to display one page at a time
  const [currentPage, pageChanger] = useState("About");

  const selectPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Project />;
      case "Contact":
        return <ContactMe />;
      case "Resume":
        return <Resume />;
    }
  };
  return (
    <div className='page-wrap'>
      <Nav currentpage={currentPage} pageChanger={pageChanger} />
      <main>
        <div>{selectPage(currentPage)}</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
