
import express from "express";
import {checkUserController,
        createUserController,
        selectUserController
} from "../Controllers/authController.js";
import {Router} from "express";
const router = Router();

router.get("/check/:id", checkUserController);
router.post("/create", createUserController);
router.get("/select", selectUserController);

export default router;