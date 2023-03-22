const express = require('express');
const router = express.Router();
const users = require('./register').users;
let accessToken = [];
const isValid = (username, password) =>{
    let validUsers = users.filter((user)=>{
        return user.username === username && user.password === password
    })
    if(validUsers.length > 0){
        return true;
    }else{
        return false;
    }
}
router.post('/', (req,res)=>{
    const username = req.query.username;
    const password = req.query.password;
    if(username && password){
        if(isValid(username, password)){
            res.send("Logged in successfully");
            accessToken = 'Authorization'
        }else{
            res.send("Invalid username or password, Please register");
        }
    }else{
        res.send("Enter your username and password");
    }
})
module.exports = router;
module.exports.accessToken = accessToken;