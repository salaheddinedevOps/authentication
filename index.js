const express = require('express');
const app = express();
const registerRouter = require('./routes/register.js');
const loginRouter = require('./routes/login.js');
const databaseRouter = require('./routes/database.js');
const PORT = 3030;
const accessToken = require('./routes/login.js').accessToken;
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/database", function auth(req, res, next) {
    if(req.sessions.authorization){
        jwt.verify(

        )
    }
});
app.use("/database", databaseRouter);
app.listen(PORT, ()=>{
    console.log("Listening on port" , PORT);
})