var sql = require('./db.js');
var Pedestre = function(pedreste){
    this.idPedestre = pedreste.idPedestre;
    this.latitude = pedreste.latitude;
    this.longitude = pedreste.longitude;
    this.idPassadeira = pedreste.idPassadeira;
};


Pedestre.createPedestre = function (p) {    
    return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO pedestre (latitude,longitude,idPassadeira) values (?,?,?)", [p.latitude,p.longitude,p.idPassadeira], function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
                console.log(res.insertId);
                resolve(res);
            }
        });   
    })       
};
Pedestre.getPedestrebyId = function (pedestreId) {
    return new Promise(function(resolve, reject) {
    sql.query("Select * from pedestre where idPedestre = ? ", [pedestreId], function (err, res) {             
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
Pedestre.getAllPedestres = function (){
   return new Promise(function(resolve, reject) {
    sql.query("Select * from pedestre", function (err, res) {
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

Pedestre.updatePedestre = function(id, p){
    return new Promise(function(resolve, reject) {
sql.query("UPDATE pedestre SET latitude = ?, longitude = ?, idPassadeira = ? WHERE idPedestre = ?", [p.latitude,p.longitude, p.idPassadeira ,id], function (err, res) {
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

Pedestre.updatePassadeira = function(idPedestre, idPassadeira){
    return new Promise(function(resolve, reject) {
sql.query("UPDATE pedestre SET idPassadeira = ? WHERE idPedestre = ?", [idPassadeira ,idPedestre], function (err, res) {
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

Pedestre.remove = function(id){
    return new Promise(function(resolve, reject) {
 sql.query("DELETE FROM pedestre WHERE idPedestre = ?", id, function (err, res) {

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

Pedestre.getPedestresPassadeira = function () {
    return new Promise(function(resolve, reject) {
    sql.query("Select * from pedestre where idPassadeira != -1", function (err, res) {             
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

Pedestre.getNumberPedestres = function (idPassadeira) {
    return new Promise(function(resolve, reject) {
    sql.query("Select count(*) AS number from pedestre where idPassadeira = ?", idPassadeira, function (err, res) {             
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

module.exports= Pedestre;