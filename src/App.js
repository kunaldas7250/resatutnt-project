 import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Pagenotfound from "./Pages/Pagenotfound";

import {BrowserRouter,Routes,Route} from "react-router-dom"
 function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
    </BrowserRouter></>
}
export default App;
