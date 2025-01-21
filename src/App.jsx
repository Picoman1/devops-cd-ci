import React from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar/>
        {/* <Login/>
        <Register/> */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}>
          </Route>
          </Routes>
    </div>
  )
}

export default App