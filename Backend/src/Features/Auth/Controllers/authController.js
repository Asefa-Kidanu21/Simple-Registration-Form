import {checkUserService,
        createUserService,
        selectUserService
} from "../Services/authService.js";


export const checkUserController = async (req, res) => {
    const result = await checkUserService(req.params.id);
    res.json({
        message: "User checked successfully",
        data: result
    });
};

export const createUserController = async (req, res) => {
    const {name,email,password} = req.body;
    const result = await createUserService(name,email,password);
    res.json({
        message: "User created successfully",
        data: result
    });
};

export const selectUserController = async (req, res) => {
    const result = await selectUserService();
    res.json({
        message: "Users selected successfully",
        users: result
    });
};