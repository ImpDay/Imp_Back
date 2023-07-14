var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  

  res.render('index', { title: 'Express' });
});


const db = require('./../db'); // db 모듈 추가

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getAllMemos((rows) =>{
    res.render('index', { rows: rows });
  });
});

module.exports = router;
