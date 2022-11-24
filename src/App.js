import './App.css';
import './styles/Landingpage.css'
import './styles/Login.css'
import './styles/Select.css'
import './styles/Layout.css'
import './styles/Button.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Login from './components/Login';
import Welcome from './components/Welcome';
import Select from './components/Select';
import OrderApproved from './components/OrderApproved'
import Confirm from './components/Confirm'
import Notification from './components/Notification';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Welcome' element={<Welcome />} />
        <Route exact path='/Select' element={<Select />} />
        <Route exact path='/Confirm' element={<Confirm />} />
        <Route exact path='/OrderApproved' element={<OrderApproved />} />
        <Route exact path='/Notification' element={<Notification />} />
      </Routes>
    </Router>
  );
}
export default App;
