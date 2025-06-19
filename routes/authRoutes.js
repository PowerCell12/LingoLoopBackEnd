import {body} from "express-validator";
import { Router } from 'express';
import registerHandler from "../controllers/authController.js";

const authRouter = Router()

authRouter.post("/register", [
    body("email").isEmail().normalizeEmail(),
    body("password").isStrongPassword({ minLength: 6, minLowercase: 0, minUppercase: 0, minNumbers: 1, minSymbols: 1 })
], registerHandler)

export default authRouter