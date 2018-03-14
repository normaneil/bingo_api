var express = require('express');
var router = express.Router();
var Random = require("random-js");
var random = new Random(Random.engines.mt19937().autoSeed());
var rand = require("random-js")();
var dateFormat = require('dateformat');

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

  
  var now = new Date();

  // data that will be coming from client
  var cpNumber = '639276510421';
  var cardAmount  = 20.00;
  var drawTime = '9:00 PM';
  var numCards = 1;

  var result = [
    {
      id: "639276510421",
      trxid: "97FF8F0F67D8D8EA8F45",
      createAt: "2018-03-13 10:02:11",
      drawdate: "2018-03-13",
      drawtime: "9:00PM",
      card: generateCard()
    }
  ]

  // This generates card and store in array
  function generateCard(){
    var card =[];
    for (i = 0; i < 25; i++) { 
      if ([0, 5, 10, 15, 20].indexOf(i) >= 0) {
        //push for B 
        card.push(rand.integer(1, 15));
      }
      else if ([1, 6, 11, 16, 21].indexOf(i) >= 0) {
        //push for L
        card.push(rand.integer(16, 30));
      }
      else if ([2, 7, 17, 22].indexOf(i) >= 0) {
        //push for O
        card.push(rand.integer(31, 45));
      }
      else if ([3, 8, 13, 18, 23].indexOf(i) >= 0) {
        //push for C
        card.push(rand.integer(46, 60));
      }
      else if ([4, 9, 14, 19, 24].indexOf(i) >= 0) {
        //push for K
        card.push(rand.integer(61, 75));
      }
      else // if its 12 push F
      {
        card.push("F");
      }
    }
    //return card.toString();
    return card;
  }


  return res.status(200).send({
    success:true,
    result: result
  });
});

module.exports = router;
