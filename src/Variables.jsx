import { useState } from "react"


const Variables = () =>{ 
    const [username2 , setusername2] = useState("shola")
    const [userobj , setuserobj] = useState(
       {  name:"tolu", class:"reactjs", age:17} 
    )
    const [userarray , setuserarray] = useState([
        "Taiwo", "John","Sheriff","Femi"
    ])

    // const user = "yeesha"
    // const userdetail = {
    //     name:"tolu",
    //     class:"reactjs",
    //     age:17
    // }
    let username = "toluwani"
   const handleupdate = () =>{
     username = "lolade"
     console.log(username);
     setusername2("tolani")
     setuserobj({...userobj, age:20})
   }

 return (
    <>
      <h1>Welcome to variable declaration.</h1>
      {/* <p>{userdetail.name}</p>
      <p>{userdetail.class}</p> */}
      <h3>{username}</h3>
      <h3>{username2}</h3>
      <button onClick={handleupdate }>update</button>

      <p>{userarray[0]}</p>

      {userarray.map((user, i)=>{
        return <>
            <p>{i}</p>
            <p>{user}</p>
        </>
      })

      }
    </>
 )
}


export default Variables