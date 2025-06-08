import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Espresso from "./pages/Espresso.jsx";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/espresso" element={<Espresso />}/>
    </Routes>
    
  );
};

export default App;
