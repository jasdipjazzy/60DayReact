import React from 'react'
import  "./card.css"

const Cards = ({props}) => {
  return (
    <>
    <h1>Welcome to the cards page </h1>
   
   <div className='card-container'>
      {props?.value.map((v,i)=>(
        <div key={i} className='card'>
          <h2>The profile info:</h2>
          <h3>Name:{v.name}</h3>
          <h3>Role:{v.Role}</h3>
          <h3>Location:{v.Location}</h3>
        </div>
      ))}
   </div>

    </>
)
}

export default Cards
