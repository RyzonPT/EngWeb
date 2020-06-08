console.log("TESTE")

var mapa = [
  {
    id:1,
    estado :1,
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
    estado : 1,
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
    estado : 1,
    coords:[[41.552351, -8.407352], [41.552857, -8.405968], [41.553431, -8.404713],  [41.553953, -8.403447], [41.554394, -8.402460], [41.554876, -8.401280],  [41.555342, -8.400175], [41.555799, -8.398930], [41.556209, -8.397718], [41.556458, -8.397160], [41.556803, -8.397471], [41.556538, -8.397975], [41.555960, -8.399145], [41.555398, -8.400411], [41.554860, -8.401730], [41.554314, -8.402996], [41.553840, -8.404133],  [41.553302, -8.405528], [41.552869, -8.406751], [41.552620, -8.407245]   ]
  },{
    id:4,
    estado : 1,
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

function init(){
  var aux = 0;
  mapa.forEach(e =>{
    indices[aux] = 0
    aux++;
  })
}

async function putCoord(coord,id){
  try {
     res = await axios.put("http://localhost:4000/veiculos/"+id,{latitude:coord[0],longitude:coord[1]});

    const todos = res.data;
    console.log(res.data)
    coord.estado = res.data.semaforo; /// res.data

    console.log("PONTO A");

    return todos;
  } catch (e) {
    coord.estado = 0
    console.error(e);
  }
};

function sendCoords(){
  var aux = 0;
  mapa.forEach(c =>{
    if(indices[aux]<c.coords.length){
      putCoord(c.coords[indices[aux]],c.id)
      if(c.coords[indices[aux]].estado == 1)
      indices[aux]++;
    }
    else{
      indices[aux] = 0
    }
    aux++;
  })
  updateTable()
}
setInterval(sendCoords,500)


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
