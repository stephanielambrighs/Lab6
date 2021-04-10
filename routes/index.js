var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('votes/index', {});
});

router.get('/updatevotes', function(req, res, next){
  res.render('votes/updatevotes', {});
});

module.exports = router;
