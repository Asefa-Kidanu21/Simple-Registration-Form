import  {checkUserModel,
        createUserModel,
        selectUserModel

} from "../Models/authModel.js";

export const checkUserService = async (id) => {
    const result = await checkUserModel(id);
    return result;
};

export const createUserService = async (name,email,password) => {
    const result = await createUserModel(name,email,password);
    return result;
};

export const selectUserService = async () => {
    const result = await selectUserModel();
    return result;
};