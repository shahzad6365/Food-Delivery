import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Placeoreder from "./Pages/Placeoreder"
import Footer from "./Components/Footer"
import { useState } from "react"
import Login from "./Components/Login"
import Verify from "./Pages/Verify"
import Myorder from "./Pages/Myorder"

function App() {

  const [showlogin ,setShowlogin]=useState(false)
  return (
    <>
    {showlogin?<Login setShowlogin={setShowlogin}/>:<></>}
      <div className="app">
        <Navbar  setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<Placeoreder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<Myorder />} />
        </Routes>
      </div>
      <Footer/>


    </>
  )
}

export default App
