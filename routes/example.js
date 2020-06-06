const express = require('express');
var QUERY = require('../constants/queryConstants.js');
const connection = require(`../db/connection`)
const router = express.Router();


router.use('/',(req,res,next)=>{
  console.log('User wants to get access to example routes');
  // Added hotfix comment 2
  // Added hotfix comment 3
  next();
})

router.get('/', function (req, res) {
  // Added hotfix comment 2
  // Added hotfix comment 3
  console.log( " Query : "+QUERY.SELECT_ALL_BILL_TYPES);
    connection.query(QUERY.SELECT_ALL_BILL_TYPES, function (err, results, fields) {
      console.log("Result: "+results); // results contains rows returned by server
      console.log("Fields: "+fields); // fields contains extra meta data about results, if available
      console.log("Erorr: "+err);
    });
 res.send('subroute home page');
})
// define the about route
router.get('/about', function (req, res) {
  res.send('subroute about page');
})

module.exports = router
