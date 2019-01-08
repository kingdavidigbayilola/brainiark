const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');
const fs = require('fs');
const path = require('path')
const User = require('../models/user');
const middleware = require('../middleware/secure');
const {pages_security} = middleware;
const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_ID,
    api_secret: process.env.API_SECRET
});

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, req.user.username + '_' + new Date().toDateString() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }else{
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 3
    },
    fileFilter: fileFilter
})

router.get('/', pages_security, (req, res) => {
        res.render('profile/account', {user: req.user});
    });


router.route('/username').all(pages_security, (req, res) => {
     const updateObj = {
         username: req.body.username
     }
     if (req.body.username == null || req.body.username == '') {
         res.redirect('/account');
     } else {
         User.updateOne({
                 _id: req.user.id
             }, {
                 $set: updateObj
             })
             .exec()
             .then(doc => {
                 if (doc) {
                     res.redirect('/account');
                 } else {
                     res.send('error occured');
                 }
             })
     }
});

router.all('/image', pages_security, upload.single('profile_picture'), async function(req, res, next){
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    const pic = {
        profile_picture: result.secure_url
    }
    const id = req.user.id

    User.updateOne({_id: id}, {$set: pic})
    .exec()
    .then(() => {
        fs.unlink(req.file.path, (err) => {
            if(err){
                throw err;
            }else{
                 res.redirect('/account');
            }
        })
    })
    .catch(err => {
        throw err
    })
})

router.get('/:user', pages_security, (req, res, next) => {
    const current_user = req.params.user;
    User.find({username: current_user})
    .then(user => {
        const current_username = req.params.user;
        res.send(`<h3>Hello User ${current_username}</h3>`);
    })
    .catch(err => {
        throw err
    })
});


module.exports = router;