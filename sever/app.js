import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import config from 'config'
import jwt from 'jsonwebtoken'
const app = express()
const PORT = process.env.PORT || 4000


app.use(express.json())
dotenv.config();
app.use(cookieParser())
app.use(
    cors({

        credentials: true

    })
)



app.use(express.urlencoded({ extended: true }));

import passportGoogleAuth from "./authentication/passportGoogleAuth.js"
app.use(passportGoogleAuth.initialize())
app.get('/auth/google',
    passportGoogleAuth.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passportGoogleAuth.authenticate('google', { failureRedirect: 'https://notes-creating-frontend.onrender.com/login', session: false }),
    function (req, res) {
       

        const userData = req.user

        const token = jwt.sign({ user: req.user }, "jhggyytftyf", { expiresIn: '1h' });

        res.status(200).redirect(`https://notes-creating-frontend.onrender.com/redirecting-to-dashbord?token=${encodeURIComponent(JSON.stringify(token))}`);

    });


import authRoutes from "./routes/auth.routes.js"
app.use("/api/auth", authRoutes)




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


app.listen(PORT, () => {
    console.log("http://localhost", PORT)

    // mongoose.connect('mongodb://127.0.0.1:27017/notesapp').then(() => {
    //     console.log("Connected To DB")
    // }).catch((error) => {
    //     console.log(error)
    // })



    mongoose.connect(process.env.MONGODB_STRING).then(() => {
        console.log("Connected To DB")
    }).catch((error) => {
        console.log(error)
    })

})

