var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'mysqldbpassadeira',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'SPWS-passadeira'
})


connection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });



module.exports = connection;
