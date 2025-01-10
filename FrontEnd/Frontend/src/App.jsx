import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
