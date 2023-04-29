import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Europe from "./components/Europe/Europe";

import Navbar from "./components/NavBar/Navbar";
import Jugar from "./pages/Jugar/Jugar";
import Paises from "./pages/Países/Paises";
import Principal from "./pages/Principal/Principal";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Principal/>} />
        <Route exact path="/play" element={<Jugar/>} />
        <Route exact path="/countries" element={<Paises/>} />
        <Route exact path="/countries/europe" element={<Europe/>}/>
      </Routes>
    </Router>
  );
}