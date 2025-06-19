import User from "../models/userModel.js";
import bcrypt  from "bcrypt";

export default async function createUser(email, password){
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds)
            
        try{
            const CreatedUser = new User({
                username: email,
                email,
                hashedPassword
            });

            await CreatedUser.save();
        }
        catch(error){
            return false;
        }

    return true;
}