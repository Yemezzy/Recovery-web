import './App.css'
import About from './pages/About';
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom"
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about-us' element={ <About/>} />
        <Route path='/services' element={ <Services/>} />
        <Route path='/contact-us' element={ <Contact/>} />
      </Routes>
   
      {/* <About/> */}
      {/* <Services/> */}
    </>
  );
}

export default App
