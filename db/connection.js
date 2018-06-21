var mysql = require('mysql2');
const appConfig = require('../appConfig.js');
const dbConfig = require('./dbConfig')[appConfig.env || 'development']

var connection = mysql.createConnection(dbConfig);

connection.connect(function(err) {
  console.log("Connetction: "+ JSON.stringify(connection.config));
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports =  connection

// simple query
