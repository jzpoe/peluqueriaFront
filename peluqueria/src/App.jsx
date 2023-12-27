
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/Home' element={<Home/>} />
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
