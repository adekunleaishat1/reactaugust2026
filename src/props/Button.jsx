import React from 'react'

const Button = (props) => {
    console.log(props);
    
  return (
    <div>
        <button onClick={props.onclick} className={props.classname} >{props.text}</button>
    </div>
  )
}

export default Button