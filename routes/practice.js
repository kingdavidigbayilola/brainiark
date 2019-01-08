const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => res.render('practice', { app: 'Brainiark', title: 'practice'}))
    .get('/english', (req, res) => res.render('questions/english', {session: 'English'}))
    .get('/maths', (req, res) => res.render('questions/maths', {session: 'Maths'}))
    .get('/chemistry', (req, res) => res.render('questions/chemistry', {session: 'Chemistry'}))
    .get('/physics', (req, res) => res.render('questions/physics', {session: 'Physics'}))



module.exports = router;