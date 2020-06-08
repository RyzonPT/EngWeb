console.log("TESTE")

var mapa = [
  {
    id:1,
    coords:[
      [41.555061, -8.401276],
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
    coords:[
      [41.555113,-8.406965],
    ]
  },{
    id:3,
    coords:[
      [41.553504, -8.406679],
      [41.555113, -8.406965],
      [41.557052, -8.407179],
      [41.558449, -8.407323],
      [41.560020, -8.407254],
      [41.560460, -8.405929],
    ]
  },{
    id:4,
    coords:[[41.554154, -8.400518], [41.554467, -8.400711], [41.554724, -8.400958], [41.555163, -8.401273], [41.555438, -8.401252], [41.555610, -8.401452], [41.555838, -8.401682], [41.555610, -8.401452],  [41.555438, -8.401252], [41.555163, -8.401273],  [41.554724, -8.400958], [41.554467, -8.400711], [41.554154, -8.400518] ]
  }
]



var indices = []

var passadeiras;

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
init();

function init(){
  var aux = 0;
  mapa.forEach(e =>{
    indices[aux] = 0
    aux++;
  })
}

async function putCoord(coord,id,idPassadeira){
  try {
    console.log("ENTEI")
     res = await axios.put("http://localhost:4000/pedestres/"+id,{latitude:coord[0],longitude:coord[1],idPassadeira: idPassadeira});

    const todos = res.data;

    console.log("PONTO A");

    return todos;
  } catch (e) {
    console.error(e);
  }
};

var dist;

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
      if(result!= null){
        putCoord(c.coords[indices[aux]],c.id,result.idPassadeira)
      }
      indices[aux]++;
    }
    else{
      indices[aux] = 0
    }
    aux++;
  })
  updateTable()
}
setInterval(sendCoords,2000)


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