var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('servicios',{isServicios:true}); // servicios.hbs
});

module.exports = router;
