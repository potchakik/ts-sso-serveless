import passport from "passport";
import GoogleStrategy = require("passport-google-oauth20");
import * as dotenv from "dotenv";
dotenv.config();

//const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID;
//const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET;
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;
const secretOrKey = process.env.secret;

const strategy = passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID:
        "357230215975-nq52palci1n06no8n07grgvce2t6j7gu.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/dev/v1/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(profile);

      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user: any, done) => {
  done(null, user);
});

export default strategy;
