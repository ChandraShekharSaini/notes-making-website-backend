import express from 'express'
const router = express.Router();

import { postSignup, postLogin, getprofile } from "../controller/auth.controller.js"

console.log("----------------")
router.post("/signup", postSignup)
router.post("/signin", postLogin)
router.get("/profile", getprofile)

export default router

