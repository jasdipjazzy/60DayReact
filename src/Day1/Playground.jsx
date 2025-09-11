import React from 'react'
import "./Index.css"

const Playground = () => {
  return (
    <>
      <h1>Playground</h1>
      <button onClick={()=>{alert("are your sure!")}}>?????</button>
      <button onClick={()=>{alert("helooooooooooo sir/mam")}}>click me </button>
      <button disabled={true} id='dis-btn'>disabled</button>
    </>
  )
}

export default Playground
