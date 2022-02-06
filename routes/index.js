const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/budget', (req, res) => {
    res.render('index');
});

router.get("/signup", (req, res) => {
    res.render("signup");
})

module.exports = router;