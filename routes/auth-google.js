const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

// Configure passport to use Google OAuth2 strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/api/auth/google/callback', // This is the callback URL after authentication
    passReqToCallback: true
},
  // Verify function
    function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
    }));

    // Initiate Google OAuth2 authentication request
    router.get('/google',
        passport.authenticate('google', { scope: ['profile', 'email'] })
    );
  
    // Google OAuth2 callback route
    router.get('/google/callback', 
        passport.authenticate('google', { 
            failureRedirect: '/failure',
            successRedirect: '/protected',
        })
    );
  
    router.get('/protected', (req, res) => {
        res.send('protected');
    });

    router.get('/failure', (req, res) => {
        res.send('failure');
    });
  
module.exports = router;