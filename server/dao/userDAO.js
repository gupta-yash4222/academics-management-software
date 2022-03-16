const { reject } = require('bcrypt/promises');
const User = require('../../models/user.js');


function findUser(username) {
    return new Promise( (resolve, reject) => {

        User.findOne({username: username}, (err, result) => {
            if(err) {
                reject({
                    elem: null,
                    message: err
                });
            }
            else if (!result) {
                reject({
                    elem: result,
                    message: "User not found"
                });
            }
            else {
                resolve({
                    elem: result,
                    message: "User found successfully"
                })
            }
        });

    });
}


function addUser(username, rollNo, name, hashPassword) {
    return new Promise( (resolve, reject) => {
        var user = new User({
            username: username,
            rollNo: rollNo,
            name: name,
            password: hashPassword,
            department: "Dharma"
        });

        findUser(username)
        .then( result => {
            reject({
                status: 200,
                message: "User already exists"
            });
        })
        .catch( error => {
            if(error.message ===  "User not found"){
                user.save( err => {
                    if(err) {
                        reject({
                            status: 500,
                            message: "Internal server error in registering user"
                        });
                    }
                    else {
                        resolve({
                            status: 200,
                            message: "User successfully registered"
                        });
                    }
                });
            }
            else {
                reject({
                    status: 500,
                    message: "Internal server error"
                });
            }
        });
    });
}

module.exports = {addUser, findUser};