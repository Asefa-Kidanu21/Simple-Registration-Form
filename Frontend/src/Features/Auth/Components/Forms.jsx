import { useState,useReducer } from "react";
import '../authCss/Form.css'
import {createUserApi} from "../Services/AuthAPI.js";


const initialState = {
    name: "",
    email: "",
    password: "",
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'change':
            return{
                ...state,
                [action.name]:action.value
            };
        default:
            return state
    }
}

export default function Forms() {
    const [Message,setMessage]=useState('');
    
    const [state,dispatch]=useReducer(reducer,initialState);

    function handleChange(e){
        dispatch({
            type:'change',
            name:e.target.name,
            value:e.target.value
        })
    }
    async function handleSubmit(e){
        e.preventDefault();
        setMessage('');
     try {
      await createUserApi(state);
        setMessage("User created successfully");
     }
      catch (error) {
        setMessage("User creation failed");
     }

    }

  return (
    <div>
        <div className="formheader">
            <h1>Registration Form</h1>
        </div>
<div className="form">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={state.name} onChange={handleChange}/> <br /> <br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={state.email} onChange={handleChange}/> <br /> <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={state.password} onChange={handleChange}/> <br /> <br />
        <button type="submit" className="submit">Submit</button>
    </form>
</div>
<div className="message">
    <p>{Message}</p>

   

</div>
        

    </div>
  )
}

