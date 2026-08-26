import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div style={{width:"200px", height:"100vh",backgroundColor:"blue"}}>
        <div style={{padding:"10px 20pxß"}}>
            <h1 style={{textAlign:"center", color:"white",fontSize:"20px", padding:"20px"  }}>Sqi</h1>
            <Link to={"/home/dashboard"} style={{fontSize:"16px", color:"white",fontStyle:"normal", display:"block"}}>Dashboard</Link>
            <Link to={"/home/profile"} style={{fontSize:"16px", color:"white",fontStyle:"normal",display:"block"}}>Profile</Link>
            <Link style={{fontSize:"16px", color:"white",fontStyle:"normal",display:"block"}}>Dashboard</Link>
            <Link style={{fontSize:"16px", color:"white",fontStyle:"normal",display:"block"}}>Payment</Link>
        </div>
    </div>
  )
}

export default Sidenav