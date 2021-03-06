import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Headers from './Components/Headers/Headers';
import Order from "./Components/Order/Order";
import Admin from "./Components/Admin/Admin";
import Deal from "./Components/Deal/Deal"
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";


function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Headers user={user} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/deal' element={<Deal />}></Route>
          <Route path='/login' element={<Login user={user} setUser={setUser} />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
