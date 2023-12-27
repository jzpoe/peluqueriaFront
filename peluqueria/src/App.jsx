
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import Contacto from './components/contacto/Contacto';
import Sesion from './sesion/Sesion';
import Peluqueria from './components/peluqueria/Peluqueria';



function App() {

  return (
    <>


      <BrowserRouter>
      <Navbar />


      
      <Routes>
      <Route path='/peluqueria' element={<Peluqueria/>} />

        <Route path='/Home' element={<Home/>} />
        <Route path='/about' element={<Nosotros/>} />
        <Route path='/contact' element={<Contacto/>} />
        <Route path='/sesion' element={<Sesion/>} />
      </Routes>

      </BrowserRouter>

      </>
  )
}

export default App
