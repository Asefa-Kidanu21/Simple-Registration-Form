
import { useState, useEffect} from "react";
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
        <h1>DisplayUsers</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            
            <tbody>
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
