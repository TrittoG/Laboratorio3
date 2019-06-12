//lo que se codea aca se transpila a el app.js y el index lo toma de ahi 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (v) {
            this._nombre = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Edad", {
        set: function (v) {
            this._edad = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        set: function (v) {
            this._apellido = v;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.presentarse = function () {
        console.log("Hola soy " + this.Nombre);
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.presentarse = function () {
        _super.prototype.presentarse.call(this);
    };
    return Empleado;
}(Persona));
var p1 = new Persona("Juan", "lopez", 30);
var emp1 = new Empleado("jose", "perez", 43, 2000);
p1.Nombre = "ana";
p1.presentarse();
