import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './organisms/Home/home';
import ParkDetails from './organisms/ParkDetails/parkDetails';
import ParkService from './services/parkService';
import CartService from './services/cartService';

function App() {

  const parkService = new ParkService();
  const cartService = new CartService();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home parkService={parkService}/>} />
          <Route path="details/:parkId" element={<ParkDetails parkService={parkService} cartService={cartService}/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
