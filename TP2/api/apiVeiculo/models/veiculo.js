var sql = require('./db.js');
var Veiculo = function(v){
    this.idVeiculo = v.idVeiculo;
    this.latitude = v.latitude;
    this.longitude = v.longitude;
    this.idPassadeira = v.idPassadeira;
};


Veiculo.create = function (p) {    
    return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO veiculo (latitude,longitude, idPassadeira) values (?,?,?)", [p.latitude,p.longitude,p.idPassadeira], function (err, res) {
            
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
Veiculo.get = function (id) {
    return new Promise(function(resolve, reject) {
    sql.query("Select * from veiculo where idVeiculo = ? ", [id], function (err, res) {             
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
Veiculo.getAll = function (){
   return new Promise(function(resolve, reject) {
    sql.query("Select * from veiculo", function (err, res) {
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

Veiculo.update = function(id, p){
    return new Promise(function(resolve, reject) {
sql.query("UPDATE veiculo SET latitude = ?, longitude = ?, idPassadeira = ? WHERE idVeiculo = ?", [p.latitude,p.longitude, p.idPassadeira ,id], function (err, res) {
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

Veiculo.updatePassadeira = function(idVeiculo, idPassadeira){
    return new Promise(function(resolve, reject) {
sql.query("UPDATE veiculo SET idPassadeira = ? WHERE idVeiculo = ?", [idPassadeira ,idVeiculo], function (err, res) {
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

Veiculo.remove = function(id){
    return new Promise(function(resolve, reject) {
 sql.query("DELETE FROM veiculo WHERE idVeiculo = ?", id, function (err, res) {

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

Veiculo.getVeiculosPassadeira = function () {
    return new Promise(function(resolve, reject) {
    sql.query("Select * from veiculo where idPassadeira != -1 ", function (err, res) {             
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

module.exports= Veiculo;