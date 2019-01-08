var express = require('express');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var path = require('path');
var flash = require('connect-flash');
var session = require('cookie-session');
var passport = require('passport');
var bodyParser = require('body-parser');

require('./config/passport');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.MLAB_AD}:${process.env.MLAB_PW}@ds018258.mlab.com:18258/brainiark`, () => console.log("connected to mongoose"));
mongoose.Promise = global.Promise;

var appRoutes = require('./routes/index');
var practiceRoutes = require('./routes/practice');
var accountRoutes = require('./routes/account');
var trackRoutes = require('./routes/track');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(favicon('favicon.ico'));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['hhabraberlghaer'],
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', appRoutes);
app.use('/practice', practiceRoutes);
app.use('/account', accountRoutes);
app.use('/track', trackRoutes);



module.exports = app;