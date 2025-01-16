import User from "../models/user.models.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import SignupMailer from "../NodeMailer/SignupMailer.js"
import errorHandler from "../utilis/error.js"
import { generateRandomName, generateRandomPassword } from "../utilis/functionHabdler.js"





export const postSignup = async (req, res, next) => {
    console.log("signup")
    const { email } = req.body;
    console.log(email)
    try {
        const user = await User.findOne({ email });

        if (user) return next(errorHandler(409, "User already exists"));


        const randomName = generateRandomName();
        const randomPassword = generateRandomPassword();

        const hashPassword = await bcrypt.hash(randomPassword, 10);

        const newUser = new User({
            email,
            username: randomName,
            password: hashPassword,
        });

        await newUser.save();
      
    

        SignupMailer(email, randomName, randomPassword);



        res.status(200).json({
            message: "User created successfully",
            user: newUser
        })


    } catch (error) {
        next(error);
    }
};




export const postLogin = async (req, res, next) => {

    const { email, password } = req.body;
    console.log(password)

    try {

        const ValidUser = await User.findOne({ email });

        if (!ValidUser) {
            return next(errorHandler(404, "User not found"));
        }

        const isValidPassword = await bcrypt.compare(password, ValidUser.password);

        if (!isValidPassword) {
            return next(errorHandler(401, "Wrong credentials!"));
        }

        const token = jwt.sign({ id: ValidUser._id }, "bnm67ffccxfdxdf");

        const { password: pass, ...rest } = ValidUser._doc

        res.cookie("access_token", token, { httpOnly: true, maxAge: 2000 }).status(200).json(rest)
        console.log(ValidUser)


    } catch (error) {

    }
}


export const getprofile = (req, res, next) => {
    try {

    } catch (error) {

    }
}