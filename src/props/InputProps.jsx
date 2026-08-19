import React from 'react'

const InputProps = (props) => {
  return (
    <div>
        <input onChange={props.onchange} placeholder={props.place} type="text" />
    </div>
  )
}

export default InputProps