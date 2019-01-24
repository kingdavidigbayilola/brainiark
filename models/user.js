const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstname: { type: String, unique: true},
    lastname: { type: String, unique: true},
    username: { type: String, trim: true, unique: true},
    email: { type: String, unique: true},
    password: {type: String, unique: true},
    profile_picture: {
        type: String,
        default: 'https://res.cloudinary.com/dbkxx33pu/image/upload/v1546952277/plftlkghoh81emxob4jx.jpg'
    },
    resetPasswordToken: { type: String},
    resetPasswordExpires: { type: Date}
});
const User = mongoose.model('User', userSchema, 'users');
module.exports = User;