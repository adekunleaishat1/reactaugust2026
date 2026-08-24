import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import Notfound from './Notfound'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <h1>Testing my global styles</h1> */}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App