
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Nosotros from './components/nosotros/Nosotros';
import Contacto from './components/contacto/Contacto';
import Peluqueria from './components/peluqueria/Peluqueria';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ImageUploader from './components/ImageUploader/ImageUploader';



function App() {

  return (
    <>


      <BrowserRouter>
      <Navbar />


      
      <Routes>
      <Route path='/' element={<Peluqueria/>} />
        <Route path='/Upload' element={<ImageUploader/>} />
        <Route path='/about' element={<Nosotros/>} />
        <Route path='/contact' element={<Contacto/>} />
        <Route path='/registrate' element={<Register/>} />
        <Route path='/sesion' element={<Login/>} />
      </Routes>
      
      </BrowserRouter>

      </>
  )
}

export default App
