import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HeaderComponent from './Components/Header/HeaderCom';
import FooterComponent from './Components/Footer/FooterCom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Destination from './Pages/Destination';
import PrivateTour from './Pages/PrivateTour';
import SingleTour from './Pages/SingleTour';
import TourList from './Pages/TourList';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {

  

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <HeaderComponent   />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/privatetour' element={<PrivateTour/>} />
      <Route path='/singletour' element={<SingleTour/>} />
      <Route path='/tourlist' element={<TourList/>} />
    </Routes>
    <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
