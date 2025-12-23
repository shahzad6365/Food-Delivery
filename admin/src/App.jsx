import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import {Route, Routes} from "react-router-dom"
import Add from "./pages/Add"
import List from "./pages/List"
import Order from "./pages/Order"
import { ToastContainer } from 'react-toastify';
function App() {
  

  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app_content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
           <Route path="/list" element={<List/>}/>
            <Route path="/order" element={<Order/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
