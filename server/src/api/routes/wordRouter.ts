var express = require('express');
var router = express.Router();
const word_controller = require('../controllers/wordController');

// const urlencodedParser = express.urlencoded({ extended: false });

router.route('/')
    // .all(urlencodedParser)
    .get(word_controller.word_detail);

module.exports = router;




