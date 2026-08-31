import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = ({alldata}) => {
    console.log(alldata);
    
    const [value, setvalue] = useState("")
    const [count, setcount] = useState(1)
    const [caculation, setcaculation] = useState(2)
    const [data, setdata] = useState(null)

   useEffect(() => {
    //   alert("welcome")
       setcaculation(caculation * count)
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setdata(data)
        })
   },[])



   

 
   
  return (
    <div>
        Welcome to your Dashboard
        <input type="text" onChange={(e)=> setvalue(e.target.value) } />
        <h1>{count}</h1>
        <p>{caculation}</p>
        <button onClick={()=> setcount((count)=> count + 1)}>add</button>
        {data && data.map((todo)=>{
            return (
                <>
                <h1>{todo.title}</h1>
               <Link to={`/home/dashboard/${todo.id}`}>See more</Link>
                </>
            )
        })
        }
    </div>
  )
}

export default Dashboard