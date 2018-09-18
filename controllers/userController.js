const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    signUp: (params) => {
        return new Promise((resolve, reject) => {
            User
                .findOne({email: params.email})
                .then( user => {
                    let errors = {};
                    errors.email = "Email Already Exist";
                    errors.status = 400;
                    return reject(errors);
                    
                })
                .catch(err => {
                    
                })
        })
    }
}