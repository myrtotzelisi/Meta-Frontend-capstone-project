
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Reservations from './pages/Reservations';
import { ConfirmedBooking } from './Components/ConfirmedBooking';

function App() {

  // const [availableTimes, setAvailableTimes] = useState([
  //   {id:1, hour: "17:00"},
  //   {id:2, hour: "18:00"},
  //   {id:3, hour: "19:00"},
  //   {id:4, hour: "20:00"},
  //   {id:5, hour: "21:00"},
  //   {id:6, hour: "22:00"}
  // ])

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

  const initializeTimes = () => {return {availableTimes: fetchAPI (new Date())}}
  const [state, dispatch] = useReducer(updateTimes,[], initializeTimes);

  function updateTimes (state, action) {
    switch(action.type) {
      case "UPDATE_TIME":
       return {availableTimes: fetchAPI (new Date(action.payload))}
      default:
        return state;
    }
  }

  const submitAPI = formData => true;
  const navigate = useNavigate();
  function submitForm (formData) {
      if (submitAPI(formData)) {
          navigate("/confirmed")
      }
  }

  return (
    <div className='App'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/confirmed' element={<ConfirmedBooking/>}/>
      <Route path='/reservations' element={<Reservations availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm}/>}/>
    </Routes>
   <Footer/>
   </div>
  );
}

export default App;
