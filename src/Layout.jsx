import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{width:"100%",height:"auto", display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <Sidenav/>
        <div style={{width:"100%", height:"100vh"}}>
          <Navbar/>
          <div>
             <Outlet/>
          </div>
        </div>
        
    </div>
  )
}

export default Layout