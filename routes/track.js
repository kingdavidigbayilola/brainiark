const express = require('express');
const middleware = require('../middleware/secure');
const {pages_security} = middleware
const router = express.Router();

router
    .get('/', pages_security, (req, res) => {
        res.render('profile/track', {
            user: req.user
        });
    })
    .get('/math', pages_security, (req, res) => {
        res.render('profile/track/math', {
            user: req.user
        });
    })
    .get('/math/basic-1', pages_security, (req, res) => {
        res.render('profile/track/math/basic-1', {
            user: req.user,
            session: 'Maths'
        });
    })


module.exports = router;