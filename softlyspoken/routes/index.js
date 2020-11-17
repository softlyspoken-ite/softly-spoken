var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
    res.render('index', { title: 'Express' });
=======
    res.render('profile', { title: 'Express' });
>>>>>>> 0bfe8d4a4ac4cb44cb068122bc4fdd7af84a72cd
});

module.exports = router;