import './App.css';
import {Routes,Route} from "react-router-dom"
import Navber from './pages/Navber';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <Navber/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
