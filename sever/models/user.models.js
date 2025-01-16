import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String
    },

    password: {
        type: String,
    },

    username: {
        type: String

    },

    email: {
        type: String,
        require: true
    },

    profileImage: {

        default: {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/512/4918/4918116.png"
        },

        google: {
            type: String,

        }
    },

    googleId: {
        type: String
    },

    accessToken: {
        type: String
    },

    refreshToken: {
        type: String
    }



})


const User = mongoose.model("users", userSchema)
export default User