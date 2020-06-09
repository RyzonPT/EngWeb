var sql = require('./db.js');

var PassadeiraVeiculo = function(v){
    this.idpassadeiraveiculo = v.idpassadeiraveiculo;
    this.idPassadeira = v.idPassadeira;
    this.idVeiculo = v.idVeiculo;
};

PassadeiraVeiculo.createPassadeiraVeiculo = function(p){
    return new Promise(function(resolve, reject) {
        sql.query("INSERT INTO passadeiraveiculo (idPassadeira,idVeiculo) values (?,?)", [p.idPassadeira,p.idVeiculo], function (err, res) {
                
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

PassadeiraVeiculo.getAllPassadeiraVeiculo = function (){
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

 PassadeiraVeiculo.removePassadeiraVeiculo = function(p){
    return new Promise(function(resolve, reject) {
 sql.query("DELETE FROM passadeiraveiculo WHERE idPassadeira = ? AND idVeiculo = ?", [p.idPassadeira, p.idVeiculo], function (err, res) {

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

module.exports= PassadeiraVeiculo;