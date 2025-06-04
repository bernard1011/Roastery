import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import  Navbar from "./components/Navbar.jsx"
library.add(faBars, faXmark);




const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
    </>
  );
};

export default App;
