var Passadeira = require('./passadeira.js');
var tempoVerde = 10;
var tempoAmarelo = 5;
var estado = "verde";
var timeout;

module.exports.start = function(){
    timeout = updateEstado();
}

function mudaEstado(){
    if(estado == "verde"){
        estado = "amarelo"
        timeout = setTimeout(updateEstado,1000*tempoAmarelo)
    }
    else if(estado == "amarelo" ){
        estado = "vermelho"
        timeout = setTimeout(updateEstado,1000*tempoVerde)
    }
    else if(estado == "vermelho"){
        estado = "verde"
        timeout = setTimeout(updateEstado,1000*tempoVerde)
    }
}

function updateEstado(){
    Passadeira.getAll()
    .then(passadeiras =>{
        mudaEstado()
        passadeiras.forEach(pass => {
            pass.estado = estado
            Passadeira.update(pass.idPassadeira,pass)
        });
    })
}
