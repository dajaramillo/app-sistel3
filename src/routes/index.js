const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('../views/login.hbs');
});

module.exports = router;