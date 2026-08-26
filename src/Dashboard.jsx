import React, {useEffect, useState} from 'react'

const Dashboard = () => {
    const [value, setvalue] = useState("")
    const [count, setcount] = useState(1)
    const [caculation, setcaculation] = useState(2)

   useEffect(() => {
    //   alert("welcome")
       setcaculation(caculation * count)
        fetch("https://jsonplaceholder.typicode.com/todos")
   .then((res)=> res.json())
   .then((data)=>{
    console.log(data);
    
   })
   },[])

 
   
  return (
    <div>
        Welcome to your Dashboard
        <input type="text" onChange={(e)=> setvalue(e.target.value) } />
        <h1>{count}</h1>
        <p>{caculation}</p>
        <button onClick={()=> setcount((count)=> count + 1)}>add</button>
    </div>
  )
}

export default Dashboard