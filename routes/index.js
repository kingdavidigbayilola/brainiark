var express = require('express');
var passport = require('passport');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var User = require('../models/user');
var middleware = require('../middleware/secure');
var {
    pages_security
} = middleware

var router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        message: req.flash('signupMessage')
    })
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/home',
    failureRedirect: '/#signup',
    failureFlash: true
}));

router.get('/signin', (req, res) => res.render('signin', {
    message: req.flash('signinMessage')
}));

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/home',
    failureRedirect: '/signin',
    failureFlash: true
}));

router.get('/home', pages_security, (req, res) => res.render('profile/home', {
    user: req.user
}))

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/support', (req, res) => res.render('support', {
    user: req.user
}));


router.get('/signout', pages_security, (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/forgot', (req, res) => {
    res.render('forgot');
});

router.get('/library', pages_security, (req, res) => {
    res.render('profile/library', {
        user: req.user
    });
});

router.get('/privacy', (req, res) => {
    res.render('privacy')
})

router.get('/user', (req, res) => {
    User.find()
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = router;