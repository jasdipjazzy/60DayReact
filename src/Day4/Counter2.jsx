import React,{useState} from 'react'

const Counter2 = () => {
    const[count,setcount]=useState(0);
  return (
    <>
      <h1>Counter 2 is here guys </h1>

      <h2>Count: {count}</h2>

      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
      <button onClick={()=>setcount(0)}>Reset</button>
    </>
  )
}

export default Counter2
