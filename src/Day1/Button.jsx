import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import "./Index.css"


const Button = ({onclick, children, disabled=true})=>{
  
   

    return(
        <>

<button onClick={onclick} disabled={disabled} >
    {children}
    </button>

        </>
    )
}
export default Button;