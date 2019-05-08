window.addEventListener('load', inicializarEventos);

function inicializarEventos()
{
    document.getElementById('btnTabla').addEventListener('click', cargarTabla);
}

function cargarTabla()
{
    //console.log(personas);

    var tabla = document.createElement('table');

    //aplico estilos

    tabla.setAttribute('border', '1px solid black');
    //tabla.setAttribute('class', 'tabla');
    tabla.setAttribute('style','border-collapse:collapse');
    tabla.setAttribute('width', '700px');


    var cabecera = document.createElement('tr');

    // var maximo = 0;
    // var contador= 0;

    // for(var g in personas)
    // {
    //     //console.log(g);
    //     for(var h in personas[g])
    //     {
    //         contador = contador + 1;
           
    //     }
    //     if(contador>maximo)
    //     {
    //         maximo = contador;
    //     }
    //     //console.log(maximo);
    // }
   

    for(var clave in personas[0])
    {
        var th = document.createElement('th');

        var texto = document.createTextNode(clave);
        


        th.appendChild(texto);
        th.setAttribute('style','color:red');
        //esto es lo mismo que lo comentado arriba
        //th.textContent = clave;
        cabecera.appendChild(th);
    }

    tabla.appendChild(cabecera);

    //el for in obtiene solo las claves por cada iteracion
    for(var i in personas)
    {
        var fila = document.createElement('tr');

        for(var j in personas[i])
        {
            var celda = document.createElement('td');
            celda.setAttribute('style', "text-align:center");
            var dato = document.createTextNode(personas[i][j]);

            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    var divi = document.getElementById('info');
    divi.appendChild(tabla);

}