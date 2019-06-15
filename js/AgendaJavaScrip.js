//aqui tenemos una funcion con un cruserel basico para el inicio de obtener los datos 
function inicial(){
  const api="http://www.raydelto.org/agenda.php";
  //aqui tenemos el id del elemento que vamos a sustituir por el que nos retorna la funcion
  const elemento=document.getElementById("article_verPerson");
  //esta es la funcion que vamos a obtener los elemento de la api
  function getData(){
    //aqui le mandamo la url para la peticion
    fetch(api)
    //nos mada la respuesta en formato json 
    .then((Response)=> Response.json())
    .then(data => {
      //aqui hacemos una funcion de js6 con el map que es una funcion que nos recorre la lista y nos devuelve un html con todos los elementos de la list
      let output= data.map(function (show){
        
         return `
           <article class="showagende">
           <img src="img/person.png" id="imagen">
           <div id="info">
              <h2>Nombre</h2>
              <h3>${show.nombre}</h3>
              <h2>Apellido</h2>
              <h3>${show.apellido}</h3>
              <h2>Telefono</h2>
              <h3>${show.telefono}</h3>
            </div>  
           </article>
         `
        
      }).join('');
        //aqui le asignamos los elementos que nos devuelve la funcion output a el elemento de html que esta documentado
        elemento.innerHTML=output;
       
    })
    .catch(error=>console.log(error));
    
  };
 //aqui llamamos la funcion que hace la obtencion de los datos
  getData();
};
//aqui hacemos lo mismo de aya arriba
function setData(){
  //obtenemos lo que escriben en el formulario 
  const api="http://www.raydelto.org/agenda.php";
  var nombre=document.getElementsByName("nombre")[0].value;
  var apellido=document.getElementsByName("apellido")[0].value;
  var telefono=document.getElementsByName("telefono")[0].value;
  //hacemos un objecto de json que se llama data para luego enviar lo con el post
  var data={
    nombre:nombre,
    apellido:apellido,
    telefono:telefono
  };
   //aqui la funcion que mandara los datos
   function postData(){
     //aqui le ponemos al url y decimos que tipo de metodo vamos a estar haciendo post get etc.
      fetch(api,{
        method:'POST',
        //aqui estamos parciando el json a string para enviar se lo al body como key y value/.
        body:JSON.stringify(data)
       
      }).then(res=>res.json())
      //aqui capturamos y mostra mos por consola si hay error en el envio de los datos
      .catch(error=>console.error('error: ',error))
      //aqui capturamos y mostramos por consola si fue exitosa el envio de los datos
      .then(response =>console.log('success: ',response));
      alert("Se ha enviado los datos");
   }
 postData();

}

