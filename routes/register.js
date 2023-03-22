const express = require('express');
const router  = express.Router();
let users = [
    {
        "username": "bob",
        "password": "bobAdmin"
    }
];
const isValid = (username)=>{
    let existedUsers = users.filter((user)=>{
        return user.username === username
    })
    if(existedUsers.length > 0){
        return true;

    }else{
        return false;
    }
}
router.post('/', (req,res)=>{
    const username = req.query.username;
    const password = req.query.password;
    if(username && password){
        if(!isValid(username)){
            users.push({"username": username, "password": password});
            res.send("You are registered as " + username);
        }else{
            res.send("You are already registered as " + username);
        }
    }else{
        res.send("please check your username and password");
    }
})
module.exports = router;
module.exports.users = users;