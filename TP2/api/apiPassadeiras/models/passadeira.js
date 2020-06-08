var sql = require('./db.js');
var Passadeira = function(v){
    this.idPassadeira = v.idPassadeira;
    this.latitude = v.latitude;
    this.longitude = v.longitude;
    this.estado = v.estado;
};






Passadeira.create = function (p) {    
    return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO passadeira (latitude,longitude,estado) values (?,?)", [p.latitude,p.longitude,p.estado], function (err, res) {
            
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
sql.query("UPDATE passadeira SET latitude = ?, longitude = ?,estado = ? WHERE idPassadeira = ?", [p.latitude,p.longitude,p.estado, id], function (err, res) {
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

//////////////////////////////  Passadeira pedestre


Passadeira.createPassadeiraPedestre = function(p){
    return new Promise(function(resolve, reject) {
        sql.query("INSERT INTO passadeirapedestre (idpassadeira,idpedestre) values (?,?)", [p.idpassadeira,p.idpedestre], function (err, res) {
                
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
}

Passadeira.getAllPassadeiraPedestre = function (){
    return new Promise(function(resolve, reject) {
     sql.query("Select * from passadeirapedestre", function (err, res) {
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

 Passadeira.removePassadeiraPedestre = function(p){
    return new Promise(function(resolve, reject) {
 sql.query("DELETE FROM passadeirapedestre WHERE idPassadeira = ? AND idPedestre = ?", [p.idpassadeira, p.idpedestre], function (err, res) {

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

////////////////////////////////// Passadeira Veiculo

Passadeira.createPassadeiraVeiculo = function(p){
    return new Promise(function(resolve, reject) {
        sql.query("INSERT INTO passadeiraveiculo (idPassadeira,idVeiculo) values (?,?)", [p.idpassadeira,p.idveiculo], function (err, res) {
                
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
}

Passadeira.getAllPassadeiraVeiculo = function (){
    return new Promise(function(resolve, reject) {
     sql.query("Select * from passadeiraveiculo", function (err, res) {
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

 Passadeira.removePassadeiraVeiculo = function(p){
    return new Promise(function(resolve, reject) {
 sql.query("DELETE FROM passadeiraveiculo WHERE idPassadeira = ? AND idVeiculo = ?", [p.idpassadeira, p.idveiculo], function (err, res) {

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