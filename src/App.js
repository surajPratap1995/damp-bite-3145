// import logo from './logo.svg';
import './App.css';
import Navbar from  "./Navbar/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "./Route/Home"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
