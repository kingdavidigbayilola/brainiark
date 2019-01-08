const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    username: {type: String, trim: true},
    email: {type: String},
    password: {type: String, unique: true},
    profile_picture: {
        type: String,
        default: 'https://res.cloudinary.com/dbkxx33pu/image/upload/v1546373946/samples/default.png'
    }
});
const User = mongoose.model('User', userSchema, 'users');
module.exports = User;