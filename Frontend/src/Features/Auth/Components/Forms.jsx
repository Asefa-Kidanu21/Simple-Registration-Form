import { useReducer} from "react";
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
        await createUserApi(state);

        // console.log(result.message);
        // console.log(result.data);

        // console.log(state);

    }

  return (
    <div>
        <h1>simple form</h1>
        <form onSubmit={handleSubmit}>
          Name <input type="text" name="name" value={state.name} onChange={handleChange}/> <br /> <br />
          Email <input type="email" name="email" value={state.email} onChange={handleChange}/> <br /> <br />
          Password <input type="password" name="password" value={state.password} onChange={handleChange}/> <br /> <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

