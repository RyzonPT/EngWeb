var sql = require('./db.js');

var PassadeiraPedestre = function(v){
    this.idpassadeirapedestre = v.idpassadeirapedestre;
    this.idPassadeira = v.idPassadeira;
    this.idPedestre = v.idPedestre;
};

PassadeiraPedestre.createPassadeiraPedestre = function(p){
    return new Promise(function(resolve, reject) {
        sql.query("INSERT INTO passadeirapedestre (idPassadeira,idPedestre) values (?,?)", [p.idPassadeira,p.idPedestre], function (err, res) {
                
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

PassadeiraPedestre.getAllPassadeiraPedestre = function (){
    console.log('get allllllllll')
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

 PassadeiraPedestre.getAllCountPedestres = function (id){
    return new Promise(function(resolve, reject) {
     sql.query("Select count(*) AS pedestres from passadeirapedestre WHERE idPassadeira = ?",id, function (err, res) {
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

 PassadeiraPedestre.removePassadeiraPedestre = function(p){
    return new Promise(function(resolve, reject) {
 sql.query("DELETE FROM passadeirapedestre WHERE idPassadeira = ? AND idPedestre = ?", [p.idPassadeira, p.idPedestre], function (err, res) {

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

module.exports= PassadeiraPedestre;