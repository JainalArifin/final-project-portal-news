var express = require('express');
var router = express.Router();


router.use((req, res, next)=>{
  if(req.session.role === 'superAdmin' || req.session.role === 'admin'){
    next()
  }else {
    res.redirect('/login')
  }
})

/* GET home page. */
router.get('/', function(req, res) {
  res.render('dassboard');
});

module.exports = router;
