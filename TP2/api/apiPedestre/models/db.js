var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'pedestres'
})


connection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });



module.exports = connection;
