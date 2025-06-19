import { validationResult } from "express-validator";
import createUser from "../services/authServices.js";


export default  async function registerHandler(req, res){

    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() }) // see what it actually returns
    }

    const { email, password}  = req.body

    try {

        const isCreated = await createUser(email, password)

        if (isCreated){
            return res.status(201).json({ message: "User created successfully" })
        }
        else{
            return res.status(400).json({ message: "User already exists" })
        }

    }
    catch (error){
        return res.status(error.statusCode || 500).json({ message: "Internal Server Error" })
    }


}




