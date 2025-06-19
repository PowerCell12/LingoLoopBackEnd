import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    hashedPassword: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        default: "/PersonDefault.png"
    },

    country: {
        type: String,
        default: "Unknown"
    },

    fullName: {
        type: String,
        default: "Unknown"
    },

    bio: {
        type: String,
        default: "Unknown"
    }

    // add more
})


const User = mongoose.model("User", userSchema)

export default User