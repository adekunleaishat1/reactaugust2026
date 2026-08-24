import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div className='mx-auto w-50'>
        <h1 className='text-danger'>404</h1>
        <p>This is not the page ypu are looking for.</p>
        <button onClick={()=> navigate("/")} >Go home</button>
    </div>
  )
}

export default Notfound