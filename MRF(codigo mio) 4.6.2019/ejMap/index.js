var vec = [3,4,2,6,7,5];

//var dobles = [];

// for(var i = 0;i< vec.length; i++)
// {
//     dobles.push(vec[i]*2);
// }

// console.log(dobles);



//otra forma de hacer lo mismo de arriba

//para cada elemento del array llamo a la funcion
// vec.forEach(function(elemento){

//     dobles.push(elemento*2);
// });

//la funcion map retorna lo que devuelve la funcion callback (function)
// var dobles = vec.map(function(valor, indice, array){
//     return valor *2;
// });
//lo mismo de lo de arriba
// var dobles = vec.map(valor=>valor *2);

// //lo mismo de arriba
// var v = vec.map(a=>a *2);

// console.log(v);



//console.log(nombre);



//funcion que carga el select con los nombres
/*
function cargarSelect()
{
    var select = document.getElementsByTagName('select')[0];


    //si ya esta cargado no vuelve a cargarlos
    if(select.hasChildNodes())
    {
        return;
    }

    var nombre = empleados.map(function(empleado){

        return empleado.nombre;
    });

    nombre.forEach(function(nombre)
    {
        var opcion = document.createElement('option');
        opcion.textContent = nombre;
        select.appendChild(opcion);
    });
}*/

var x = empleados.map(function(e){

    return {"id": e.id, "email":e.email};
});

console.log(x);