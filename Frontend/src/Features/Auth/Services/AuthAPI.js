import axios from "axios";
export const createUserApi=async (user)=>{

    const result=await axios.post
    ("https://simple-registration-form-v8tc.onrender.com/api/create",user);

    return result.data;
}


export const selectUserApi=async ()=>{

    const result=await axios.get("http://localhost:3000/api/select");

    return result.data;
}