import {sql} from "../../../Config/Db.js";

export const checkUserModel = async (id) => {
    const result = await sql`SELECT * FROM Table1 WHERE id = ${id}`;
    return result;
};

export const createUserModel = async (name,email,password) => {
    const result = await sql`INSERT INTO Table1 (name,email,password) 
    VALUES (${name}, ${email}, ${password})
    returning *`;
    return result;
};
export const selectUserModel = async () => {
    const result = await sql`SELECT * FROM Table1`;
    return result;
};
