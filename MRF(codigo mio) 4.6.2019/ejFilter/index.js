var vec = [3,4,2,6,7,5];

//lo ordena de menor a mayor
vec.sort();


////saco solo los valores de vec pares
// for(var i = 0; i< vec.length;i++)
// {
//     if(vec[i]%2 == 0)
//     {
//         console.log(vec[i]);
//     }
// }

// //lo mismo de arriba pero con foreach
// vec.forEach(function(numero){
//     if(numero % 2 == 0)
//     {
//         console.log(numero);
//     }
// });


//  var pares = vec.filter(function(numero){
//     if(numero % 2 == 0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// });


var pares = vec.filter(function(numero){
    return(numero % 2 == 0);
});

console.log(pares);


//muestro solo los hombres de la lista
var hombres = empleados.filter(function(empleado){

    return(empleado.genero == "Male");
   
    
});

console.log(hombres);