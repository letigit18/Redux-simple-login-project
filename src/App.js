import React from 'react'
import './app.css'
import {useSelector, useDispatch} from 'react-redux'
const App = ()=>{
const counter = useSelector((state)=>state.counter);
const dispatch = useDispatch();// it is used for creating action that changes the state 
const increment = ()=>{
  dispatch({type: "INC"})
} 
const decrement = ()=>[
  dispatch({type: "DEC"})
]
return(
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
export default App;