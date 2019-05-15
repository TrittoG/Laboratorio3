//Enviar peticion GET a http://localhost:3000/traer
//pasar parametro "collection"  con valor "personas"  
//La respuesta sera un array con las personas



var xhr;


//GET
function traerPersonas()
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarPersonas;
    var cadena = 'http://localhost:3000/traer?collection=personas';
    xhr.open('GET',cadena,true);
    xhr.send();
}


//POST -BORRAR
function borrarPersonas(id)
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarPersonas;
    var cadena = 'http://localhost:3000/eliminar';
    var body = {'collection':'personas','id' : id}
    xhr.open('POST', cadena, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
}


function procesarPersonas()
{
    var spiner = document.getElementById('spinner');

    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            spiner.style = 'display : none';
            arrayPersonas = JSON.parse(xhr.responseText);
            refrescarLista(arrayPersonas);
        }
        else
        {
            alert('Error: ' + xhr.status + " " + xhr.statusText);
        }
    }
    else
    {
           spiner.style = 'display: block';
    }
}