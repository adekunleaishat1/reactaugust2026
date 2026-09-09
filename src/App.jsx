import React, {useEffect, useState} from 'react'
import "./App.css"
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import Notfound from './Notfound'
import Layout from './Layout'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Onedata from './Onedata'
import axios, { all } from 'axios'
import Formik from './Formik'

const App = () => {
 const location = useLocation()
 const pathname = ["/", "/landingpage"]
 const [alldata , setalldata] = useState(null)

  useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/todos")
     .then((res)=>{
      console.log(res);
      setalldata(res.data)
     }).catch((err)=>{
         console.log(err);
     })
  }, [])
  
 
  return (
    <div>
     {pathname.includes(location.pathname) &&  <Navbar/>}
      {/* <h1>Testing my global styles</h1> */}
      <Routes>
        <Route path='/landingpage' element={<Home/>}/>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/form' element={<Formik/>}/>

        <Route path='/home' element={<Layout/>}>
         <Route index element={<Dashboard alldata={alldata}/>} />
         <Route path='/home/dashboard/:id' element={<Onedata alldata={alldata}/>} />
         <Route path='/home/profile' element={<Profile/>} />
         <Route path='/home/dashboard' element={<Dashboard alldata={alldata}/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App