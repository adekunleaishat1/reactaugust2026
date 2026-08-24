import { useState } from "react";
// import Navbar from "./Navbar";

function Landingpage() {
   const [inputvalue , setinputvalue] = useState("")
   const [inputvalue2 , setinputvalue2] = useState("")
   const [allvalue , setallvalue] = useState([])

  // TERNARY OPERATOR {"conditional statement " ? "true expression" : "false expression"}

    const handleinputchange = (e) =>{
       setinputvalue(e.target.value)
      
    }
    const Updatearray = () =>{
        let inputdetail = {
           email: inputvalue,
           username: inputvalue2
        }
        console.log(inputdetail);
        
        setallvalue([...allvalue, inputdetail])
    }

    return <div>
      
        <input type="text" onChange={handleinputchange} />
        <input type="text" onChange={(e)=> setinputvalue2(e.target.value)} />
        <button onClick={Updatearray}>addvalue</button>
        <h3>{inputvalue}</h3>
        <p>this is {2 * 2}</p>

        {allvalue.length == 0 ? "NO available user at the moment" :  allvalue.map((val,i)=>{
            return (
                <>
                <div>
                    <p>email :{val.email},</p>
                    <p>{val.username}</p>
                </div>
                </>
            )
        })

        }
    </div>
}

export default Landingpage