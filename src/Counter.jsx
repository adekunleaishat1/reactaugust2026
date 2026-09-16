import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './Redux/Countslice'

const Counter = () => {
    const {count} = useSelector(state=> state.countslice)
    console.log(count);

    const dispatch = useDispatch()
    
  return (
    <div>
        <button>-</button>
       <h2>{count}</h2>
       <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter