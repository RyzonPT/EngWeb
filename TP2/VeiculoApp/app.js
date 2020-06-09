console.log("TESTE")

var mapa = [
  {
    id:1,
    estado :0,
    ordem: 1,
    coords:[
      [41.553504, -8.406679],
      [41.555113, -8.406965],
      [41.557052, -8.407179],
      [41.558449, -8.407323],
      [41.560020, -8.407254],
      [41.560460, -8.405929],
      [41.559514, -8.405526],
      [41.559514, -8.405526],
      [41.558828, -8.404640],
      [41.558890, -8.403769],
      [41.557899, -8.403622],
      [41.557239, -8.403471],
      [41.556123, -8.404019],
      [41.555051, -8.404201],
      [41.554967, -8.405590],
      [41.554895, -8.406861]
    ]
  },{
    id:2,
    estado : 0,
    ordem: 1,
    coords:[
      [41.553504, -8.406679],
      [41.555113, -8.406965],
      [41.557052, -8.407179],
      [41.558449, -8.407323],
      [41.560020, -8.407254],
      [41.560460, -8.405929],
    ]
  },{
    id:3,
    estado : 0,
    ordem : 1,
    coords:[[41.552351, -8.407352], [41.552857, -8.405968], [41.553431, -8.404713],  [41.553953, -8.403447], [41.554394, -8.402460], [41.554876, -8.401280],  [41.555342, -8.400175], [41.555799, -8.398930], [41.556209, -8.397718], [41.556458, -8.397160], [41.556803, -8.397471], [41.556538, -8.397975], [41.555960, -8.399145], [41.555398, -8.400411], [41.554860, -8.401730], [41.554314, -8.402996], [41.553840, -8.404133],  [41.553302, -8.405528], [41.552869, -8.406751], [41.552620, -8.407245]   ]
  },{
    id:4,
    estado : 0,
    ordem: 1,
    coords:[
      [41.553504, -8.406679],
      [41.555113, -8.406965],
      [41.557052, -8.407179],
      [41.558449, -8.407323],
      [41.560020, -8.407254],
      [41.560460, -8.405929],
    ]
  }
]

var indices = []


async function getPassadeiras(){
  try {
     axios.get("http://localhost:4000/passadeiras")
    .then(dados =>{
      
      //initPassadeiras(dados.data)
      passadeiras = dados.data
      console.log(passadeiras)
    })
    
  } catch (e) {
    console.error(e);
  }
};
getPassadeiras();

function init(){
  var aux = 0;
  mapa.forEach(e =>{
    indices[aux] = 0
    aux++;
  })
}

async function updateVeiculoPassadeira(id,idPassadeira){
  try {
    console.log("WOWOW"+idPassadeira)
    res = await axios.put("http://localhost:4000/veiculos/passadeiras/"+id,{idPassadeira:idPassadeira});
    console.log(res)
  } catch (e) {
    console.error(e);
  }
};

function avaliaNotificacao(noti){
    if(noti.semaforo == "vermelho" && noti.count == 0)
    return 1
    else return 0;
}

async function putCoord(aux,c,idPassadeira){
    var coord = c.coords[indices[aux]]
    var id = c.id
  try {
     res = await axios.put("http://localhost:4000/veiculos/"+id,{latitude:coord[0],longitude:coord[1],idPassadeira:idPassadeira,dist:dist});

    console.log(res.data)
    console.log("AVALIACAO: "+avaliaNotificacao(res.data))
    c.ordem = avaliaNotificacao(res.data) /// res.data

    if(c.ordem == 1){
      indices[aux]++;
    }
  } catch (e) {
    c.ordem = 0
    console.error(e);
  }
};

var dist

getPassadeiraProxima = function(coords){
  console.log(coords)
    var result = null
    var i = 0;
    var distance = Number.MAX_SAFE_INTEGER
    passadeiras.forEach(pass => {
        var distanceAtual = getDistance({lat:coords[0],lng:coords[1]}, {lat:pass.latitude,lng:pass.longitude})
        console.log(distanceAtual)
        dist = distanceAtual
        if(distanceAtual < 50 && distanceAtual < distance ) {distance = distanceAtual; result = pass}
    })
    return result;
} 

function sendCoords(){
  var aux = 0;
  mapa.forEach(c =>{
    if(indices[aux]<c.coords.length){
      var result = getPassadeiraProxima(c.coords[indices[aux]])
      if(result!=null){
        if(c.estado == 0){
          updateVeiculoPassadeira(c.id,result.idPassadeira)
          c.estado = 1
        }
        putCoord(aux,c,result.idPassadeira)
      }
      else{
        if(c.estado == 1){
          updateVeiculoPassadeira(c.id,-1)
          c.estado = 0;
        }
        if(c.ordem == 1){
          indices[aux]++;
        }
      }

    }
    else{
      indices[aux] = 0
    }
    aux++;
  })
  updateTable()
}
setInterval(sendCoords,1500)


function updateTable(){
  var tableBody = document.getElementById('tbody');
  	
  	while (tableBody.childNodes.length)
      tableBody.removeChild(tableBody.childNodes[0]);
      var index = 0;
      mapa.forEach(e =>{
        var x = indices[index]
        if(x>= e.coords.length) 
        x = x -1;

        $("#tbody").append(`
        <tr>
      <td>
          `+e.id+`
      </td>
      <td>
          `+e.coords[x][0]+`
      </td>
      <td>
          `+e.coords[x][1]+`
      </td>
      <td>
      `+e.estado+`
      </td>
      <td>
      `+e.ordem+`
      </td>
    </tr>
    `)
    index ++;
      })
}





var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};