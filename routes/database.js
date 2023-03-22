const express = require('express');
const router = express.Router();
let users = [{
    "username": "bob",
    "email": "bob@example.com"
}]
router.get('/', (req, res) => {
    res.send(users)
})
module.exports = router;