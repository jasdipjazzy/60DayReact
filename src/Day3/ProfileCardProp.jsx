import React,{ useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./form.css"

const ProfileCardProp=(props)=>{
    // const navigate = useNavigate();
    const[value,setvalue]=useState({
        name:"",
        Role:"",
        Location:"",
    })

     function handleSubmit(e){
        e.preventDefault();
        console.log(value);
        setvalue({name:"", Role:"", Location:""});
        // window.location('/cards')
    }

    return(
        <>
        <form action=""  onSubmit={handleSubmit}>
            <label htmlFor="" id='name'>Name</label>
            <input type="text" className='name' placeholder='Please enter your name ' value={value.name} onChange={(e)=>{setvalue({...value, name:e.target.value})}} required />
            <br />

            <label htmlFor="" id='role'>Role</label>
            <input type="text" className='role' placeholder='Please enter your role' value={value.Role} onChange={(e)=>{setvalue({...value, Role:e.target.value})}} required/>
            <br />


            <label htmlFor="" id='location'>Location</label>
            <input type="text" className='loc' placeholder='please enter your location ' value={value.Location} onChange={(e)=>{setvalue({...value, Location:e.target.value})}} required />
            <br />

            <input type='submit' className='submit' value='Submit'/>
        </form>
        </>
    )
}
export default ProfileCardProp;
