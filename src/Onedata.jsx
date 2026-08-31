import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Onedata = () => {
    const {id} = useParams()
    console.log(id);
     const [onetodo, setOnetodo] = useState(null)
       useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res)=>{
            console.log(res.data);
            setOnetodo(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
   }, [])
    
  return (
    <div>
      <h1>see more information about your data</h1>  
      <p>{onetodo && onetodo.title}</p>
      {/* <input type="checkbox" checked /> */}
      <p>{onetodo && onetodo.completed}</p>
    </div>
  )
}

export default Onedata