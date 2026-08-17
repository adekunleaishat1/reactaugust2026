import { useState } from "react"

function Todos() {
    const [inputvalue, setinpuvalue] = useState("")
    const [inputvalue01, setinpuvalue01] = useState("")
    const [todoArray, settodoArray] = useState([])
    const [currentindex, setcurrentindex] = useState(null)


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



    return (
        
        <div>
            <input value={inputvalue} type="text"  onChange={ (ev) =>  setinpuvalue(ev.target.value)}/>
            <input value={inputvalue01} type="text" onChange={ (ev) =>  setinpuvalue01(ev.target.value)}  />
            <button onClick={Addtodo}>{currentindex == null ? "Add Todo" : "Update Todo"}</button>

            {
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
                 
            } {}

        </div>
    )
}
export default Todos