// function Saludar() {
//     //document.write("escribo en documento asdasd");
//     console.log("Escribo en la consola asd");
//     window.alert("Escribo en alert");
//     document.getElementById("p1").innerHTML = "Esto es un parrafo";
// }

// document.getElementById("miDiv").innerHTML = "<h2>TITULO h2</h2>";

/*document.getElementById("p1").onclick = (function(){

    this.innerHTML = "asdasd";
})*/ //esto no se hace...................


//esto si
var miParrafo;

window.addEventListener("load", inicializarEventos);

function inicializarEventos()
{
    miParrafo = document.getElementById("p1");
    miParrafo.addEventListener("click", function(){

        this.innerHTML = "hola";
    });
}



window.addEventListener("Load", function(){

    document.getElementById("p1").addEventListener("click", function(){
        this.innerHTML = "Hola";
    })
})








document.getElementById("p1").addEventListener("click", function(){

    this.innerHTML = "sarasa";
})

document.getElementById("p1").addEventListener("click", function(){
    
        this.style.color = "blue";
    })