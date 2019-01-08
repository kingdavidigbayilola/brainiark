const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            throw err;
        })
})


passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    process.nextTick(() => {
        User.findOne({
                email: email
            })
            .then(user => {
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'Email exits'))
                } else {
                    bcrypt.hash(password, 10, (err, hash) => {
                        if (err) {
                            throw err;
                        }
                        const newuser = new User({
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            username: req.body.firstname + req.body.lastname,
                            email: email,
                            password: hash
                        });

                        newuser.save()
                            .then(user => {
                                done(null, user);
                            })
                            .catch(err => {
                                done(err);
                            })
                    });
                }
            })
            .catch(err => {
                done(err);
            });
    });
}));


passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    process.nextTick(() => {
        User.findOne({
                email: email
            })
            .then(user => {
                if (!user) {
                    return done(null, false, req.flash('signinMessage', 'Invalid Email Address Or Password'))
                } else {
                    bcrypt.compare(password, user.password)
                        .then(password => {
                            if (!password) {
                                return done(null, false, req.flash('signinMessage', 'Invalid Password'))
                            } else {
                                return done(null, user);
                            }
                        })
                        .catch(err => {
                            throw err;
                        });
                }
            })
            .catch(err => {
                done(err);
            });
    });
}));

