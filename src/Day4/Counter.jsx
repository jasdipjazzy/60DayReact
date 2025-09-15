import React,{useState} from "react";



const Counter = ()=>{
    const[count, setcount]=useState(0);

    function increment()
    {
        setcount(count+1);
        console.log(count)
    }
    function decrement()
    {
        setcount(count-1);
        console.log(count)
    }
    function reset()
    {
        setcount(0);
        console.log("the count is reset to zero:"+count);

    }
    return(
        <>
        <h1>hello ji welcome to my counter!!!!</h1>
        <h2>Count:{count}</h2>

        <button onClick={increment}>count</button>
        <button onClick={decrement}>Decrement count</button>
        <button onClick={reset}>Reset count</button>
        
        
        </>
    )
}
export default Counter;