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
      [41.553504, -8.406679],
      [41.555113, -8.406965],
      [41.557052, -8.407179],
      [41.558449, -8.407323],
      [41.560020, -8.407254],
      [41.560460, -8.405929],
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
     res = await axios.put("http://localhost:4000/pedestres/"+id,{latitude:coord[0],longitude:coord[1]});

    const todos = res.data;

    console.log("PONTO A");

    return todos;
  } catch (e) {
    console.error(e);
  }
};

function sendCoords(){
  var aux = 0;
  mapa.forEach(c =>{
    if(indices[aux]<c.coords.length){
      putCoord(c.coords[indices[aux]],c.id)
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
        console.log(e.coords)
        console.log(indices[index])
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
