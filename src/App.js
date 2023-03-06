import './App.css';
import {Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navber from './pages/Navber';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Regster from './pages/Regester';
import Forget from './pages/Forget';

function App() {
  return (
    <div className="App">
        <Navber/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Regster/>}/>
            <Route path='/forget' element={<Forget/>}/>
        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
