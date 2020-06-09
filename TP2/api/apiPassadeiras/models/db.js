var mysql = require('mysql')
//var connection = mysql.createConnection('mysqldbpassadeira://root:root@mysqldbpassadeira/spws-passadeira');

//var connection = mysql.createConnection('mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');
var connection = mysql.createConnection({
  host: 'mysqldbpassadeira',
  user: 'passadeira',
  password: 'root',
  port: 3306,
  database: 'spws-passadeira'
})

// mysql://root:password@localhost:port/dbName



connection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });



module.exports = connection;
