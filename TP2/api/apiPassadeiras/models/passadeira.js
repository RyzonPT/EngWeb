var sql = require('./db.js');
var Passadeira = function(v){
    this.idPassadeira = v.idPassadeira;
    this.latitude = v.latitude;
    this.longitude = v.longitude;
};


Passadeira.create = function (p) {    
    return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO passadeira (latitude,longitude) values (?,?)", [p.latitude,p.longitude], function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
                resolve(res);
            }
        });   
    })       
};
Passadeira.get = function (id) {
    return new Promise(function(resolve, reject) {
    sql.query("Select * from passadeira where idPassadeira = ? ", [id], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
                resolve(res);
            }
        });   
    }) 
};
Passadeira.getAll = function (){
   return new Promise(function(resolve, reject) {
    sql.query("Select * from passadeira", function (err, res) {
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
              resolve(res);
            }
        });   
    })
}

Passadeira.update = function(id, p){
    return new Promise(function(resolve, reject) {
sql.query("UPDATE passadeira SET latitude = ?, longitude = ? WHERE idPassadeira = ?", [p.latitude,p.longitude, id], function (err, res) {
      if(err) {
          console.log("error: ", err);
          reject(err);
         }
       else{   
        resolve(res);
    }
});   
})
};

Passadeira.remove = function(id){
    return new Promise(function(resolve, reject) {
 sql.query("DELETE FROM passadeira WHERE idPassadeira = ?", id, function (err, res) {

            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
           
                resolve(res);
            }
        });   
    })
};

module.exports= Passadeira;