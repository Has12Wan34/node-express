const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session'); // เพิ่ม express-session เข้ามาใช้งาน
require('dotenv').config();

// ใช้งาน express-session middleware
router.use(session({
  secret: '30Fdvnw0u0', // ใส่คีย์สำหรับเข้ารหัส session ของคุณ
  resave: false,
  saveUninitialized: true
}));

// Configure passport to use Google OAuth2 strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/api/auth/google/callback', // This is the callback URL after authentication
    passReqToCallback: true
  },
  // Verify function
  function(request, accessToken, refreshToken, profile, done) {
    profile._json.accessToken = accessToken;
    return done(null, profile);
  }
));

// Serialize and deserialize user functions for session management
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Initiate Google OAuth2 authentication request
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { session: false }), // Disable session to prevent redirection
    (req, res) => {
      res.json({
        "email" : req.user._json.email,
        "display_name" : req.user._json.name,
        "fname" : req.user._json.given_name,
        "lname" : req.user._json.family_name,
        "photo_url" : req.user._json.picture,
        "token" : req.user._json.accessToken
      }); 
    }
  );

module.exports = router;
