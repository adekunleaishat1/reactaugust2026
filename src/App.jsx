import React from 'react'
import "./App.css"
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import Notfound from './Notfound'
import Layout from './Layout'
import Profile from './Profile'
import Dashboard from './Dashboard'

const App = () => {
 const location = useLocation()
 const pathname = ["/", "/landingpage"]

 
  return (
    <div>
     {pathname.includes(location.pathname) &&  <Navbar/>}
      {/* <h1>Testing my global styles</h1> */}
      <Routes>
        <Route path='/landingpage' element={<Home/>}/>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='*' element={<Notfound/>}/>

        <Route path='/home' element={<Layout/>}>
         <Route index element={<Dashboard/>} />
         <Route path='/home/profile' element={<Profile/>} />
         <Route path='/home/dashboard' element={<Dashboard/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App