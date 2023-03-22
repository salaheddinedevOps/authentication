const express = require('express');
const router = express();
let Ids = [{
    "ID": 29066
}];
const isValid = (Id) =>{
    for(var i = 1; i < Ids.length; i++){
            if(Id[i]["ID"] === Id){
                return true;
                break;
            }
        
    }
}
router.post("/", (req,res)=>{
    const Id = req.query.Id;
    if(Id){
        if(isValid(Id)){
            res.send("Id Found: " + Id);
        }else{
            res.send("You are not subscribed");
        /*router.post('/subscribe', (req,res)=>{
                res.send("You should be subscribed")
            })*/ 
        }
    }else{
        res.send("Please enter your subId")
    }
})
module.exports = router;