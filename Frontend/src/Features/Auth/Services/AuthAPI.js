import axios from "axios";
export const createUserApi=async (user)=>{

    const result=await axios.post("http://localhost:3000/api/create",user);
}

export const selectUserApi=async ()=>{

    const result=await axios.get("http://localhost:3000/api/select");

    return result.data;
}