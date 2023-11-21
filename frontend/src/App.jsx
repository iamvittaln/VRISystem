import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Status from "./components/Status";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import DashBoard from "./components/DashBoard";
import Rice from "./components/Rice"
import Barley from "./components/Barley"
import Wheat from "./components/Wheat"
import Corn from "./components/Corn"

function App()
{
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/status" element={<Status />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/dashboard" element={<DashBoard />}></Route>
            <Route path="/status/Rice" element={<Rice />}></Route>
            <Route path="/status/Barley" element={<Barley/>}></Route>
            <Route path="/status/Wheat" element={<Wheat/>}></Route>
            <Route path="/status/Corn" element={<Corn/>}></Route>
            <Route path="/dashboard/Rice" element={<Rice source="dashboard"/>}></Route>
            <Route path="/dashboard/Barley" element={<Barley source="dashboard"/>}></Route>
            <Route path="/dashboard/Wheat" element={<Wheat source="dashboard"/>}></Route>
            <Route path="/dashboard/Corn" element={<Corn source="dashboard"/>}></Route>


          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;