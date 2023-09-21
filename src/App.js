import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Units from './Pages/Units';
import Users from './Pages/Users';
import Videos from './Pages/Videos';
import ELearning from './Pages/E-learning';
import Tickets from './Pages/Tickets';
import Nav from './Components/Nav';
import UnitsInStock from './Pages/UnitsInStock';
import SignOut from './Pages/SignOut';
function App() {
 
  return (
    <BrowserRouter>
    
      <Nav />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/units' element={<Units />} />
        <Route path='/users' element={<Users />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='e-learning' element={<ELearning />} />
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='/units-in-stocks' element={<UnitsInStock />} />
        <Route path='/sign-out' element={<SignOut/>}/>
        <Route path='*' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
