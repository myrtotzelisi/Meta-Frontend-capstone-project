
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Reservations from './pages/Reservations';

function App() {
  return (
    <div className='App'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/reservations' element={<Reservations/>}/>
    </Routes>
   <Footer/>
   </div>
  );
}

export default App;
