import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from "../models/user.models.js"
import passport from 'passport';
import { generateRandomName, generateRandomPassword } from "../utilis/functionHabdler.js"
import bcrypt from "bcrypt"


    passport.use(new GoogleStrategy({

        clientID:process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
    },
        async function (accessToken, refreshToken, profile, done) {
            console.log(profile)
            try {
                const user = await User.findOne({ email: profile._json.email })

                if (user) {
                    return done(null, user);
                }



                const randomName = generateRandomName();
                const randomPassword = generateRandomPassword();

                // const hashedPassword = await bcrypt.hash(randomPassword, 10);

                const newUser = await User.create({
                    fullName: profile.displayName,
                    email: profile._json.email,
                    username: randomName,
                    password: randomPassword,
                    profileImage: { google: profile._json.picture },
                    googleId: profile.id,
                    accessToken: accessToken,
                    refreshToken: refreshToken,

                })
              console.log(newUser)
                return done(null, newUser);

            }
            catch (error) {
                console.log(error)
            }
        }
    ))


export default passport
