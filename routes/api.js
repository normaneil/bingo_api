var express = require('express');
var router = express.Router();

router.all("*", function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BINGO API' });
});

/**
 * @url http://localhost:3000/api/generate-bingo-card
 */
router.get('/generate-bingo-card', function(req, res, next) {
  // Your code here
  return res.status(200).send({success:true});
});

module.exports = router;
