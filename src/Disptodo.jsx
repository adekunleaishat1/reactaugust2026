import React from 'react'

const Disptodo = ({todo}) => {
    console.log(todo);
    
  return (
    <div>
      {
                todo.map ((value, i) => {
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
                 
            } 
    </div>
  )
}

export default Disptodo