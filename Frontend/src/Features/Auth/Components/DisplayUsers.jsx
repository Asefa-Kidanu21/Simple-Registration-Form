
import { useState, useEffect} from "react";
import '../authCss/Table.css'
import {selectUserApi} from "../Services/AuthAPI.js";
export  function DisplayUsers() {

    const [users,setUsers]=useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          const data = await selectUserApi();
          setUsers(data.users);
        };
        fetchUsers();
      }, []);

  return (
    <div>
        <div className="title">
            <h1>DisplayUsers</h1>

        </div>
        
        <table border="1" className="table">
            <thead className="thead">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            
            <tbody className="tbody">
                {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
