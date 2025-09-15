import React from 'react';
import {useState, useEffect} from 'react';

const DigitalClock=()=>{
    const [time,settime]=useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const interval = setInterval(()=>{
            let time = new Date().toLocaleTimeString();
            settime(time);
        },1000)

        return()=>clearInterval(interval)
    },[])

return(
    <>
    <h1>Welcome to my digital clock!</h1>
    <h1>Digital Clock</h1>
    <h2>{time}</h2>
    </>
)
}
export default DigitalClock;