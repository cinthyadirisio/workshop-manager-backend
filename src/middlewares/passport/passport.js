import passport from "passport";
import dotenv from 'dotenv'
dotenv.config()

import { Strategy, ExtractJwt } from "passport-jwt";
import userServices from "../../services/authServices.js";

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

const authenticate = async ( payload, done ) => {
    try {
        const user = await userServices.findByEmail(payload.email)
        if (!user) return done(null, false)
        return done(null, user)
    } catch (error) {
        return done(error, false)
    }
}

export default passport.use(new Strategy( options, authenticate ))