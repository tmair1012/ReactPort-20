//react dependencies, importing different pages
import React, { useState } from "react";
import ContactMe from "./Components/Contact";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Project from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  //Set up SPA type state pages to display one page at a time
  const [currentPage, pageChanger] = useState("Home");

  const selectPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Project":
        return <Project />;
      case "Contact":
        return <ContactMe />;
    }
  };
  return (
    <div>
      <Nav currentpage={currentPage} pageChanger={pageChanger} />
      <main>
        <div>{selectPage(currentPage)}</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
