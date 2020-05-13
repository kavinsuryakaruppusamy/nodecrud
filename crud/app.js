const express = require('express')
const app = express();

var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'

})

connection.connect()


  creating a new table 
var sql = "CREATE TABLE kavinsurya (name VARCHAR(255), address VARCHAR(255), email VARCHAR(255))";
 connection.query(sql, function (err, result) {
   if (err) throw err;
   console.log("Table created");
  });



app.listen(6000, () => {
  console.log('Example app listening on port 6000!')
});