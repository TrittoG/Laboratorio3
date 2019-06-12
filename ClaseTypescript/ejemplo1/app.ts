//lo que se codea aca se transpila a el app.js y el index lo toma de ahi 



// //creo variables con let
// let nombre1:string = "juan";
// let nombre2:string = 'jose';
// let nombre3:string = `Bartolo`;

// //console.log(nombre1 + ", " + nombre2 + ", " + nombre3);

// console.log(`${nombre1}, ${nombre2}, ${nombre3}`);


// let vec:number[] = [1,4,5,3];

// vec.push("hola");


// enum Talle
// {
//     xs,
//     s,
//     m,
//     l,
//     xl
// }

// console.log(Talle.xl);

// function f1(a:number, b:number):number
// {
//     return a+b;
// }

// let x:(a:number, b:number)=>number

// x = f1;


//objetos

// let Persona:{edad:number, nombre:string,apellido:string, getNombre:()=>string} ={
//     nombre:"Juan",
//     apellido:"Perez",
//     edad:23,
//     getNombre: function():string{
//         return this.nombre;
//     }
// };

//Persona.altura = 1.85;
//tipo


// type Persona = {edad:number, nombre:string,apellido:string, getNombre:()=>string} ;

// let p1:Persona={
//     nombre:"Juan",
//     apellido:"Perez",
//     edad:23,
//     getNombre: function():string{
//         return this.nombre;
//     }
// };



//clases
abstract class Persona
{
    protected _nombre:string;
    protected _apellido:string;
    protected _edad:number;

    constructor(nombre:string, apellido:string, edad:number)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }

    
    public set Nombre(v : string) {
        this._nombre = v;
    }

    
    public set Edad(v : number) {
        this._edad = v;
    }

    
    public set Apellido(v : string) {
        this._apellido = v;
    }

    
    public get Nombre() : string {
        return this._nombre;
    }

    public get Apellido() : string {
        return this._apellido;
    }

    
    public get Edad() : number {
        return this._edad;
    }
    
    
    
    protected presentarse()
    {
        console.log("Hola soy " + this.Nombre);
    }

}


class Empleado extends Persona
{
    public sueldo:number;
    constructor(nombre:string, apellido:string, edad:number, sueldo:number)
    {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }

    public presentarse():void
    {
        super.presentarse();
    }

    public toJson():string
    {
        return `{"nombre": ${this.Nombre}, "Apellido": ${this.Apellido}, "Edad": ${this.Edad}}`;
    }


}



//let p1 = new Persona("Juan", "lopez", 30);

let emp1 = new Empleado("jose", "perez", 43,2000);



//p1.Nombre = "ana";



