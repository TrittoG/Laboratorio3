var vec = [3,4,2,6,7,5];


var suma =0;

//suma todos los elementos del array
console.log("suma con for");
for(var i =0;i<vec.length;i++)
{
    suma += vec[i];
}

console.log(suma);


//lo mismo pero con foreach
console.log("suma con foreach");

var suma2 = 0;
vec.forEach(function(numero){

    suma2 +=numero;
});

console.log(suma2);


//lo mismo pero con reduce
console.log("suma con reduce");

var sum = vec.reduce(function(anterior, actual, indice){
    return anterior + actual;
}, 0);



var sum = vec.reduce(function(mayor, actual, indice){
    if(actual > mayor)
    {
        return actual;
    }
    else
    {
        return mayor;
    }
}, 0);

console.log(sum);






var sueldos = empleados.reduce(function(anterior, actual){
    return anterior.sueldo + actual.sueldo;
})

console.log(sueldos);