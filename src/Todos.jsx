import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Button from "./props/Button"
import Disptodo from "./Disptodo"

function Todos() {
    const [inputvalue, setinpuvalue] = useState("")
    const [inputvalue01, setinpuvalue01] = useState("")
    const [todoArray, settodoArray] = useState([])
    const [currentindex, setcurrentindex] = useState(null)
    const [showing, setshowing] = useState(false)


    function Addtodo() {
         let myArray = {inputvalue, inputvalue01}

        if (currentindex !== null) {
            todoArray[currentindex ] = myArray
            settodoArray([...todoArray])
            setcurrentindex(null)
            setinpuvalue("")
           setinpuvalue01("")
           return
        }
       
        settodoArray([...todoArray, myArray])
        setinpuvalue("")
        setinpuvalue01("")
    }

    function handleDelete(delIndex) {

        todoArray.splice(delIndex, 1)
        settodoArray([...todoArray])

    //     const updatedList = todoArray.filter((item, index) => {
    //         return index !== delIndex
    //     })
    //   console.log(updatedList);
      
    //     settodoArray([...updatedList])
    }
    function handleEdit(delIndex){
        const editTodo = todoArray[delIndex]
        setinpuvalue(editTodo.inputvalue)
        setinpuvalue01(editTodo.inputvalue01)
        console.log(editTodo);
        setcurrentindex(delIndex)
    }

    const showpassword = () =>{
        // if (showing) {
        //    return setshowing(false)
        // }
        // setshowing(true)
        setshowing(!showing)
    }

    return (
        
        <div>
            <input type={showing ? "text" : "password"} />
            <button onClick={showpassword}>{showing ?  <FaEyeSlash/> : <FaEye/>}</button>
            <input value={inputvalue} type="text"  onChange={ (ev) =>  setinpuvalue(ev.target.value)}/>
            <input value={inputvalue01} type="text" onChange={ (ev) =>  setinpuvalue01(ev.target.value)}  />
            <button onClick={Addtodo}>{currentindex == null ? "Add Todo" : "Update Todo"}</button>
            <Button onclick={()=>alert("signup")} classname="btn btn-success" text="Signup"/>
            <Button  onclick={()=>alert("Login")} text="Login"/>
            <Button text="loading"/>
            <Disptodo todo={todoArray}/>
            {/* {
                todoArray.map ((value, i) => {
                       return (
                        <div>
                            <ul>
                                <li>{value.inputvalue}</li>
                                <li>{value.inputvalue01}</li>
                            </ul>
                            <button onClick={() => handleDelete(i)}>Delete</button>
                            <button onClick={()=>handleEdit(i)}>Edit</button>
                        </div>
                    
                    )
                })
                 
            }  */}

        </div>
    )
}
export default Todos