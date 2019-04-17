var x = saludar();
console.log(typeof x);

function saludar() {
    return 2;
}

console.log(x); 

//objetos en Js

//var x = {nombre: "Juan",apellido: "Perez", edad:30};

//console.log(x.nombre);

//console.log(x["nombre"]);

//var prop = "apellido";

//console.log(x[prop]);

function persona(nombre, apellido,edad)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

var per1 = new persona("ana", "perez",10);
var per2 = new persona("Laura", "lopez",19);

//per1.nacionalidad = "argentina";

persona.prototype.nacionalidad = "Argentina";

for(prop in per1)
{
    console.log(prop);
}